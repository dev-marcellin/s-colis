import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import bor from './composants/bordlateral.vue'
import creeragence from './composants/creeragence.vue'
import admin from './composants/admin.vue'
import gerantagence from './composants/gerantagence.vue'
import suivrecolis from './composants/suivrecolis.vue'
import connexion from './composants/connexion.vue'
import identification from './composants/identification.vue'
import creerbranche from './composants/creerbranche.vue'
import gerantbranche from './composants/gerantbranche.vue'
import enregistrercolis from './composants/enregistrercolis.vue'
import facture from './composants/facture.vue'


Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history' ,

  routes: [{
    path: '/',

    component: suivrecolis
  },

  {
    path: '/admin/creeragence',
  component: creeragence
},


{
  path: '/gerant/gerantagence',
component: gerantagence
},
{
  path: '/connexion',
component: identification
},
{
  path: '/gerant/creerbranche',
component: creerbranche
},
{
  path: '/branche/enregistrer',
component: enregistrercolis
},
{
  path: '/facture',
component: facture
},

        

]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App) 
})
