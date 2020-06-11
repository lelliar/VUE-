<template>
    <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="info">
      <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <!-- 新闻内容 -->
    <div class="content" v-html="newsinfo.content"></div>
    <hr>

    <!-- 这里评论组件的位置 -->
    <!-- 父组件向子组件传值，通过 属性绑定的形式 -->
    
    <comment :newsid="id"></comment>
  </div>
</template>

<script>
import comment from "../../sub-conponents/comment.vue"
export default {
    data(){
        return {
            newsinfo:{}
        }
    },   
    created(){
        this.getNewsinfo()
    },
    methods: {
        async getNewsinfo(){
            
            const { data } = await this.$http.get('/api/getnew/'+this.id)
            console.log(data)
            if(data.status === 0) return (this.newsinfo = data.message[0])
        }
    },
    props:['id'],
    components:{
      comment
    }
}
</script>

<style lang="scss" scoped>
    .newsinfo-container{
        padding: 3px;
 
    .title {
    font-size: 15px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }

  .info {
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
  }
}
</style>