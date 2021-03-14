import Vue from 'vue'
import VueRouter from 'vue-router'
//导入各种组件
const home = () =>
    import ("../views/home/home.vue");
const classify = () =>
    import ("../views/classify/classify.vue");
const shopcar = () =>
    import ("../views/shopcar/shopcar.vue");
const profiles = () =>
    import ("../views/profiles/profiles.vue");
Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: home
}, {
    path: '/classify',
    component: classify
}, {
    path: '/shopcar',
    component: shopcar
}, {
    path: '/profiles',
    component: profiles
}, ];

const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router