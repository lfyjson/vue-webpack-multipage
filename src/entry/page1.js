import "./common/common"

import Vue from 'vue'

import App from 'components/page1'

new Vue({
	el: '#app',
	template: '<App/>',
	render: h => h(App)
});
