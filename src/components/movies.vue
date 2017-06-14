<template>
    <div class="movies">
        <ul class="movielist">
            <template v-for="(list,index) in moviesList">
                <li class="item">
                    <router-link class="item-contain" :to="{ name: 'movieDetail',query: {title :list.nm,movieId:list.id}}">
                        <div class="left">
                            <img v-lazy="list.img" alt="">
                        </div>
                        <div class="right">
                            <div class="movie-title">
                                <span class="movie-name">{{list.nm | limitName}}</span>
                                <span class="movie-version" :class="{'v3d':list['3d'],'v2d':list.ver.indexOf('2D')!=-1 && !list['3d'] && list.imax ,'IMAX':list.imax && (list['3d'] || list.ver.indexOf('2D')!=-1)}"></span>
                                <div class="movie-rating">
                                    <span v-if="list.sc!=0">{{list.sc}}<em>分</em></span>
                                    <span v-if="list.sc==0">{{list.wish}}<em>人想看</em></span>
                                </div>
                            </div>
                            <p>{{list.cat}}</p>
                            <p>{{list.star}}</p>
                            <p class="movie-show">今天176家影院放映2281场</p>
                        </div>
                    </router-link>
                    <router-link class="movie-btn" :to="{ name: 'movieTime',query: {title :list.nm}}" v-text="list.sc == 0?'预售':'购票'" :class="{current :!list.sc }">
                        购票
                    </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'movies',
    data () {
        return {
        }
    },
    props :{
        moviesList: {
            type :Array,
            default() {
                return []
            }
        }
    },
    filters :{
        limitName (val){
            var limit = 14 ;
            if(val.length > limit){
                return val.substring(0,limit) + "..."
            }else{
                return val ;
            }
        }
    },
    methods :{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .movielist{
        padding: 0 12px;
        background-color: #fff;
        .item{
            width: 100%;
            padding: 12px 0;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            border-bottom: 1px solid #E6E6E6;
            .item-contain{
                display: flex;
            }
            .movie-btn{
                position: absolute;
                right: 0;
                bottom: 12px;
                padding: 5px 10px;
                font-size: 12px;
                line-height: 16px;
                color: #fff;
                background: #EF4238;
                border-radius: 5px;
                display: inline-block;
                &.current{
                    background-color: #52B0EB;
                }
            }
            .left{
                flex :0 0 64px;
                width: 64px;
                height: 90px;
                overflow: hidden;
            }
            .right{
                flex:1;
                color: #666;
                font-size: 13px;
                position: relative;
                margin: 4px 0 0 8px;
                .movie-title{
                    height: 16px;
                    width: 100%;
                    position: relative;
                    .movie-rating{
                        color: #FFB400;
                        font-size: 16px;
                        position: absolute;
                        right: -60px;
                        top: 0; 
                        em{
                            font-size: 12px;
                        }                   
                    }
                    .movie-version{
                        margin-left: 4px;
                    }
                    .movie-version:after,.movie-version:before {
                        font-size: 8px;
                        display: inline-block;
                        vertical-align: top;    
                        box-sizing: border-box;
                    }
                    .movie-version::before{
                        color: #fff;
                        background-color: #8BB7CE;
                        border: 1px solid #8BB7CE;
                        border-radius: 2px;
                    }
                    .movie-version::after{
                        color: #8BB7CE;
                        border: 1px solid #8BB7CE;
                        border-left: 0;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;                    
                    }
                    .IMAX::after{
                        content: 'IMAX';
                    }
                    .v3d::before{
                        content: '3D';
                    }
                    .v2d::before{
                        content: '2D';
                    }
                }
                .movie-name{
                    color: #222;
                    font-size: 15px;
                    line-height: 12px;
                }
                p{
                    width: 216px;
                    line-height: 16px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    &.movie-show{
                        color: #999;
                    }
                }
            }
        }
    }
</style>
