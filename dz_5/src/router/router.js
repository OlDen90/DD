import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectAll from '../views/ProjectAll.vue'
import TasksAll from '../views/TasksAll.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/projects', component: ProjectAll },
  { path: '/tasks', component: TasksAll },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
