<template>
	<div :class="{fullscreen:fullscreen, loaded: loaded}" class="tinymce-container" :style="{width:containerWidth}">
		<textarea :id="tinymceId" class="tinymce-textarea" />
	</div>
</template>

<script>
	import plugins from './plugins'
	import toolbar from './toolbar'
	import load from './dynamicLoadScript'

	// const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'
	//更换为靠谱一点的字节跳动cdn
	// const tinymceCDN = 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/tinymce/4.9.6/tinymce.min.js'
	//柔然科技静态资源
	const tinymceCDN = 'https://cqsort.com/js/tinymce/tinymce.min.js'

	export default {
		name: 'Tinymce',
		props: {
			id: {
				type: String,
				default () {
					return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
				}
			},
			value: {
				type: String,
				default: ''
			},
			toolbar: {
				type: Array,
				required: false,
				default () {
					return []
				}
			},
			menubar: {
				type: String,
				default: 'file edit insert view format table'
			},
			height: {
				type: [Number, String],
				required: false,
				default: 360
			},
			width: {
				type: [Number, String],
				required: false,
				default: 'auto'
			}
		},
		data() {
			return {
				loaded: false,
				hasChange: false,
				hasInit: false,
				tinymceId: this.id,
				fullscreen: false,
				languageTypeList: {
					'en': 'en',
					'zh': 'zh_CN',
					'es': 'es_MX',
					'ja': 'ja'
				}
			}
		},
		computed: {
			containerWidth() {
				const width = this.width
				if (/^[\d]+(\.[\d]+)?$/.test(width)) { // matches `100`, `'100'`
					return `${width}px`
				}
				return width
			}
		},
		watch: {
			value(val) {
				if (!this.hasChange && this.hasInit) {
					this.$nextTick(() =>
						window.tinymce.get(this.tinymceId).setContent(val || ''))
				}
			}
		},
		mounted() {
			this.init()
		},
		activated() {
			if (window.tinymce) {
				this.initTinymce()
			}
		},
		deactivated() {
			this.destroyTinymce()
		},
		destroyed() {
			this.destroyTinymce()
		},
		methods: {
			init() {
				// dynamic load tinymce from cdn
				load(tinymceCDN, (err) => {
					if (err) {
						this.$message.error(err.message)
						return
					}
					this.initTinymce()
				})
			},
			initTinymce() {
				const _this = this
				window.tinymce.init({
					selector: `#${this.tinymceId}`,
					images_upload_handler: async (blobInfo, succFun, failFun, progress) => {
						return this.upload2cloud(blobInfo, succFun, failFun, progress)
					},
					language: this.languageTypeList['zh'],
					height: this.height,
					body_class: 'panel-body ',
					object_resizing: false,
					toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
					menubar: this.menubar,
					plugins: plugins,
					end_container_on_empty_block: true,
					powerpaste_word_import: 'clean',
					code_dialog_height: 450,
					code_dialog_width: 1000,
					advlist_bullet_styles: 'square',
					advlist_number_styles: 'default',
					imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
					default_link_target: '_blank',
					link_title: false,
					nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
					init_instance_callback: editor => {
						//if (_this.value) {
						editor.setContent(_this.value || '')
						setTimeout(() => {
							this.loaded = true;
						}, 100)
						//}
						_this.hasInit = true
						editor.on('NodeChange Change KeyUp SetContent', () => {
							this.hasChange = true
							this.$emit('input', editor.getContent())
						})
						editor.on("paste", evt => {
							// 监听粘贴事件
							// console.log("监听粘贴事件", evt);
							this.onPaste(evt);
						})
					},
					setup(editor) {
						editor.on('FullscreenStateChanged', (e) => {
							_this.fullscreen = e.state
						})
					}
				})
			},
			async onPaste(event, success, failure) {
				//可以获取word的内容
				const html = (event.clipboardData || window.clipboardData).getData("text/html");
				if (html) {
					//1提取word中的html的img标签
					let imgReg = /<img.*?(?:>|\/>)/gi;
					let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; //  /xxx=/src
					let imgs = str.match(imgReg)
					if (imgs && imgs.length > 0) {
						for (let i = 0; i < imgs.length; i++) {
							let src = imgs[i].match(srcReg);
							if (src && src[1]) {
								//图片地址是提取出来了，但是无法读取文件
								console.log("src", src)
								// tinymce.execCommand(
								// 	"mceReplaceContent",
								// 	false,
								// 	`<img class="wscnph" src="${src[1]}" >`
								// );
								// let file = new File(src[1],"a.jpg")
								// console.log(file)
								// uni.getFileInfo({
								// 	filePath: src[1],
								// 	success: (info) => {
								// 		console.log(info)

								// 	}

								// })
								// await uniCloud.uploadFile({
								// 	filePath: src[1],
								// 	cloudPath: "test.jpg",
								// });
								//file:///C:UsersADMINI~1AppDataLocalTempksohtml1344wps38.png
								// console.log("src", src)
								// let reader = new FileReader()
								// reader.readAsDataURL(src[1])
								// reader.onload=(e)=>{
								// 	console.log(e)
								// }
								// console.log(URL.createObjectURL(src[1]))
							}
						}
					}
				}
				// items为伪数组微信/QQ截图以及此富文本区域内复制粘贴的length为1,右键复制粘贴图片以及文本的复制粘贴的length为2;
				// 实现图片粘贴上传
				const items = (event.clipboardData || window.clipboardData).items;
				let len = items.length;
				for (let i = 0; i < len; i++) {
					if (items[i].kind == "file" && items[i].type.indexOf("image") != -1) {
						// 判断是否为图片类型
						event.preventDefault(); // 如果是图片阻止自动粘贴到富文本编辑器
						let file = items[i].getAsFile(); // 获取文件数据
						let blobInfo = {
							blob: () => {
								return file;
							},
							blobUri: () => {
								return URL.createObjectURL(file)
							},
							name: file.name ? file.name.replace(/\.[^\.]+$/, "") : null,
						}
						this.upload2cloud(blobInfo, (filePath) => {
							tinymce.execCommand(
								"mceReplaceContent",
								false,
								`<img class="wscnph" src="${filePath}" >`
							);
						}, (title) => {
							uni.showToast({
								icon: "none",
								title
							})
						}, (n) => {
							if (n < 100) {
								uni.showLoading({
									title: "正在上传"
								})
							} else {
								uni.hideLoading()
							}
							// console.log("正在上传", n)
						})
					} else {
						// 不是图片类型直接粘贴, 跳过oss上传处理
						// console.log("粘贴的不是图片");
					}
				}
			},
			/**
			 * 上传文件到unicloud文件存储
			 * @param {Object} blobInfo
			 * @param {Object} succFun
			 * @param {Object} failFun
			 * @param {Object} progress
			 */
			async upload2cloud(blobInfo, succFun, failFun, progress) {
				progress(0);
				let fileName = +new Date() + ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
				fileName += blobInfo.blob().type === 'image/jpeg' ? '.jpg' : '.png';
				const result = await uniCloud.uploadFile({
					filePath: blobInfo.blobUri(),
					cloudPath: fileName,
					onUploadProgress: progressEvent => {
						progress(Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						));
					}
				});
				console.log(result)
				if (result.fileID.startsWith("http")) {
					succFun(result.fileID);
					return;
				}
				const tempFiles = await uniCloud.getTempFileURL({
					fileList: [result.fileID]
				})
				const tempFile = tempFiles.fileList[0];
				if (tempFile.code === 'SUCCESS') {
					succFun(tempFile.download_url);
				} else {
					failFun('上传失败');
				}
			},
			destroyTinymce() {
				const tinymce = window.tinymce.get(this.tinymceId)
				if (this.fullscreen) {
					tinymce.execCommand('mceFullScreen')
				}

				if (tinymce) {
					tinymce.destroy()
				}
			},
			setContent(value) {
				window.tinymce.get(this.tinymceId).setContent(value)
			},
			getContent() {
				window.tinymce.get(this.tinymceId).getContent()
			},
			imageSuccessCBK(arr) {
				const _this = this
				arr.forEach(v => {
					window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/ {
		.tinymce-container {
			position: relative;
			line-height: normal;
		}

		.tinymce-container>>>.mce-fullscreen {
			z-index: 10000;
		}

		.tinymce-textarea {
			visibility: hidden;
			z-index: -1;
		}

		.editor-custom-btn-container {
			position: absolute;
			right: 4px;
			top: 4px;
			/*z-index: 2005;*/
		}

		.fullscreen .editor-custom-btn-container {
			z-index: 10000;
			position: fixed;
		}

		.editor-upload-btn {
			display: inline-block;
		}

		.mce-tinymce {
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0) !important;
			border-color: #DCDFE6 !important;
		}

		.mce-top-part::before {
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0) !important;
		}

		.mce-edit-area {
			border-color: #DCDFE6 !important;

			iframe {
				opacity: 0;
			}
		}

		.mce-statusbar {
			border-color: #DCDFE6 !important;
		}

		#mceu_27 {
			border-radius: 5px;
			overflow: hidden;
		}

		/* 菜单图标字体颜色 */
		.mce-ico {
			color: #7e8086 !important;
		}

		/* 选中项图标为白色 */
		.mce-btn.mce-active i {
			color: #fff !important;
		}

		/* 背景颜色图标 */
		i.mce-i-backcolor {
			color: #fff !important;
			background-color: #ff944c !important;
		}

		/* 字体颜色图标 */
		i.mce-i-forecolor {
			color: #ff944c !important;
			transform: scale(1.1);
		}
	}

	.loaded /deep/ iframe {
		opacity: 1;
	}
</style>
