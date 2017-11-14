import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import { config } from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {},

	state: {
		db: {}
	},

	getters: {},

	mutations: {
		setDataBase: (state, { payload }) => {
			state.db = payload;
		}
	},

	actions: {
		initDatabase: ({ commit }) => {
			const db = firebase.initializeApp(config);
			db.database().ref('/books').once('value').then((snapshot) => {
				commit('setDataBase', { payload: snapshot.val() });
			});
		}
	}
});
