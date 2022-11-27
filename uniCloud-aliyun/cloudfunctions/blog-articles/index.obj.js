// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database()
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
		if(!httpInfo.body) {
			return {
				errCode: 'BODY_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		const data = JSON.parse(httpInfo.body)
		const category_id = data.category_id || ''
		// 业务逻辑
		let res;
		if (category_id) {
			res = await db.collection('opendb-news-articles').where({
				'category_id': category_id
			}).get()
		} else {
			res = await db.collection('opendb-news-articles').get()
		}
		// 返回结果
		return {
			code: 200,
			data: res.data
		}
	}

}
