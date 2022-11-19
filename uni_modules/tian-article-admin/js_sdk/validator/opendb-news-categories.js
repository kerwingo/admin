// 校验规则由 schema 生成，请不要直接修改当前文件，如果需要请在uniCloud控制台修改schema
// uniCloud: https://unicloud.dcloud.net.cn/



export default {
  "name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "名称"
  },
  "description": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "描述"
  },
  "icon": {
    "rules": [
      {
        "format": "string"
      },
      {
        "pattern": "^(http://|https://|/|./|@/)\\S"
      }
    ],
    "label": "图标地址"
  },
  "sort": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "排序"
  },
  "article_count": {
    "rules": [
      {
        "format": "int"
      }
    ]
  },
  "create_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    }
  }
}
