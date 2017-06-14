<template>
	<div class="movedetail">
		<headTop :show-return="showReturn" :head-name="headName"></headTop>
		<div class="headContain">
			<div class="headMes">
				<div class="filter"></div>
				<div class="left">
					<img src="//p1.meituan.net/movie/4185bf22758d232e15c5bf52f89a7553867763.png@177w_249h" alt="">
				</div>
				<div class="right">
					<div class="name">新木乃伊</div>
					<div class="engName">The Mummy</div>
					<div class="score">
						<div class="user-score">
							<span>用户评分</span>
							<em>7.0</em><i>(11.8万评分)</i>
						</div>
						<div class="nor-score">
							<span>专业评分 ></span>
							<em>4.6</em><i>(24评分)</i>
						</div>
					</div>
					<div class="style">动作、毛线、奇幻</div>
					<div class="pub">
						<span>美国</span>
						<em>/106分钟</em>
					</div>
					<div class="time">
						2017-06-09大陆上映
					</div>
				</div>
			</div>
			<router-link class="buy" to>立即购票</router-link>
			<div class="text-expander">
				<p>一位古埃及公主（索菲亚·宝特拉 饰）因以魔法谋朝不遂而被擒，并被扎成为一具木乃伊生生活埋在大漠底下，千年过后一次机缘巧合她得以重回人间，因为曾遭极刑，她怀着满腔怨恨，在复活</p>
				<div class="show-icon"></div>
			</div>
		</div>
		<div class="line"></div>
		<div class="tips">
			<div class="title">观影小贴士</div>
			<div class="text">小学生及学龄儿童在家长陪同下观看</div>
		</div>
		<div class="line"></div>
	</div>
</template>
<script>
	import headTop from '../components/headTop.vue'
	import { mapState,mapActions } from 'vuex'
	export default {
		name : "movedetail",
		data (){
			return {
				headName : this.$route.query.title ,
				movieId :this.$route.query.movieId ,
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
				this.$store.dispatch("movie_detail", this.movieId);
			}
		},
		components :{
			headTop
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/less/base.less';

	.movedetail{
		.headContain{
			width: 100%;
			border-bottom: 1px solid #dedede;
			background-color: #fff;
			.headMes{
			    padding: 15px;
			    line-height: 1;
			    display: flex;
			    overflow: hidden;
			    position: relative;
			    box-sizing: border-box;
			    -webkit-filter: blur(0);
			    filter: blur(0);
			    background-color: #666;
			    .filter{
				    top: 0;
				    left: 0;
				    right: 0;
				    bottom: 0;
				    width: 100%;
				    position: absolute;
				    background-color: #40454d;
				    opacity: .25;
			    }
			    .left{
			    	// width: 107px;
			    	height: 150px;
			    	flex :0 0 107px;
			    	position: relative;
			    	z-index: 1;
			    	border:2px solid white;
			    	img{
			    		width: 100%;
			    		height: 100%;
			    	}
			    }
			    .right{
			    	font-size: 12px;
			    	color: white;
			    	flex : 1 ;
			    	margin-left: 12px;
					.text-ellipsis();
			    	.name{
			    		font-size: 17px;
			    		margin-bottom: 4px;
			    	}
			    	.score{
			    		font-size: 11px;
			    		margin: 4px 0;
			    		color: rgba(255,255,255,0.7);
			    		span{
			    			display: block;
			    			margin: 4px 0;
			    		}
			    		em{
			    			font-size: 17px;
			    			color: #ffc600;
			    			margin-right: 3px;
			    		}
			    	}
			    	.user-score{
			    		display: inline-block;
			    		vertical-align: top;
			    		margin-right: 6px;
			    	}
			    	.nor-score{
			    		display: inline-block;
			    		vertical-align: top;
			    	}
					.style{
						margin-bottom: 5px;
					}
					.pub{
						margin-bottom: 5px;
					}
			    }
			}
			.buy{
			    color: white;
			    cursor: pointer;
			    font-size: 16px;
			    width: 345px;
			    padding: 10px 0;
			    margin: 15px auto;
			    display:block;
			    text-align: center;
			    border-radius: 4px;
			    line-height: 1;
			    background: #e54847;
			    color: #fff;
			}
			.text-expander{
				width: 345px;
				height: 85px;
				font-size: 15px;
				line-height: 18px;
				color: #555;
				margin: 0 auto;
				padding-bottom: 10px;
				position: relative;
				.show-icon{
				    position: absolute;
				    left: 50%;
				    bottom: -4px;
				    transform:translate(-50%,0);
				    width: 0;
				    height: 0;
				    border-left: 12px solid transparent;
				    border-right: 12px solid transparent;
				    border-top: 10px solid #666;
				    border-bottom: 10px solid transparent;
				    &::after {
				        position: absolute;
				        content: "";
				        bottom: -9px;
				        left: -12px;
				        width: 0;
				        height: 0;
				        border-left: 12px solid transparent;
				        border-right: 12px solid transparent;
				        border-top: 10px solid #fff;
				        border-bottom: 10px solid transparent;
				    }						
				}
			}
		}
		.line{
			width: 100%;
			height: 10px;
			background-color: #f5f5f5;
		}
		.tips{
			color: #666;
			background-color: #fff;
			.title{
			    font-weight: 400;
			    font-size: 15px;
			    padding: 10px 15px;
			    border-bottom: 1px solid #e5e5e5;				
			}
			.text{
				height: 40px;
				line-height: 40px;
			    margin-left: 15px;
			    padding-left: 30px;
			    background: url("@{images}tips.png") no-repeat left center;
			    background-size: 20px 20px;
			}
		}
	}
</style>