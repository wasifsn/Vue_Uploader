import Vue from 'vue';
import Vuerouter from 'vue-router';
import authHandler from './components/authHandler';
import imageList from './components/imageList';
import uploadForm from './components/uploadForm';

Vue.use(Vuerouter);
const router = new Vuerouter({
	mode: 'history',
	routes: [
		{
			path: '/oauth2/callback',
			component: authHandler
		},
		{
			path: '/',
			component: imageList
		},
		{
			path: '/upload',
			component: uploadForm
		}
	]
});

export default router;
