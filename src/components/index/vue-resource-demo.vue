<template>
	<div>
		<dl>
			<dt>vue-resource用法演示</dt>
			<dd v-for="item in items" :key="item.id">
				{{ item.title }}
			</dd>
		</dl>
	</div>
</template>
<script>
	import myContent from "./my-content"

	export default {
		data: () => {
			return {
				items: [
					{
						id: 0,
						title: '默认数据1'
					},
					{
						id: 1,
						title: '默认数据2'
					}
				]
			}
		},
		beforeMount() {
			this.request();
		},
		methods: {
			request() {
				//更多API参考http://www.doc00.com/doc/1001004eg
				this.$http.jsonp('http://fancontest.yinyuetai.com/fan-videos', {
					params: {
						pageSize: 5,
						page: 2,
						tag: 0
					}
				}).then((res) => {
					this.items = res.data.videos.map((item) => ({id:item.id, title: item.title}))
				});
			}
		},
		components: {
			myContent
		}
	}
</script>
<style lang="scss" scoped>
	dt {
		font-size:40px;
	}
	dd {
		font-size:30px;
		margin:10px 0;
	}
</style>
