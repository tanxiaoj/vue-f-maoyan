<template>
    <div class="site">
        <ul class="site-status" v-if="selected == ''">
            <li><span>可选</span></li>
            <li><span>已选</span></li>
            <li><span>已售</span></li>
            <li><span>情侣座</span></li>
        </ul>
        <div class="sited clearfix" v-if="selected != ''">
            <ul>
                <template v-for="site in selected">
                    <li>{{site[0]}}排{{site[1]}}座</li>
                </template>
            </ul>
            <div class="price"><span>{{amount}}</span><em>元</em></div>
        </div>

        <div class="site-head">1号厅</div>
        <div class="c-tips">银幕中央</div>
        <div class="site-pos clearfix">
            <ul class="site-lines">
                <template v-for="row in rows">
                    <li>{{row}}</li>
                </template>
            </ul>
            <div class="site-contain" ref="siteContain">
                <ul class="site-rk clearfix" ref="siteTable">
                    <template v-for="(row,index) in rows">
                        <li :row="index+1">
                            <template v-for="(col,index) in cols">
                                <span :col="index+1" :class="soldFn(row,col)" @click="selectSite($event)"></span>
                            </template>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'site',
    data () {
        return {
            rows : "",
            cols : "",
            solds :[] ,  // 已售座位
            selected : [] ,
            price : 38 ,// 假定一张票40  
            amount : 0 ,
        }
    },
    mounted(){
        this.randSite();
    },
    methods:{
        // 简单设置随机影院座位排布
        // 假设 每排 最少4座 最多15座 最少4排最多15排
        randSite() {
            let sold ;
            let arr = [];
            this.rows = parseInt(Math.random()*12 + 4); //行
            this.cols = parseInt(Math.random()*12 + 4); //列

            // 随机产生1-10个不重复的已售座位
            sold = Math.floor(Math.random()*10 + 1) ;

            for(let i=0;i<sold;i++ ){
                //随机座次
                let pos = [parseInt(Math.random()*12 + 4),parseInt(Math.random()*12 + 4)] ;
                arr.push(pos);
            }

            //遍历当前数组 
            for(var i = 0; i < arr.length; i++){ 

                if (this.solds.indexOf(arr[i]) == -1) {

                    this.solds.push(arr[i]);
                } 
            } 

            
            this.initSite();
        },
        initSite() {
            this.$nextTick(function(){
                let site = this.$refs.siteTable ;
                let oLi = site.getElementsByTagName('li');
                let pdl = parseInt(this.getStyle(oLi[0],'paddingLeft')) + parseInt(this.getStyle(oLi[0],'paddingRight'));
                let mgr ;
                let oSpan ;
                let w ;
                let arrW = [] ;
                let maxW ;
                for(let i =0;i<oLi.length;i++){
                    oSpan = oLi[i].getElementsByTagName('span');
                    mgr = parseInt(this.getStyle(oSpan[0],'marginRight')) ;
                    w = (oSpan[0].offsetWidth + mgr) * (oSpan.length) - mgr + pdl ;
                    arrW.push(w);
                } 

                maxW = arrW[0];

                for(let i =0;i<arrW.length;i++){
                    if(arrW[i] > maxW){
                        maxW = arrW[i]
                    }
                }
                site.style.width = maxW + 'px';
                this.initScroll();
            });
        },
        initScroll() {
            let site = this.$refs.siteTable ;
            let w = -site.offsetWidth/2 ;

            // 判断是否开启滑动
            if(site.offsetWidth > document.documentElement.offsetWidth){
   
                this.siteContain = new BScroll(this.$refs.siteContain,{
                    click: true ,
                    scrollX :true ,
                    scrollY :false ,
                    probeType : 3
                })
                site.style.left = 0 ;
            }else{
                site.style.marginLeft = w + 'px'  ;
            }
        },
        selectSite(event) {
            let el = event.target ;
            let row = el.parentNode.getAttribute('row') ; 
            let col = el.getAttribute('col') ;
            let pos = [] ;
            let count ;
            if(el.className == ""){
                if(this.selected.length == 4){
                    alert('最多只能选4个座位');
                    return ;
                }
                el.className = "active" ;
                this.selected.push([row,col]) ;
            }else if(el.className == "active"){
                el.className = "";
                pos = [row,col] ;
                for(let i = 0; i < this.selected.length ; i++){
                    console.log()
                    if(this.selected[i][0]==pos[0] && this.selected[i][1]==pos[1]){
                        this.selected.splice(i,1)
                    }
                }
            }
            this.amount = this.selected.length * this.price ;
            count = this.selected.length ;
            this.$emit("order",{count:count,amount:this.amount});
        },
        soldFn(row,col){
            for(let i=0;i<this.solds.length;i++){
                if(this.solds[i][0]==row && this.solds[i][1]==col){
                    return 'sold';
                }
            }
        },
        getStyle(obj,attr){ 
            if(obj.currentStyle){ 
                return obj.currentStyle[attr]; 
            } 
            else{ 
                return document.defaultView.getComputedStyle(obj,null)[attr]; 
            } 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '../assets/less/base.less';

    .site{
        position: absolute;
        left: 0;
        top: 105px;
        bottom:0 ;
        right: 0;
        background-color: #f0efed;
        .site-status{
            font-size: 14px;
            color: #555;
            padding: 0 5%;
            overflow: hidden;
            border-bottom: 1px solid #dedede;
            background-color: #f8f8f8;
            li{
                float: left;
                width: 15%;
                height: 35px;
                line-height: 35px;
                padding-left: 10%;
                background-repeat: no-repeat;
                background-size: 15px 15px;
                background-position: 18% center;
                span{
                    // margin-left: 25px;
                }
                &:nth-child(1){
                    background-image: url("@{images}site.png");
                }
                &:nth-child(2){
                    background-image: url("@{images}sited.png");
                }
                &:nth-child(3){
                    background-image: url("@{images}out.png");
                }
                &:nth-child(4){
                    background-image: url("@{images}pink.png");
                }
            }
        }
        .sited{
            background-color: #f8f8f8;
            padding: 3px 10px;
            ul{
                float: left;
                li{
                    float: left;
                    margin: 1px;
                    color: #555;
                    width: 60px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 12px;
                    text-align: center;
                    border-radius: 3px;
                    background-color: #fff;
                }
            }
            .price{
                float: right;
                height: 30px;
                line-height: 30px;
                margin-right: 11px;
                white-space: nowrap;
                font-size: 18px;
                color: #d54544;
                font-style: normal; 
                em{
                    font-size: 15px;
                }       
            }
        }
        .site-head{
            width: 168px;
            height: 20px;
            line-height: 20px;
            color: white;
            font-size: 14px;
            text-align: center;
            margin: 0 auto;
            background: url("@{images}site-head.png") no-repeat;
            background-size: contain;
        }
        .c-tips{
            color: #555;
            width: 56px;
            height: 16px;
            line-height: 16px;
            margin: 0 auto 10px;
            font-size: 12px;
            text-align: center;
            background: #e0e0e0;   
        }
        .site-pos{
            position: relative;
            .site-lines{
                position: absolute;
                left: 4px;
                top: 0px;
                z-index: 1;
                color: #fff;
                font-size: 12px;
                padding: 14px 0 ;
                border-radius: 8px;
                background: rgba(127, 127, 127,.5);
                li{
                    width: 14px;
                    height: 24px;
                    line-height: 20px;
                    text-align: center;
                    white-space: nowrap;
                }
            }
            .site-contain{
                position: relative;
                padding-top: 14px;
                .site-rk{
                    position: absolute;
                    left: 50%;
                    // transform:translate(-50%,0);
                    li{
                        // height: 20px;
                        padding:0 25px;
                        overflow: hidden;
                        margin-bottom: 4px;
                        span{
                            float: left;
                            width: 20px;
                            height: 20px;
                            margin-right: 4px;
                            background: url('@{images}site.png') no-repeat;
                            background-size: cover;
                            &:nth-last-child(1){
                                margin-right: 0;
                            }
                            &.active{
                                background-image: url('@{images}sited.png');
                            }
                            &.sold{
                                background-image: url('@{images}out.png');
                            }
                        }
                        &:nth-last-child(1){
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>
