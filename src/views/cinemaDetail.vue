<template>
	<div class="cinemaDetail">
		<headTop :show-return="showReturn" :head-name="headName"></headTop>
		<div class="headTitle">
			<div class="stci-info">
				<div class="cinema-name">
					工人俱乐部电影院
				</div>
				<p>西城区虎坊路口南7号</p>
			</div>
			<a href="" class="stci-tel">
				<i></i>
			</a>
		</div>
		<swipeImages></swipeImages>
		<div class="selectMovie">
			<span>新木乃伊</span>
			<em>7.0</em><i>分</i>
		</div>
		<swipeTime></swipeTime>
		<ul class="showtime-list">
			<li>
				<router-link :to="{name:'selectSite',query :{title :headName}}">
					<div class="left">
						<strong>10:51</strong>
						<em>12:36结束</em>
					</div>
					<div class="middle">
						<div class="style">
							<span>国语</span>
							<em>3D</em>
						</div>
						<em>3号厅</em>
					</div>
					<div class="right">
						<div class="price"><span>38</span><i>元</i></div>
						<div class="selectSite">选座购票</div>	
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import swipeImages from '../components/swipe-images.vue'
	import swipeTime from '../components/swipe-time.vue'
	import { mapState,mapActions } from 'vuex'
	export default {
		name : "cinemaDetail",
		data (){
			return {
				headName : this.$route.query.title ,
				cinemaId :this.$route.query.cinemaId ,
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
			headTop,
			swipeImages,
			swipeTime
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/less/base.less';
	.headTitle{
		width: 100%;
		height: 66px;
		overflow: hidden;
		.stci-info{
			padding: 12px;
			width: 286px;
			height: 42px;
			float: left;
			.cinema-name{
				width: 100%;
				height: 24px;
				line-height: 24px;
				font-size: 16px;
				color: #333;
			}
			p{
				width: 100%;
				height: 18px;
				line-height: 18px;
				font-size: 13px;
				color: #666;
			}
		}
		.stci-tel{
			width: 65px;
			height: 28px;
			padding: 18px 0;
			float: right;
			i{
				display: inline-block;
				vertical-align: middle;
				width: 21px;
				height: 21px;
				background: url("@{images}tel.png") no-repeat;
				background-size: cover;
			}
			&::before{
			    border-left: 1px solid #d8d8d8;
			    height: 28px;
			    display: inline-block;
			    content: '';
			    margin-right:20px;
			    vertical-align: middle;
			}

		}
	}
	.selectMovie{
		height: 46px;
		line-height: 46px;
		font-size: 16px;
		color: #333;
		padding: 0 10px;
		border-bottom: 1px solid #dedede;
		em{
			margin-left: 5px;
			color: #F07C0A;
		}
		i{
			font-size: 12px;
			color: #F07C0A;
		}
	}
	.showtime-list{
		li{
			width: 100%;
			// height: 63px;
			overflow: hidden;
			border-bottom: 1px solid #dedede;
			em{
				font-size: 12px;
			}
			.left{
				float: left;
				width: 89px;
				padding: 10px 0;
				text-align: center;
				strong{
					color: #1f1f1f;
				    font-weight: 400;
				    font-size: 18px;
				    margin-top: 4px;
					display: block;
				}
			}
			.middle{
				float: left;	
				padding: 13px 0 ;
				margin-left: 20px;
				text-align: center;
				.style{
					font-size: 14px;
					color: #333;
					margin-bottom: 2px;
					max-width: 80px;
					height: 14px;
					.text-ellipsis();
					em{
						font-size:14px; 
					}
				}			
			}
			.right{
				float: right;
				padding: 15px 0;
				.price{
					float: left;
					line-height: 26px;
					font-size: 20px;
					color: #e54847;
					i{
						font-size: 22px;
					}
				}
				.selectSite{
					float: right;
					margin: 0 10px 0 14px;
					font-size: 13px;
				    padding: 6px;
				    border-radius:4px;
				    white-space: nowrap;
				    color: #FA5939;
				    border: 1px solid #FA5939;
				    background:#fff;
				}
			}
		}
	}
</style>