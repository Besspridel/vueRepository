import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Posts from '../pages/Posts.vue'
import CreatePost from '../pages/CreatePost.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/createPost',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
