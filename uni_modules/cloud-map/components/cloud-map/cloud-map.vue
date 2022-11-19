<template>
	<view style="width: 1024px;">
		<view class="flex text-gray" style="margin-bottom: 20rpx;align-items: center;">
			<button size="mini" type="primary" @click="btnSearch"
				style="margin-right:20rpx;align-items: center;">搜索</button>
			<view v-if="name" style="flex:1">
				<text>{{name}}</text>
				<view class="">
					<text>{{address}}</text>
				</view>
			</view>
			<view v-else style="flex:1">拖动地图或搜索改变位置</view>
			<uni-easyinput placeholder="搜索地址" disabled style="opacity: 0;" />
		</view>
		<view class="flex">
			<map id="map" class="map" min-scale="10" :scale="17" :show-location="true" :latitude="latitude"
				:longitude="longitude" @regionchange="onRegionchange">
				<cover-image class="map-center-icon" src="./location-center.png"></cover-image>
			</map>
			<view class="">
				<view class="nearAddressList">
					<scroll-view scroll-y="true" :scroll-top="scrollTop" :show-scrollbar="true">
						<view v-for="(item,index) in nearAddressList" :key="index" @click="selectAddress(item,index)"
							class="address">
							<view class="item" :class="{current:index==nearAddressIndex}">
								<text class="title">{{index+1}}、{{item.title}}</text>
								<text class="desc">{{item.address}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog mode="input" message="成功消息" :duration="2000" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	let _mapCtx = null;
	const db = uniCloud.database();
	export default {
		name: 'cloud-map',
		data() {
			return {
				name: "",
				addressSearch: "",
				address: "",
				timer: false,
				latitude: 39.909,
				longitude: 116.39742,
				nearAddressList: [],
				nearAddressIndex: 0,
				scrollTop: 0
			};
		},
		props: {
			value: [Number, String, Array, Object],
			location: {
				// 排列方向 row column
				type: Object,
				default: () => {}
			},
		},
		created() {
			_mapCtx = uni.createMapContext('map');
			console.log("this.value", this.value)
			if (this.value && this.value.latitude) {
				this.setValues(this.value);
				this.reverseGeocoder();
			}
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')
			if (this.formItem) {
				if (this.formItem.name) {
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}
		},
		watch: {
			value(newVal) {
				console.log("watch value", newVal)
				if (newVal) {
					this.setValues(newVal);
				}
			}
		},
		methods: {
			btnSearch() {
				this.$refs.popup.open()
			},
			/**
			 * 点击确认按钮触发
			 * @param {Object} done
			 * @param {Object} value
			 */
			confirm(value) {
				this.addressSearch = value;
				this.geocoder()
			},
			/**
			 * 初始化变量值
			 */
			init() {

			},
			/**
			 * 获取父元素实例
			 */
			getForm(name = 'uniForms') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false;
					parentName = parent.$options.name;
				}
				return parent;
			},
			setValues(newVal) {
				this.name = newVal.name;
				this.address = newVal.address;
				this.latitude = newVal.latitude;
				this.longitude = newVal.longitude;
			},
			//地图区域改变
			onRegionchange(e) {
				clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					//h5 end  安卓 regionchange
					if (e.type === 'end' || e.type === 'regionchange') {
						//中间位置
						_mapCtx.getCenterLocation({
							success: res => {
								this.latitude = res.latitude
								this.longitude = res.longitude
								console.log("拖动地图", this.latitude, this.longitude)
								this.reverseGeocoder();
							},
							fail: err => {
								console.log(err);
							}
						})
					}
				}, 500)
			},
			geocoder() {
				console.log("开始搜索", this.addressSearch)
				this.$request('utils/getAddressGeo', {
						address: this.addressSearch
					}, {
						functionName: "cloud-utils"
					})
					.then(res => {
						console.log(res)
						this.latitude = res.location.lat;
						this.longitude = res.location.lng;
						this.reverseGeocoder();
					}).catch(err => {

					}).finally(err => {})
			},
			reverseGeocoder() {
				this.nearAddressList = []
				this.$request('utils/getLocationAddress', {
						fromLatlng: [this.latitude, this.longitude].join(",")
					}, {
						functionName: "cloud-utils"
					})
					.then(res => {
						console.log(res)
						this.nearAddressList = res.pois;
						//以最近的一个位置,防止地图抖动
						let nearest = res.pois[0];
						nearest.location = res.location;
						//this.scrollTop = 0;
						this.$nextTick(() => {
							this.scrollTop = 0
						});
						this.selectAddress(nearest, 0);
					}).catch(err => {

					}).finally(err => {})
			},
			selectAddress(item, index) {
				this.nearAddressIndex = index;
				this.address = item.address;
				this.$emit('input', {
					name: item.title,
					address: item.address,
					latitude: item.location.lat,
					longitude: item.location.lng,
					location: new db.Geo.Point(item.location.lng, item.location.lat)
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.map {
		width: 920rpx;
		height: 600rpx;
	}

	.map-center-icon {
		position: absolute;
		left: 384rpx;
		top: 264rpx;
		width: 72rpx;
		height: 72rpx;
	}

	.nearAddressList {
		margin-left: 40rpx;
		height: 600rpx;
		display: flex;

		.item {
			display: flex;
			flex-direction: column;
			font-size: 24rpx;
			margin-bottom: 10rpx;

			.title {
				font-size: 32rpx;
			}

			.desc {
				color: #aaaaaa;
			}

			&.current {
				color: #39b54a;

				.desc {
					color: #39b54a;
				}
			}
		}
	}

	.flex {
		display: flex;
	}
</style>
