<template>
  <div class="container-fluid h-100">
    <div class="row h-100 ">
      <bordlateral  creer="Enregistrer un colis" data="envoi" admin="Gérant de branche" branche1="reception"></bordlateral>
      <main class="col">
        <navbar></navbar>
        <div class="bord">
          <h2>Enregistrer un colis</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <br />
          <form >
            
            <div class="partieutilisateur"><h7>informations sur le colis </h7></div>
            <div class=" row row-cols-1 row-cols-md-1 g-4">

            <div class="mb-3 ">
              
              description:<input
                type="text"
                class="form-control" v-model="description" 
              />
             
            </div>
            <div class="mb-3">
              
              nombre<input
                type="number"
                class="form-control" v-model="nombre"
              />
                
            </div>
            <div class="mb-3">
              
              poids<input
                type="number"
                class="form-control" v-model="poids"
              />
            </div>
            <div class="mb-3">
              
              valeur<input
                type="number"
                class="form-control" v-model="valeur"
              />
            </div>
            <div class="mb-3">
              
              depart<input
                type="text"
                class="form-control" v-model="depart"
              />
            </div>
            <div class="mb-3">
              
              destination<input
                type="text"
                class="form-control" v-model="destination"
              />
            </div>

            <div class="mb-3">
              
              prix<input
                type="number"
                class="form-control" v-model="prix"
              />
            </div>

            <div class="mb-3">
              
              nom expéditeur<input
                type="text"
                class="form-control" v-model="nomExp"
              />
            </div>
            <div class="mb-3">
              
              tel expéditeur<input
                type="text"
                class="form-control" v-model="telExp"
              />
            </div>
            <div class="mb-3">
              
              cni expéditeur<input
                type="text"
                class="form-control" v-model="cniExp"
              />
            </div>
            <div class="mb-3">
              
              nom destinataire<input
                type="text"
                class="form-control" v-model="nomDest"
              />
            </div>
            <div class="mb-3">
              
              tel destinataire<input
                type="text"
                class="form-control" v-model="telDest"
              />
            </div>
           
            
            </div>
             

            
            <input type="button"  class="btn btn-primary" @click="enregistrer" value="enregistrer">
          
          </form>

          <gain></gain>
            <div class="col">
         
              <facture v-if="status"> </facture>
             </div>
          <evolutiongain></evolutiongain>
            

        </div>
      </main>
    </div>
  </div>
</template>

<script>
import bordlateral from "./bordlateral.vue";
import navbar from "./navbar.vue";
import facture from './facture.vue'


export default {
  name: "app",
  components: { bordlateral, navbar,facture },
  data() {
    return {
      c: "Welcome to Your bord lateral",
      description:'',
      nombre,
      poids,
      valeur,
      depart,
      destination,
      prix,
      nomExp,
      telExp,
      cniExp,
      nomDest,
      telDest,
      id,
      status:true,
      code,      

    };
  },
  methods: {
    enregistrer(){
      
       const article = { description: this.description, nombre:this.nombre , poids: this.poids, valeur:this.valeur , depart: this.depart, destination:this.destination, prix: this.prix, nomExp: this.nomExp, telExp: this.telExp, cniExp: this.cniExp, nomDest: this.nomDest, telDest: this.telDest};
  axios.post("http://localhost:5000/api/colis/register/611bc8be609fe50e2eedbae3", article)
    .then(response => {console.log(response.data);
    this.code= response.data.code
   
    })
   
  this.status = true;
   console.log("le status "+this.status);
    }
  },
  
  
};
</script>