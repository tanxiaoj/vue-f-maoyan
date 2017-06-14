<template>
    <div class="swipeTime">
        <div class="swipeLine clearfix" ref="swipeLine">
            <ul>
                <li :class="{active :tabSelect==0}" @click="tabTime(0,$event)">今天{{date | formatDate}}</li>
                <template v-for="date in daysNum">
                    <li :class="{active :tabSelect==date}" @click="tabTime(date,$event)">{{addDate(date)}}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
import {formatDate} from '../util/date.js'
import BScroll from 'better-scroll'

export default {
    name: 'swipeTime',
    data () {
        return {
            date : new Date() ,
            daysNum : [1,2,3,4,5,6,7],
            tabSelect : 0
        }
    },
    mounted (){
        this.$nextTick(function(){
            this._initScroll();
        });
    },
    filters: {
        formatDate(time) {
            let data = new Date(time);

            return `${formatDate(data, 'MM')}月${formatDate(data, 'dd')}日`
        }
    },
    methods :{
        _initScroll() {
            this.swipeLine = new BScroll(this.$refs.swipeLine, {
              click: true ,
              scrollX: true ,
              snap :true ,
              probeType : 3
            });            
        },
        tabTime(date,event) {
            let x = event.offsetX;
            let el = event.target ;
            let elWidth = el.offsetWidth ;
            let screenX = document.documentElement.clientWidth ;
            let swipeLine = this.$refs.swipeLine ;
            let ul = swipeLine.getElementsByTagName('ul')[0];
            let starX = Number(ul.style.transform.replace(/[translate|translateZ|(|)|,|px]/g,'').split(" ")[0]) ;
            let dis ;
            let maxLeft = ul.offsetWidth - screenX;
            //判断 点击元素距离屏幕左侧距离 + 元素自身的一半 > 屏幕一半宽度？
            if(Math.abs(x)+elWidth/2 > screenX/2){ 
                //往左移动
                dis = starX - Math.abs(x)+elWidth ;

            }else{
                dis = starX + Math.abs(x)+elWidth;
            }

            if(dis > 0){
                dis = 0 ;
            }
            if(dis < -maxLeft){
                dis = -maxLeft ;
            }

            this.swipeLine.scrollTo(dis, 0 , 500)

            if (!event._constructed) {
              return;
            }           
            this.tabSelect = date ;
        },
        addDate(days=1) {
            let data = new Date(this.date);

            let weekday = data.getDay();

            let currentWeek ;

            let newDate = Number(formatDate(data, 'dd')) + days ;

            newDate < 10 ? newDate =`0${newDate.toString()}`:"";

            currentWeek = this.todayWeek((weekday+days)%7)

            if(days==1){
                currentWeek = '明天';
            }
            if(days==2){
                currentWeek = '后天';
            }

            return `${currentWeek}${formatDate(data, 'MM')}月${newDate}日`
        },
        todayWeek(num){
            var r ;
            switch (num){
                case 0: r ='星期天';break;
                case 1: r ='星期一';break;
                case 2: r ='星期二';break;
                case 3: r ='星期三';break;
                case 4: r ='星期四';break;
                case 5: r ='星期五';break;
                case 6: r ='星期六';break;
            }
            return r ;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .swipeTime{
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #E6E6E6;
        overflow: hidden;
        position: relative;
        .swipeLine{
            width: 100%;
            height: 40px;
        }
        ul{
            position: absolute;
            white-space: nowrap;
            padding: 0 7px;
            li{
                height: 40px;
                line-height: 40px;
                color: #666;
                font-size: 14px;
                padding: 0 7px;
                box-sizing: border-box;
                display: inline-block;
                vertical-align: top;
                &.active{
                    border-bottom: 3px solid #e54847;
                }
            }
        }
    }
</style>
