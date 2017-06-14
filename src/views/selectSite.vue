<template>
	<div class="selectSite">
		<headTop :show-return="showReturn" :head-name="headName" :url="returnUrl"></headTop>
		<div class="cinema-mes clearfix">
			<div class="movie-title">
				<span>新木乃伊</span>
				<em>今天6月13日 20:40</em>
			</div>
			<div class="btn" :class="{active :count!=0}">提交订单</div>
		</div>

		<site @order="orderCount"></site>
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import site from '../components/site.vue'

	import { mapActions ,mapState} from 'vuex'
	
	export default {
		name : "selectSite",
		data (){
			return {
				headName : this.$route.query.title ,
				showReturn :true ,
				returnUrl : '/cinemaDetail' ,
				count : 0
			}
		},
		methods :{
			orderCount(count){
				this.count = count ;
			}
		},
		components :{
			headTop,
			site
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/less/base.less';

	.cinema-mes{
		padding: 8px 11px;
	    background: #f8f8f8;
	    border-bottom: 1px solid #dedede;
	    .movie-title{
	    	float: left;
	    	span{
	    		display: block;
	    		font-size: 16px;
	    		font-weight: 700;
	    		color: #333;
	    		margin-bottom: 4px;
	    	}
	    	em{
	    		font-size: 12px;
	    		color: #555;
	    	}
	    }
	    .btn{
	    	float: right;
	    	line-height: 37px;
	    	font-size: 14px;
	    	text-align: center;
	    	border-radius: 4px;
	    	color: #FFF;
	    	padding: 0 23px;
		    background-color: #999;
		    &.active{
		    	background-color: #e54847;
		    }
	    }
	}

</style>