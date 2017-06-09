import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'


Vue.use(Vuex);

const state = {
	movies : [],
	cinemas :{},
	movieDetail :{},
	cinemaDetail :{},
	comment :["1"]
}
Vue.config.debug = true;

export default new Vuex.Store({
	mutations ,
	actions ,
	getters ,
	state ,
	strict: true,
	strict: process.env.NODE_ENV !== 'production'
});