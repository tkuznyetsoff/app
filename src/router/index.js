import Vue from 'vue';
import Router from 'vue-router';
import { home, categories, settings } from '@/modules/modules';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '*',
		redirect: '/home'
	}, {
		path: '/home',
		component: home
	}, {
		path: '/categories',
		component: categories
	}, {
		path: '/settings',
		component: settings
	}]
});
