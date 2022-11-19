// 校验规则由 schema 生成，请不要直接修改当前文件，如果需要请在uniCloud控制台修改schema
// uniCloud: https://unicloud.dcloud.net.cn/



export default {
	"user_id": {
		"rules": [{
				"required": true
			},
			{
				"format": "string"
			}
		],
		"defaultValue": {
			"$env": "uid"
		}
	},
	"category_id": {
		"rules": [{
			"format": "string"
		}]
	},
	"title": {
		"rules": [{
				"required": true
			},
			{
				"format": "string"
			}
		],
		"label": "标题"
	},
	"content": {
		"rules": [{
				"required": true
			},
			{
				"format": "string"
			}
		],
		"label": "文章内容"
	},
	"excerpt": {
		"rules": [{
			"format": "string"
		}],
		"label": "摘要"
	},
	"article_status": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			},
			{
				"minimum": 0,
				"maximum": 1
			}
		]
	},
	"view_count": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			}
		]
	},
	"like_count": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			}
		]
	},
	"is_sticky": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			}
		]
	},
	"is_essence": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			}
		]
	},
	"comment_status": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			},
			{
				"minimum": 0,
				"maximum": 1
			}
		]
	},
	"comment_count": {
		"rules": [{
				"required": true
			},
			{
				"format": "int"
			}
		]
	},
	"last_comment_user_id": {
		"rules": [{
			"format": "string"
		}]
	},
	"avatar": {
		"rules": [{
			"format": "string"
		}],
		"label": "封面大图"
	},
	"publish_date": {
		"rules": [{
			"format": "timestamp"
		}],
		"defaultValue": {
			"$env": "now"
		}
	},
	"publish_ip": {
		"rules": [{
			"format": "string"
		}]
	},
	"last_modify_date": {
		"rules": [{
			"format": "timestamp"
		}]
	},
	"last_modify_ip": {
		"rules": [{
			"format": "string"
		}]
	},
	"mode": {
		"rules": [{
				"required": true
			},
			{
				"format": "number"
			}
		]
	}
}
