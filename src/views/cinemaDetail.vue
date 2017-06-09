<template>
	<div class="cinemaDetail">
		<headTop :show-return="showReturn" :head-name="headName"></headTop>
		cinemaDetail
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import { mapState,mapActions } from 'vuex'
	export default {
		name : "cinemaDetail",
		data (){
			return {
				headName : this.$route.params.title ,
				cinemaId :this.$route.params.cinemaId ,
				showReturn :true 
			}
		},
		created() {
			this.load();
		},
		computed :{
			...mapState(["cinemaDetail"])
		},
		methods :{
			load(){
				this.$store.dispatch("cinama_detail", this.cinemaId);
			}
		},
		components :{
			headTop
		}
	}
</script>

<style>
	
</style>