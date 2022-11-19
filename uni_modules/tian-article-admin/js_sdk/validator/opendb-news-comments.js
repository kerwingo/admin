// 校验规则由 schema 生成，请不要直接修改当前文件，如果需要请在uniCloud控制台修改schema
// uniCloud: https://unicloud.dcloud.net.cn/



export default {
  "article_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  },
  "comment_content": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "评论内容"
  },
  "like_count": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ]
  },
  "comment_type": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "int"
      }
    ]
  },
  "reply_user_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  },
  "reply_comment_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ]
  }
}
