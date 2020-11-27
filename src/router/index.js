import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/proflie/Profile')

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '我的'
      }
    },
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title
    next()
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
