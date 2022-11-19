'use strict';
const {
	Router
} = require('uni-cloud-router')
const router = new Router(require('./config.js'))
exports.main = async (event, context) => {
	//请求内容为json
	if (event.path && event.headers && event.headers["content-type"] && event.headers["content-type"] ==
		"application/json") {
		//转换为对象
		event.queryStringParameters = JSON.parse(event.body);
	}
	console.log("context.CLIENTUA", context.CLIENTUA)
	return router.serve(event, context)
};
