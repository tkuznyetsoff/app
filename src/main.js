// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './router';
import store from './store';
import App from './app';

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
	el: '#app',
	router,
	store,
	created() {
		store.dispatch('initDatabase');
	},
	template: '<App/>',
	components: { App }
});
