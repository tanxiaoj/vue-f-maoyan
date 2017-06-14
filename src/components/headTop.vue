<template>
    <div class="headTop">
        <span>{{headName}}</span>
        <router-link class="triangle-left" v-show="showReturn" :to="{path :url}"></router-link>
    </div>
</template>

<script>
export default {
    name: 'headTop',
    data () {
        return {
            
        }
    },
    props :{
        headName :{
            type :String,
            default (){
                return "猫眼电影"
            }
        },
        showReturn :{
            type:Boolean,
            default (){
                return false 
            }
        },
        url : {
            type :String ,
            default (){
                return '/'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import '../assets/less/base.less';

    .headTop{
        height: 50px;
        line-height: 50px;
        width: 100%;
        color:#fff;
        font-size: 22px;
        text-align: center;
        background-color: #e54847;
        position: relative;
        border-bottom: 1px solid #e54847;
        .triangle-left{
            .arrow
        }
    }
</style>
