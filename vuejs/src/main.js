import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import bor from './composants/bordlateral.vue'
import creeragence from './composants/creeragence.vue'
import admin from './composants/admin.vue'
import gerantagence from './composants/gerantagence.vue'
import suivrecolis from './composants/suivrecolis.vue'


Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history' ,

  routes: [{
    path: '/',

    component: suivrecolis
  },

  {
    path: '/creeragence',
  component: creeragence
},
{
  path: '/admin',
component:  admin
},

{
  path: '/gerantagence',
component: gerantagence
}
    
]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App) 
})
