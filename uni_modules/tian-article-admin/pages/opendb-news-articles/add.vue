<template>
	<view class="uni-container">
		<uni-forms ref="form" v-model="formData" :rules="rules" validateTrigger="bind">
			<uni-forms-item name="title" label="标题">
				<uni-easyinput placeholder="标题" v-model="formData.title" />
			</uni-forms-item>
			<uni-forms-item name="avatar" label="封面大图">
				<cloud-image placeholder="缩略图地址" v-model="formData.avatar"></cloud-image>
			</uni-forms-item>
			<uni-forms-item name="category_id" label="分类">
				<uni-data-checkbox v-model="formData.category_id" collection="opendb-news-categories"
					field="name as text, _id as value" />
			</uni-forms-item>
			<uni-forms-item name="excerpt" label="摘要">
				<uni-easyinput placeholder="文章摘录" v-model="formData.excerpt" />
			</uni-forms-item>
			<uni-forms-item name="content" label="文章内容">
				<!-- <uni-easyinput placeholder="文章内容" v-model="formData.content" /> -->
				<Tinymce ref="editor" v-model="formData.content" :width="860" :height="400" />
			</uni-forms-item>
			<uni-forms-item name="user_id" label="上传用户">
				<cloud-user-select v-model="formData.user_id" condition="nickname!=null"></cloud-user-select>
			</uni-forms-item>
			<uni-forms-item name="source_from" label="来源">
				<uni-easyinput placeholder="请输入完整来源信息" v-model="formData.source_from" />
			</uni-forms-item>
			<uni-forms-item name="view_count" label="阅读数量">
				<uni-easyinput placeholder="阅读数量" type="number" v-model="formData.view_count" />
			</uni-forms-item>
			<uni-forms-item name="like_count" label="点赞数">
				<uni-easyinput placeholder="喜欢数、点赞数" type="number" v-model="formData.like_count" />
			</uni-forms-item>
			<uni-forms-item name="comment_count" label="评论数">
				<uni-easyinput placeholder="评论数" type="number" v-model="formData.comment_count" />
			</uni-forms-item>
			<uni-forms-item name="article_status" label="发布">
				<uni-data-checkbox :localdata="formOptions.status" v-model="formData.article_status">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="is_sticky" label="是否置顶">
				<uni-data-checkbox :localdata="formOptions.checks" v-model="formData.is_sticky">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="is_essence" label="是否加精">
				<uni-data-checkbox :localdata="formOptions.checks" v-model="formData.is_essence">
				</uni-data-checkbox>
			</uni-forms-item>
			<uni-forms-item name="comment_status" label="开放评论">
				<uni-data-checkbox :localdata="formOptions.status" v-model="formData.comment_status">
				</uni-data-checkbox>
			</uni-forms-item>
			<view class="uni-button-group">
				<button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
				<navigator open-type="navigateBack" style="margin-left: 15px;">
					<button class="uni-button" style="width: 100px;">返回</button>
				</navigator>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	import validator from '../../js_sdk/validator/opendb-news-articles.js';

	const db = uniCloud.database();
	const dbCmd = db.command;
	const dbCollectionName = 'opendb-news-articles';

	function getValidator(fields) {
		let reuslt = {}
		for (let key in validator) {
			if (fields.includes(key)) {
				reuslt[key] = validator[key]
			}
		}
		return reuslt
	}

	import Tinymce from '../../components/Tinymce'
	export default {
		components: {
			Tinymce,
		},
		data() {
			return {
				formOptions: {
					status: [{
							value: 1,
							text: "是"
						},
						{
							value: 0,
							text: "否"
						}
					],
					checks: [{
							value: 1,
							text: "是"
						},
						{
							value: 0,
							text: "否"
						}
					]
				},
				formData: {
					"user_id": "",
					"category_id": "",
					"title": "",
					"content": "",
					"excerpt": "",
					"source_from": "",
					"article_status": 1,
					"view_count": 0,
					"like_count": 0,
					"is_sticky": 0,
					"is_essence": 0,
					"comment_status": 0,
					"comment_count": 0,
					"last_comment_user_id": "",
					"avatar": "",
					"publish_date": null,
					"publish_ip": "",
					"last_modify_date": null,
					"last_modify_ip": "",
					"mode": 1
				},
				rules: {
					...getValidator(["user_id", "title", "content", "excerpt", "article_status", "comment_status",
						"last_comment_user_id", "avatar", "publish_date", "last_modify_date", "last_modify_ip", "mode",
						"view_count",
						"like_count", "is_sticky", "is_essence", "comment_count", "publish_ip", "category_id"
					])
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			/**
			 * 触发表单提交
			 */
			submit() {
				uni.showLoading({
					mask: true
				})
				this.$refs.form.submit().then((res) => {
					this.submitForm(res)
				}).catch((errors) => {
					uni.hideLoading()
				})
			},

			submitForm(value) {
				// 使用 unicloud-db 提交数据
				db.collection(dbCollectionName).add(value).then((res) => {
					uni.showToast({
						title: '新增成功'
					})
					this.getOpenerEventChannel().emit('refreshData')
					setTimeout(() => uni.navigateBack(), 500)
				}).catch((err) => {
					uni.showModal({
						content: err.message || '请求服务失败',
						showCancel: false
					})
				}).finally(() => {
					uni.hideLoading()
				})
			}
		}
	}
</script>
<style lang="scss">
	.uni-app--showleftwindow .uni-container .uni-forms {
		width: 100%;
		max-width: 100%;
	}

	.uni-easyinput {
		max-width: 920rpx;
	}
</style>
