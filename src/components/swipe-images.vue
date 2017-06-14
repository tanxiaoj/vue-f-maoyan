<template>
    <div class="swipeImages">
        <div class="swipeContain clearfix" ref="swipeContain">
            <ul>
                <li :class="{active :selectImage == 0}" dex= 0 @click="selectFn(0,$event)"><img src="//p1.meituan.net/movie/0879eb8e787dd4cede7ee206d43b95b6564255.png.webp@165w_220h_1e_1c" alt=""></li>
                <li :class="{active :selectImage == 1}" dex= 1 @click="selectFn(1,$event)"><img src="//p1.meituan.net/movie/49cb5e795d7bbf1166e0c3b770cd5d98230120.jpg.webp@165w_220h_1e_1c" alt=""></li>
                <li :class="{active :selectImage == 2}" dex= 2 @click="selectFn(2,$event)"><img src="//p1.meituan.net/movie/0879eb8e787dd4cede7ee206d43b95b6564255.png.webp@165w_220h_1e_1c" alt=""></li>
                <li :class="{active :selectImage == 3}" dex= 3 @click="selectFn(3,$event)"><img src="//p1.meituan.net/movie/49cb5e795d7bbf1166e0c3b770cd5d98230120.jpg.webp@165w_220h_1e_1c" alt=""></li>
                <li :class="{active :selectImage == 4}" dex= 4 @click="selectFn(4,$event)"><img src="//p1.meituan.net/movie/0879eb8e787dd4cede7ee206d43b95b6564255.png.webp@165w_220h_1e_1c" alt=""></li>
                <li :class="{active :selectImage == 5}" dex= 5 @click="selectFn(5,$event)"><img src="//p1.meituan.net/movie/49cb5e795d7bbf1166e0c3b770cd5d98230120.jpg.webp@165w_220h_1e_1c" alt=""></li>
            </ul>
        </div>
        <div class="arrow">
            
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'swipeImages',
    data () {
        return {
            selectImage : 0
        }
    },
    mounted (){
        this.$nextTick(function(){
            this._initScroll();
        });      
    },
    filters: {

    },
    methods :{
        _initScroll(star=0) {
            // console.log(star)
            let posX ;
            let stance = 100 ; // li+边距 宽度 ；
            let el = this.$refs.swipeContain ;
            let ul = el.getElementsByTagName('ul')[0];

            this.swipeContain = new BScroll(this.$refs.swipeContain, {
              click: true ,
              scrollX: true ,
              scrollY:false ,
              // snap : true ,
              bounce :false ,
              probeType : 3
            });   

            this.swipeContain.scrollTo(star, 0 );

            this.swipeContain.on('scrollEnd', () => {
               let starX = Number(ul.style.transform.replace(/[translate|translateZ|(|)|,|px]/g,'').split(" ")[0]) ;

                if(starX==0){
                    this.selectImage = 0;
                    return ;
                }
                if(starX % stance != 0){
                    // posX
                    if(starX >= 0){
                        if(starX % stance >= stance/2){
                            posX = (Math.ceil(starX/stance) + 1) * stance ;
                            // console.log(posX)
                            this.selectImage = Math.ceil(starX/stance) - 1 ;
                        }else{
                            posX = (Math.ceil(starX/stance) - 1) * stance ;
                            this.selectImage = Math.ceil(starX/stance) - 1 ;
                        }
                        
                    }else{
                        if(Math.abs(starX) % stance >= stance/2){
                            posX = (Math.ceil(starX/stance) - 1) * stance ;

                            this.selectImage = Math.abs(Math.ceil(starX/stance) - 1) ;
                        }else{
                            if(starX < ul.offsetWidth){
                                posX = (Math.ceil(starX/stance)) * stance ;

                                this.selectImage = Math.abs(Math.ceil(starX/stance)) ;
                            }else{
                                posX = (Math.ceil(starX/stance) - 1) * stance ;

                                this.selectImage = Math.abs(Math.ceil(starX/stance) - 1) ;
                            }
                        }                 
                    }
                    this.swipeContain.scrollTo(posX, 0 );

                    this.swipeContain.destroy();

                    this._initScroll(posX)
                }
            })        
        },
        selectFn(type,event) {
            let el = this.$refs.swipeContain ;
            let ul = el.getElementsByTagName('ul')[0];
            let starX = Number(ul.style.transform.replace(/[translate|translateZ|(|)|,|px]/g,'').split(" ")[0]) ;
            let current = event.target.parentNode.getAttribute('dex') ;
            let dis ;
            let stance = 100 ; // li+边距 宽度 ；
            if (!event._constructed) {
              return;
            } 

            //判断点击移动方向
            if(Number(current) > Number(this.selectImage)){
                //向左移动
                dis = starX - stance ;
            }else if(Number(current) == Number(this.selectImage)){
                dis = starX ;
            }else{
                dis = starX + stance ;
            }
            // starX = dis ;
            //判断当前位置 距离固定节点 那边比较近
            if(dis >= 0){
                dis = Number(current) * 100 ;
            }else{
                dis = Number(current) * -100 ;
            }

            this.swipeContain.scrollTo(dis, 0 , 500)

            this.selectImage = type ;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '../assets/less/base.less';
    .swipeImages{
        width: 100%;
        height: 149px;
        position: relative;
        overflow: hidden;
        background-color: #6b6b6b;
        .swipeContain{
            // width: 100%;
            // height: 149px;    
        }
        .arrow{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform:translate(-50%,0);
            .arrow2
        }
        ul{
            position: absolute;
            white-space: nowrap;
            font-size: 0;
            // padding:0 0 0 138px;
            li{
                width: 80px;
                height: 110px;
                transition:all .5s;
                margin: 24px 20px 15px 0;
                display: inline-block;
                vertical-align: top;
                img{
                    width: 100%;
                    height: 100%;
                }
                &.active{
                    color: #fff;
                    transform:scale(1.1) translate(0,-6px);
                }
                &:nth-child(1){
                    margin-left: 150px;
                }
                &:nth-last-child(1){
                    margin-right: 150px;
                }
            }
        }
    }
</style>
