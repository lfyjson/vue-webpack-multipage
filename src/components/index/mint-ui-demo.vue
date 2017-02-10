<template>
	<div>
		<mt-button type="primary" @click="confirm">mint-ui弹窗演示</mt-button>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { Button, MessageBox } from 'mint-ui'

	Vue.component(Button.name, Button);

	export default {
		methods: {
			confirm() {
				//更多mint-ui组件使用参考文档http://mint-ui.github.io/docs/#!/zh-cn2
				MessageBox.confirm('确定执行此操作?').then(action => {
					console.log('确定的回调');
				}).catch(action => {
					console.log('取消的回调');
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	div {
		margin:20px 0;
	}
</style>
