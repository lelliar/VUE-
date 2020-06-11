
import ARouter from 'vue-router'

import home from './comonent/home.vue'
import set from './comonent/set.vue'
import shop from './comonent/shop.vue'
import commit from './comonent/commit.vue'
import news from './comonent/news/news.vue'
import newsinfo from './comonent/news/newsinfo.vue' 
import photos from './photos/photolist.vue'
var router = new ARouter({
    routes :[
        {path:'/' , redirect:'/home'},
        {path:'/home' , component:home},
        {path:'/commit' , component:commit},
        {path:'/set' , component:set},
        {path:'/shop' , component:shop},
        {path:'/home/new' , component:news},
        {path: '/home/new/:id' , component:newsinfo , props:true},
        {path:'/home/photos' ,component : photos}
    ],
    linkActiveClass : 'mui-active'
})

export default router