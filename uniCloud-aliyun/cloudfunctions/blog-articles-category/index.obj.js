// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database()
const dbCollectionName = 'opendb-news-categories'
let httpInfo = null
module.exports = {
	_before: function() { // 通用预处理器
		httpInfo = this.getHttpInfo()
	},
	/**
	 * method1方法描述
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
		// 业务逻辑
		const res = await db.collection(dbCollectionName).get()
		// 返回结果
		return {
			code: 200,
			data: res.data
		}
	},
}
