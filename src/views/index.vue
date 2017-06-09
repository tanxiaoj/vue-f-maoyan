<template>
	<div class="home">
		<headTop></headTop>
		<navBar @select="selectTab" :select-type="selectType"></navBar>
		<movies :movies-list="movies" v-if="selectType==0"></movies>
		<cinema v-if="selectType==1" :cinema-object="cinemas"></cinema>
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import navBar from '../components/navBar.vue'
	import movies from '../components/movies.vue'
	import cinema from '../components/cinema.vue'

	import { mapActions ,mapState} from 'vuex'
	
	export default {
		name : "home",
		data (){
			return {
				selectType : 0
			}
		},
		mounted (){
			this.load();
		},
		computed :{
			...mapState(["movies","cinemas"])
			// ...mapState({
			// 	movies :state => state.movies,
			// 	cinemas :state => state.cinemas
			// })
		},
		methods :{
			// ...mapActions(["get_movies"]),
			load(){
				// this.$nextTick(function(){
					// if(this.selectType == 0){
						this.$store.dispatch("get_movies",{});
					// }else{
						this.$store.dispatch("get_cinemas",{});
					// }
				// });	
			},
			selectTab(type){
				this.selectType = type ;
			}
		},
		components :{
			headTop,
			navBar,
			movies,
			cinema
		}
	}
</script>

<style lang="less" scoped>

</style>