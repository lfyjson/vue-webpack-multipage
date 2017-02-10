import "./common/common"

import Vue from 'vue'

import App from 'components/page2'

new Vue({
	el: '#app',
	template: '<App/>',
	render: h => h(App)
});
