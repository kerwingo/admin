const createConfig = require('uni-config-center');
const fs = require("fs");
module.exports = (options) => {
	// 返回中间件函数
	return async function config(ctx, next) {
		/**
		 * 从对象取值
		 * @param {Object} key1
		 * @param {Object} data
		 */
		ctx.objectFormat = function(key1, data) {
			if (!key1) {
				return "";
			}
			if (data[key1] !== undefined) {
				//存在变量对于的value
				return data[key1];
			}
			let keyArr = key1.split(".");
			if (keyArr.length > 1) {
				let tmp = data[keyArr[0]];
				keyArr.shift();
				for (let key2 of keyArr) {
					tmp = tmp[key2];
					if (tmp === undefined) {
						return key1;
					}
				}
				// console.log("tmp", tmp)
				if (tmp !== undefined) {
					return tmp;
				}
			}
			return key1;
		}
		/**
		 * 字符串格式化
		 * @param {Object} format
		 * @param {Object} data
		 */
		ctx.stringFormat = function(format, data) {
			if (!format) {
				return "";
			}
			//匹配大括号+英文字符
			return format.replace(/\{([a-zA-Z0-9$_\.]+)\}/g, key => {
				//去掉大括号，得到变量
				let key1 = key.replace(/[\{\}]/g, "");
				// console.log("key1", key1)
				return ct.objectFormat(key1, data);
			});
		}
		// console.log("init config")
		//获取插件配置
		ctx.getConfigs = createConfig({
			pluginId: 'tiantian-mall', // 插件id, 注意pluginId需和uni-config-center下的目录名一致
			defaultConfig: {}, // 默认配置，非必填
			customMerge: (defaultConfig, userConfig) => {
				// 自定义默认配置和用户配置的合并规则，非必填，不设置的情况侠会对默认配置和用户配置进行深度合并
				// defaudltConfig 默认配置
				// userConfig 用户配置
				return Object.assign(defaultConfig, userConfig)
			}
		});
		/**
		 * 获取当前平台独有配置
		 */
		ctx.getConfigs.platformConfigs = function(key, platform) {
			if (!platform) {
				platform = ctx.context.PLATFORM;
			}
			return this.config(platform + "." + key)
		}
		/**
		 * 获取支付配置
		 */
		ctx.getConfigs.paymentConfigs = function(key, platform) {
			if (!platform) {
				platform = ctx.context.PLATFORM;
			}
			//只需要文件完整地址
			let paths = ["alipayRootCertPath", "appCertPath", "alipayPublicCertPath"];
			//需要读取文件内容
			let fileContent = ["pfx"];
			let configs = {
				...this.config(platform + ".payment." + key)
			};
			for (let key in configs) {
				if (paths.indexOf(key) != -1 && configs[key]) {
					// 获取文件绝对路径
					configs[key] = this.resolve(configs[key]) // 获取文件的路径
				} else if (fileContent.indexOf(key) != -1 && configs[key]) {
					// 获取文件内容
					let fullPath = this.resolve(configs[key]) // 获取文件的内容
					try {
						console.log("p12文件读取", fullPath);
						configs[key] = fs.readFileSync(fullPath);
					} catch (e) {
						delete configs[key];
						console.log("p12文件读取失败", fullPath);
						console.log("error", e.message)
					}
				}
			}
			return configs;
		}
		/**
		 * 格式化字符串
		 * @param {String} key a.b.c
		 * @param {Object} data 
		 * @param {Boolean} platform 是否平台差异
		 */
		ctx.getConfigs.templateConfigs = function(key, data, platform) {
			let format = "";
			//是否存在平台差异
			if (platform) {
				format = this.platformConfigs(key);
			}
			if (!format) {
				format = this.config(key);
			}
			if (!format) {
				return "";
			}
			//匹配大括号+英文字符，例如{a.b.c}
			return ctx.stringFormat(format, data);
		}

		if (ctx.event.queryStringParameters && ctx.event.queryStringParameters.apiToken) {
			let token = ctx.getConfigs.config("apiToken");
			ctx.apiLogin = ctx.event.queryStringParameters.apiToken == token;
			ctx.data = ctx.event.queryStringParameters;
		}

		await next() // 执行后续中间件
	}
}
