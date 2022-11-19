<template>
	<view>
		<cloud-select v-model="uid" @change="change" :defaultResult="nickname" collection="uni-id-users" :where="condition?condition:''"
			field="_id as value, nickname as text" :pageSize="50"></cloud-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uid: "",
				nickname: ""
			};
		},
		watch: {
			uid(newVal) {
				if (this.value != newVal) {
					console.log("watch uid", newVal)
					this.$emit('input', newVal)
				}
			},
			value(newVal) {
				console.log("watch value", newVal)
				this.uid = this.value;
				this.loadData();
			},
		},
		props: {
			value: {
				type: [Array, String, Number],
				default () {
					return ''
				}
			},
			condition:{
				type:String,
				default:""
			}
		},
		created() {
			this.uid = this.value;
			console.log("created", this.uid)
		},
		methods: {
			change(e) {
				console.log("change user", e)
				if (e && e.data) {
					this.nickname = e.data.text;
				}
			},
			loadData() {
				if (this.uid && !this.nickname) {
					uniCloud.database().collection("uni-id-users").field("nickname").where({
						_id: this.uid
					}).get({
						getOne: true
					}).then(res => {
						if (res.result && res.result.data) {
							this.nickname = res.result.data.nickname;
						}
						console.log("load user nickname", res)
					})
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
