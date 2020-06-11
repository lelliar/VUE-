<template>
    <div>
        <h4>评论--{{ newsid }}</h4>
        <hr>
        <textarea maxlength="123" placeholder="请输入你需要BB的内容，最多123个子" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="tijiao">发表评论</mt-button>
        <hr>
        <div class="cmt-list" >
            <div class="cmt-item" v-for="(item,i) in commintdist" :key="i">
                <div class="cmt-item-title">第{{i + 1}}楼&nbsp;用户:{{ item.user_name }}&nbsp;发表时间:{{ item.add_time | dataFormat}}</div>
                <div class="cmt-item-body">{{ item.content }}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain >加载更多</mt-button>  
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            page:1,
            msg:'',
            commintdist:[]
        }
    },
    created(){
        this.getCommintData()
    },
    methods:{
        async getCommintData(){
            const { data } = await this.$http.get('/api/getcomments/'+this.newsid+'?pageindex='+this.page)
            
            if(data.status === 0) return (this.commintdist = this.commintdist.concat(data.message))
        },
        async tijiao(){
            if(this.msg.trim().length<=0) return Toast('请填写评论内容') 
            const { data } = await this.$http.post('/api/postcomment/' + this.newsid , {content:this.msg.trim()})
            if(data.status === 0){
                this.commintdist.unshift({ user_name:"匿名用户" , add_time:new Date() , content:this.msg.trim()})
            }
            this.msg=""
        }
    },
    props:['newsid']
}
</script>

<style lang="scss">
textarea{
    font-size: 14px;
    margin:0
}
    .cmt-list{
        margin-top:4px;
        .cmt-item{
            line-height: 30px;
            .cmt-item-title{
                font-size: 14px;
                background-color: #ddd;
            }
            .cmt-item-body{
                font-size: 13px;
                text-indent: 2em;
            }
        }
    }
</style>