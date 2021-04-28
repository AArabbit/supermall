import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const ShopCart = () => import('@/views/shopcart/ShopCart.vue')
const Profile = () => import('@/views/profile/Profile.vue')


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'Home'
  },
  {
    path: '/category',
    component: Category,
    name: 'Category'
  },
  {
    path: '/shopcart',
    component: ShopCart,
    name: 'ShopCart'
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
