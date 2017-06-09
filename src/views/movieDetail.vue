<template>
	<div class="movedetail">
		<headTop :show-return="showReturn" :head-name="headName"></headTop>
		movedetail
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import { mapState,mapActions } from 'vuex'
	export default {
		name : "movedetail",
		data (){
			return {
				headName : this.$route.params.title ,
				movieId :this.$route.params.movieId ,
				showReturn :true 
			}
		},
		created() {
			this.load();
		},
		computed :{
			...mapState(["movieDetail"])
		},
		methods :{
			load(){
				this.$store.dispatch("movies_detail", this.movieId);
			}
		},
		components :{
			headTop
		}
	}
</script>

<style>
	
</style>