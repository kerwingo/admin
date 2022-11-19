const createConfig = require('uni-config-center');
module.exports = (options) => {
	// 返回中间件函数
	return async function cache(ctx, next) {
		/**
		 * 读取缓存数据/设置缓存数据
		 */
		ctx.dbcache = async function(key, data, expires = 3600) {
			const db = uniCloud.database();
			const cacheCollection = db.collection("tian-identity");
			//默认增加前缀
			key = "cache_" + key;
			let time = Date.now();
			//读取
			const result = await cacheCollection.where({
				key: key
			}).field({
				data: 1,
				expires: 1
			}).limit(1).get();
			if (!data) {
				if (result.data.length > 0 && result.data[0].expires > time) {
					return JSON.parse(result.data[0].data);
				}
				//没有可用的数据,或者数据过期
				//删除过期数据
				if(result.data.length>0){
					await cacheCollection.doc(result.data[0]._id).remove();
				}
				return false;
			}
			//写入
			expires = !expires ? 3600000 + time : expires * 1000 + time;
			if (result.data.length > 0) {
				//修改
				return await cacheCollection.where({
					key: key
				}).update({
					data: JSON.stringify(data),
					expires
				});
			}
			//新增
			return await cacheCollection.add({
				key,
				data: JSON.stringify(data),
				expires
			});
		}

		await next() // 执行后续中间件
	}
}
