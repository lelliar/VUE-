<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/new/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{ item.add_time | dataFormat}}</span>
                                <span>点击:{{ item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created(){
        this.getnews()
    },
    methods: {
        async getnews(){
            const {data} = await this.$http.get('/api/getnewslist')
            if(data.status === 0) return(this.newslist = data.message)
        }   
    },
}
</script>


<style lang="scss" scoped>
    .mui-media-body{
        h1{
            font-size: 15px;
        }
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>