<template>
	<div class="movieTime">
		<headTop :head-name="headName" :show-return="showReturn"></headTop>
		<swipeTime></swipeTime>
		<cinema :cinema-object="cinemas"></cinema>
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import cinema from '../components/cinema.vue'
	import swipeTime from '../components/swipe-time.vue'
	import { mapActions ,mapState} from 'vuex'
	export default {
		name : "movieTime",
		data (){
			return {
				headName : this.$route.query.title ,
				showReturn :true 
			}
		},
		mounted (){
			this.load();
		},
		computed :{
			...mapState(["cinemas"])
		},
		methods :{
			// ...mapActions(["get_cinemas"]),
			load(){

				this.$store.dispatch("get_cinemas",{});

			}
		},
		components :{
			headTop,
			swipeTime,
			cinema
		}
	}
</script>

<style>
	
</style>