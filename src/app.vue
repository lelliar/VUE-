<template>
    <div class="app-container">

        <mt-header fixed title="尹万希Vue项目">
      <span slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
            <transition>
                 <router-view></router-view>
            </transition>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/commit">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/set">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
    .top{
        padding-top:40px;
    }
    .app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  
  overflow: hidden;
}
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-leave-active,.v-enter-active{
        transition: all 0.4s ease;
    }
</style>