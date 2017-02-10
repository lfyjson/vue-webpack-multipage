<template>
	<div class="home">
		<h3>首页</h3>
		<my-content></my-content>
		<mint-ui-demo></mint-ui-demo>
		<vue-resource-demo></vue-resource-demo>
	</div>
</template>
<script>
	import myContent from "./my-content"
	import vueResourceDemo from "./vue-resource-demo"
	import mintUiDemo from "./mint-ui-demo"

	export default {
		beforeCreate() {
			console.log(location.hash); //获取hash值
			console.log(location.search); //获取search值
		},
		components: {
			myContent,
			vueResourceDemo,
			mintUiDemo
		}
	}
</script>
<style lang="scss" scoped>
	.home {
		padding:20px;
	}
</style>