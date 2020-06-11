import Vue from 'vue'
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import axios from 'axios'
import './filters.js'

Vue.use(MintUI)

Vue.prototype.$http = axios.create({
    baseURL : 'http://api.cms.liulongbin.top/'
})
