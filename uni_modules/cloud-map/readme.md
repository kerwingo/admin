### schema字段定义
为了通用性，字段需要如下object结构，自己在使用的时候，可用只显示需要的字段，示例文件：uniCloud/example/welfare-mechanisms.schema.json
	
```
"address": {
		"bsonType": "object",
		"title": "地址",
		"componentForEdit": {
			"name": "cloud-map",
			"props": {
				"v-model": "formData.address"
			}
		}
	},
```

### 配置key
拖动地图或者搜索地址，需要逆向解析经纬度，云函数cloud-utils用于解决h5跨域问题，示例文件：uniCloud/example/config.json
1. 新建配置文件 uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/tiantian-mall/config.json
2. 文件跟节点增加配置  
```
"qqmap": {
		"key": "ZWYBZ-HOSWD-S2X4S-HHPBQ-YKY7Z-5NFK5",
		"mode": "bicycling"
	}
```


### 页面使用
```
<uni-forms-item name="address" label="地址">
	<cloud-map v-model="formData.address"  />
</uni-forms-item>
```