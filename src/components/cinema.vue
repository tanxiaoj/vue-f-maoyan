<template>
	<div class="cinema">
		<ul>
			<template v-for="list in localCinema">
				<li class="item">
					<router-link :to="{ name: 'cinemaDetail',query: {title :list.nm,cinemaId:list.id}}">
						<div class="cinema-name">
							<span>{{list.nm}}</span>
							<div class="price">
								<i>{{list.sellPrice}}</i>
								<em>元起</em>
							</div>
						</div>
						<div class="address">
							{{list.addr}}
						</div>
						<div class="tag-list">
							<span>座</span>
							<span v-if="!list.preferential">杜比全景声厅</span>
							<span v-if="!list.referencePrice">60帧厅</span>
						</div>
						<div class="dis">{{getDistance(list.lat,list.lng)}}</div>
					</router-link>
				</li>
			</template>
		</ul>
	</div>
</template>
<script>
	export default {
		name : "cinema",
		data (){
			return {
				// selectType : ""
			}
		},
		props :{
			cinemaObject :{
				type :Object,
				default (){
					return ""
				}
			}
		},
		computed :{
			localCinema() {
				var position = '西城区' ; // 假设当前定位昌平区

				return this.cinemaObject[position]
			}
		},
		methods: {
			//根据经纬度计算两地之间距离
			getDistance(lat,lng) {
				//假定当前经纬度
				let lat1 = 39.89703,lng1=110.39432 ;
		        var radLat1 = this.Rad(lat);
		        var radLat2 = this.Rad(lat1);
		        var a = radLat1 - radLat2;
		        var  b = this.Rad(lng) - this.Rad(lng1);
		        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
		        Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
		        s = s *6378.137 ;// EARTH_RADIUS;
		        s = Math.round(s * 10000) / 10000; //输出为公里
		        if(s < 1000){
		        	s=s.toFixed(0) + 'm';
		        }else{
		        	s=s.toFixed(2) + 'km';
		        }
		        
		        return s;
			},
		    Rad(d){
		       return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
		    }
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/less/base.less';

	.cinema{
		.item{
			font-size: 13px;
			color: #666;
			padding: 12px 0 ;
			margin-left: 16px;
			overflow: hidden;
			position: relative;
			border-bottom: 1px solid #E6E6E6;
			// .border-1px
			.cinema-name{
			    font-size: 16px;
			    color: #000;
			    display: inline-block;
			    max-width: 265px;	
			    span{
			    	display: inline-block;
			    	max-width: 220px;
			    	margin-right: 10px;
			    	.text-ellipsis();
			    }		
			    .price{
			    	display: inline-block;
			    	vertical-align: middle;
			    	font-size: 15px;
			    	color: #e54847;
			    	em{
			    		font-size: 10px;
			    	}
			    }	
			}
			.address{
				width: 80%;
				line-height: 45px;
				.text-ellipsis();
			}
			.tag-list{
				span{
				    display: inline-block;
				    padding: 1px;
				    border: 1px solid #589DAF;
				    border-radius: 4px;
				    margin-right: 3px;
				    font-size: 11px;
				    color: #589DAF;
				}
			}
			.dis{
				position: absolute;
				color: #999;
				right: 12px;
				top: 50px;
			}
		}
	}
</style>