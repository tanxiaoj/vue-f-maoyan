<template>
    <div class="headTop">
        <span>{{headName}}</span>
        <div class="triangle-left" v-show="showReturn" @click="returnFn"></div>
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
        }
    },
    methods :{
        returnFn (){
            this.$router.go(-1)
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
