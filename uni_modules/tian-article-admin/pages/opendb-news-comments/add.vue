
<template>
  <view class="uni-container">
    <uni-forms ref="form" v-model="formData" :rules="rules" validateTrigger="bind">
      <uni-forms-item name="article_id" label="">
  <uni-easyinput placeholder="文章ID，opendb-news-posts 表中的`_id`字段" v-model="formData.article_id" />
</uni-forms-item>
<uni-forms-item name="comment_content" label="评论内容">
  <uni-easyinput placeholder="评论内容" v-model="formData.comment_content" />
</uni-forms-item>
<uni-forms-item name="like_count" label="">
  <uni-easyinput placeholder="评论喜欢数、点赞数" type="number" v-model="formData.like_count" />
</uni-forms-item>
<uni-forms-item name="comment_type" label="">
  <uni-easyinput placeholder="回复类型： 0 针对文章的回复  1 针对评论的回复" type="number" v-model="formData.comment_type" />
</uni-forms-item>
<uni-forms-item name="reply_user_id" label="">
  <uni-easyinput placeholder="被回复的评论用户ID，comment_type为1时有效" v-model="formData.reply_user_id" />
</uni-forms-item>
<uni-forms-item name="reply_comment_id" label="">
  <uni-easyinput placeholder="被回复的评论ID，comment_type为1时有效" v-model="formData.reply_comment_id" />
</uni-forms-item>

      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
            <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import validator from '../../js_sdk/validator/opendb-news-comments.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'opendb-news-comments';

  function getValidator(fields) {
    let reuslt = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        reuslt[key] = validator[key]
      }
    }
    return reuslt
  }

  export default {
    data() {
      return {
        formOptions: {},
        formData: {
  "article_id": "",
  "comment_content": "",
  "like_count": null,
  "comment_type": null,
  "reply_user_id": "",
  "reply_comment_id": ""
},
        rules: {
          ...getValidator(["article_id","comment_content","like_count","comment_type","reply_user_id","reply_comment_id"])
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 触发表单提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.submit().then((res) => {
          this.submitForm(res)
        }).catch((errors) => {
          uni.hideLoading()
        })
      },

      submitForm(value) {
        // 使用 unicloud-db 提交数据
        db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>

