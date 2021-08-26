<template>
    <div class="container-fluid h-100" >
            <div class="row h-100">

                <bordlateral  creer="Enregistrer un colis" data="envoi" admin="Gérant de branche" branche1="reception" r1="/branche/enregistrer" r2="/branche/envoi"></bordlateral>
              <main class="col">
                
                <navbar></navbar>

                <div class="bord"><h3>Tableau de Bord</h3></div>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                   <colislivre></colislivre>

                    <colisarrive></colisarrive>
                    
                    <gain status="branche"></gain>


                    <evolutiongain></evolutiongain>


                     <test></test>

                   
                      <alert></alert>


                  </div>
                
              </main>
          </div>



          


      </div>
</template>

<script>
import bordlateral from './bordlateral.vue'
import navbar from './navbar.vue'
import colislivre from './colislivre.vue'
import colisarrive from './colisarrive.vue'
import gain from './gain.vue'
import evolutiongain from './evolutiongain.vue'
import test from './test.vue'
import alert from './alert.vue'

export default {
  components: {bordlateral, navbar, colislivre, colisarrive, gain, evolutiongain, test, alert},
  name: 'app',
  data () {
    return {
      msg1: true,
      branche: true,
    } 
  }
}
</script>