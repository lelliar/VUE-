<template>
    <div>
        <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,i) in lunbo" :key="i">
        <img :src="item.img" alt="">
    </mt-swipe-item>
        </mt-swipe>

     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/new">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photos">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		           
		</ul>
    </div>
</template>


<script>
export default {
    data(){
        return {
            lunbo:[],
        }
    },
    created(){
        this.getlunbo()
    },
    methods:{
        async getlunbo(){
            const {data} = await this.$http.get('api/getlunbo')
            if(data.status === 0) this.lunbo = data.message
        }
    }
}
</script>


<style lang="scss" scoped>
    .mint-swipe{
        height:180px;
        .mint-swipe-item{
            img{
                width:100%;
                height:100%;
            }
        }
    }
</style>