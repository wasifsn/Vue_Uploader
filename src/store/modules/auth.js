import api from '../../api/imgur';
import qs from 'qs';
import router from '../../router';

const state = {
	token: window.localStorage.getItem('imgur_token')
};
const getters = {
	isLoggedIn: (state) => !!state.token
};
const actions = {
	login: () => {
		api.login();
	},

	finalizeLogin: ({ commit }, hash) => {
		const url = qs.parse(hash.replace('#', ''));
		commit('setToken', url.access_token);
		window.localStorage.setItem('imgur_token', url.access_token);
		router.push({ path: '/' });
	},
	logout: ({ commit }) => {
		commit('setToken', null);
		window.localStorage.removeItem('imgur_token');
	}
};

const mutations = {
	setToken: (state, token) => {
		state.token = token;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
