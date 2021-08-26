<template>
  
    <aside class="col-12 col-md-2 p-0 bg-primary"  >
      <nav class="navbar navbar-expand navbar-dark  flex-md-column flex-row align-items-start " id="dash">
          <div class="collapse navbar-collapse">
              <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                  <li class="nav-item">
                      <h3 class="bordtext" >{{admin}} </h3><hr>
                     <h3 class="bordtext"><img src="../img/bord.png" class="size"> Tableau de Bord</h3><br> <hr>
                  </li>
                  
                  <li class="bordtext"> <img src="../img/dash.png" class="size"> <router-link :to="r1"> {{creer}} </router-link></li> <br>
                  <li class="bordtext"></li> <br>
                  <li class="bordtext"> <img src="../img/seting.png" class="size"> <router-link :to="r2">{{data}} </router-link> </li> <br> 

                  <li class="bordtext"> <router-link :to="route3"><img src="../img/dash.png" class="size">  {{branche1}} </router-link></li> <br>
                  <li class="bordtext"></li> <br>
                 

                  <br>
                  <li class="bordtext"></li> <hr>
                  <br><br>
                  <li class="bordtext"><img src="../img/tableau.png" class="size"> <router-link :to="histo"> Historique </router-link> </li> <br>
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
//props pour passer le liens en fonction de l'utilisateur 
  props:{
    data: String,
    creer:String,
    admin : String,
    branche1: String,
   
    r1: String,
    r2: String,
    historique: String
    

  },

  data () {
    return {
      msg1: [],
      route1:'',
      route2: '',
      histo:'',
      route3: '',
    
      
    } 
  },
  
  mounted(){
    this.route1 = this.r1 ;
    this.route2 = this.r2 ;
    this.histo = this.historique;
    this.route3 = this.branche1;
    this.test= "test";
  
  },
  methods:{
    login() {
     
     
    }
  }
  
}
</script>

<style>

.bordtext a{
 text-decoration: none;
 color: white;
}
.bordtext img{
  width: 20px;
  height: 20px;
}


</style>