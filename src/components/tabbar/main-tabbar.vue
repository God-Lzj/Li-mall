<template>
  <div>
    <!-- 下方导航栏组件 -->
    <tab-bar>
      <!-- 导航栏里面的子组件  这里的ActiveColor暂时固定当想要修改导航栏字体颜色时就输入对应的颜色-->
      <tabbar-item path="/home" ActiveColor="#e16454">
        <!-- 当组件未被选择时 -->
        <template v-slot:item-icon>
          <img src="~assets/imgs/tabbar/首页 未选择.png" alt="" />
        </template>
        <!-- 当组件被选择时 -->
        <template v-slot:item-icon-active>
          <img src="~assets/imgs/tabbar/首页.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tabbar-item>
      <tabbar-item path="/classify" ActiveColor="#e16454">
        <template v-slot:item-icon>
          <img src="@/assets/imgs/tabbar/分类 未选择.png" alt="" />
        </template>
        <!-- 当组件被选择时 -->
        <template v-slot:item-icon-active>
          <img src="@/assets/imgs/tabbar/分类.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tabbar-item>
      <tabbar-item path="/shopcar" ActiveColor="#e16454">
        <template v-slot:item-icon>
          <img src="@/assets/imgs/tabbar/购物车 未选择.png" alt="" />
        </template>
        <!-- 当组件被选择时 -->
        <template v-slot:item-icon-active>
          <img src="@/assets/imgs/tabbar/购物车.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tabbar-item>
      <tabbar-item path="/profiles" ActiveColor="#e16454">
        <template v-slot:item-icon>
          <img src="../../assets/imgs/tabbar/我的 未选择.png" alt="" />
        </template>
        <!-- 当组件被选择时 -->
        <template v-slot:item-icon-active>
          <img src="../../assets/imgs/tabbar/我的.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "./Tabbar.vue";
import tabbarItem from "./Tabbaritem";

export default {
  name: "main-tabbar",
  data() {
    return {};
  },
  components: {
    tabBar,
    tabbarItem,
  },
  methods: {},
  mounted() {},
};
</script>

<style>
</style>