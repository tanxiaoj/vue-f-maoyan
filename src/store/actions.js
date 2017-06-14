import api from '../api/api.js'
import * as type from './mutation-types.js'
import util from '../util/util.js'

export default {
	get_movies ({commit} ,payload){
		util.ajax(api.list,{
			params:{
				"type":'hot',
				"offset":0 ,
				"limit":10
			}
		})
		.then(function (response) {
			var data = response.data ;
            commit("GET_MOVIES",data)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	get_cinemas ({commit},payload){
		util.ajax(api.cinemas,{
			params:{
			}
		})
		.then(function (response) {
			var data = response.data ;
            commit("GET_CINEMAS",data)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	movie_detail ({commit},movieId=247731){
		// util.ajax(`${api.moveDetail}/${movieId}.json`)
		util.ajax('/')
		.then(function (response) {
			var data = response.data ;
            commit("MOVIE_DETAIL",data)
		})
		.catch(function (response) {
		    console.log(response);
		});			
	},
	cinama_detail ({commit},cinemaid=11533,movieId=""){
		util.ajax(api.cinemaDetail,{
			params:{
				cinemaid :cinemaid ,
				movieid :movieId
			}
		})
		.then(function (response) {
			
			var data = response.data ;
            commit("CINEMA_DETAIL",data)
		})
		.catch(function (response) {
		    console.log(response);
		});			
	},
	more_comments ({commit} ,payload){
		util.ajax(api.comments,{
			params:{
				"movieid": 246363,
				"limit": 5,
				"offset": 5
			}
		})
		.then(function (response) {
			var data = response.data ;
            commit("MORE_COMMENTS",data)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	}
}