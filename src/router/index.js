import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/views/index'

Vue.use(Router)

export default new Router({
  mode :'history',
  base :__dirname,
  linkActiveClass :'active' ,
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/views/index'], resolve)
    },
    {
      path: '/movieTime',
      name: 'movieTime',
      component: (resolve) => require(['@/views/movieTime'], resolve)
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: (resolve) => require(['@/views/movieDetail'], resolve)
    }
  ]
})
