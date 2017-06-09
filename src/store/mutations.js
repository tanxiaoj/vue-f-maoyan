import * as type from './mutation-types.js'


export default {
  	[type.GET_MOVIES](state ,data) {
		state.movies = data.data.movies ;
	},
	[type.MORE_COMMENTS](state ,data) {

	},
	[type.GET_CINEMAS](state ,data) {
		state.cinemas = data.data ;
	},
	[type.MOVIE_DETAIL](state ,data){
		state.movieDetail = data.data ;
	},
	[type.CINEMA_DETAIL](state ,data){
		state.cinemaDetail = data.data ;
	}
};