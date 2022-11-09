import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropsWithRef from '../views/PropsWithRef.vue'
import PostDetail from '../views/PostDetail.vue'
import CreatePost from '../views/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/PropsWithRef',
    name: 'PropsWithRef',
    component: PropsWithRef
  },
  {
    path: '/PropsWithRef/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/CreatePost',
    name: 'CreatePost',
    component: CreatePost,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
