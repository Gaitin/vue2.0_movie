import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mainTab from '@/components/mainTap/mainTab'
import movieDetail from '@/components/movieDetail/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainTab',
      component: mainTab
    },
    {
      path: '/md',
      name: 'movieDetail',
      component: movieDetail
    }
  ]
})
