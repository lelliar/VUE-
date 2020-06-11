import Vue from 'Vue'
import moment from 'moment'

Vue.filter('dataFormat' ,function(dateStr , formatStr = "YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(formatStr)
})