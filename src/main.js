import Vue from 'vue';
import App from './App';
import store from './store/index';
import router from './router';

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
