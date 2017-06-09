<template>
    <div class="navBar">
        <ul>
            <li :class="{active :selectType==0}" @click="tabFn(0,$event)">
                <span></span>
                影片
            </li>
            <li :class="{active :selectType==1}" @click="tabFn(1,$event)">
                <span></span>
                影院
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navBar',
    data () {
        return {
            selectType :""
        }
    },
    // props: {
    //     selectType :{
    //         type :Number,
    //         default() {
    //             return 0
    //         }
    //     }
    // },
    methods :{
        tabFn(type,event){
            this.selectType = type ;
            this.$emit("select",type);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .navBar{
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 4px solid #DDD8CE;
        li{
            width: 50%;
            float: left;
            font-size: 12px;      
            text-align: center;
            position: relative;
            color: #666;
            &.active{
                color: #e54847;
                span{
                    position: absolute;
                    left: 0;
                    bottom:-4px;
                    height: 4px;
                    width: 100%;
                    background-color: #e54847;
                }
            }
        }
    }
</style>
