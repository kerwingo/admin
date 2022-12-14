// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database()
const dbCollectionName = 'opendb-news-articles'
let httpInfo = null
module.exports = {
	_before: function() { // 通用预处理器
		httpInfo = this.getHttpInfo()
	},
	_after: function(error, result) {
		if (error) {
			if (error instanceof Error) {
				return {
					errCode: 'error',
					errMsg: error.message
				}
			}

			if (error.errCode) {
				return error
			}

			throw error
		}

		return result
	},
	/**
	 * list方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */

	async list(param) {
		// 参数校验，如无参数则不需要
		if (!param) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		let data, category_id
		if (httpInfo) {
			if (!httpInfo.body) {
				return {
					errCode: 'BODY_IS_NULL',
					errMsg: '参数不能为空'
				}
			} else {
				data = JSON.parse(httpInfo.body)
				category_id = data.category_id || ''
			}
		} else {
			category_id = param.category_id || ''
		}
		// 业务逻辑
		let res;
		if (category_id) {
			res = await db.collection(dbCollectionName).where({
				'category_id': category_id
			}).field({
				'article_status': true,
				'avatar': true,
				'category_id': true,
				'comment_count': true,
				'comment_status': true,
				'excerpt': true,
				'is_essence': true,
				'is_sticky': true,
				'last_modify_date': true,
				'like_count': true,
				'publish_date': true,
				'title': true,
				'view_count': true,
			}).get()
		} else {
			res = await db.collection(dbCollectionName).field({
				'article_status': true,
				'avatar': true,
				'category_id': true,
				'comment_count': true,
				'comment_status': true,
				'excerpt': true,
				'is_essence': true,
				'is_sticky': true,
				'last_modify_date': true,
				'like_count': true,
				'publish_date': true,
				'title': true,
				'view_count': true,
			}).get()
		}
		// 返回结果
		return {
			code: 200,
			data: res.data
		}
	},
	async add(param) {
		if (httpInfo && httpInfo.body) {
			param = httpInfo.body
		}
		if (httpInfo && !httpInfo.body) {
			return {
				errCode: 'BODY_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		const data = typeof param === 'object' ? param : JSON.parse(param)
		const res = await db.collection(dbCollectionName).add(data)
		return {
			code: 200,
			data: res
		}
	},
	async detail(id) {
		if(httpInfo) {
			id = httpInfo.queryStringParameters.id
		}
		const res = await db.collection(dbCollectionName).where({
			'_id': id
		}).field({
			'article_status': true,
			'avatar': true,
			'category_id': true,
			'comment_count': true,
			'comment_status': true,
			'excerpt': true,
			'content': true,
			'is_essence': true,
			'is_sticky': true,
			'last_modify_date': true,
			'like_count': true,
			'publish_date': true,
			'title': true,
			'view_count': true,
		}).get()
		return {
			code: 200,
			data: res
		}
	}
}
