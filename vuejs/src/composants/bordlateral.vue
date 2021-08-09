<template>
    
    <aside class="col-12 col-md-2 p-0 bg-primary"  >
      <nav class="navbar navbar-expand navbar-dark  flex-md-column flex-row align-items-start " id="dash">
          <div class="collapse navbar-collapse">
              <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                  <li class="nav-item">
                     <h3 class="bordtext"><img src="../img/bord.png" class="size"> Tableau de Bord</h3><br> <hr>
                  </li>
                  
                  <li class="bordtext"> <img src="../img/dash.png" class="size">  <router-link to="/creeragence"> {{creer}}</router-link></li> <br>
                  <li class="bordtext"></li> <br>
                  <li class="bordtext"> <img src="../img/seting.png" class="size">{{data}}</li> <br> 
                  <br>
                  <li class="bordtext"></li> <hr>
                  <br><br>
                  <li class="bordtext"><img src="../img/tableau.png" class="size"> Historique</li> <br>
                  <li class="bordtext"> <img src="../img/chart.png" class="size"> Statistique</li>

                  <br><br><br><br><br><br><br><br><br><br><br><br><br>
                  
              </ul>
          </div>
      </nav>
  </aside>


</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg1: []
    } 
  },
  props:{
    data: String,
    creer:String

  }

}
</script>

<style>

.bordtext a{
 text-decoration: none;
 color: white;
}

</style>