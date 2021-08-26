<template>
  <div class="container-fluid h-100">
    <div class="row h-100 ">
       <bordlateral data="Gérer Branche" creer="Créer Branche" admin="Gerant Agence" r1="/gerant/creerbranche" r2="/gerant/gererbranche"></bordlateral>
      <main class="col">
        <navbar></navbar>
        <div class="bord">
          <h2>créer une branche </h2>
        </div>
            
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <br />
          <form >
            
            <div class="partieutilisateur"><h7>informations sur l'utilisateur </h7></div>
            <div class=" row row-cols-1 row-cols-md-1 g-4">

            <div class="mb-3 ">
              
              nom:<input
                type="text"
                class="form-control" v-model="nom"
              />
              
            </div>
            <div class="mb-3">
              
              prenom<input
                type="text"
                class="form-control" v-model="prenom"
              />
            </div>
            <div class="mb-3">
              
              login<input
                type="text"
                class="form-control" v-model="login"
              />
            </div>
            <div class="mb-3">
              
              email<input
                type="text"
                class="form-control" v-model="email"
              />
            </div>
            <div class="mb-3">
              
              
            </div>
            <div class="mb-3">
              
              mot de passe<input
                type="password"
                class="form-control" v-model="password"
              />
            </div>
            <div class="partieAgence bg-success"><h7>informations sur la branche </h7></div><br>
            
            </div>
              <div class="mb-3">
              
              nom de la branche<input
                type="text"
                class="form-control" v-model="noma"
              />
            </div>
            <div class="mb-3">
              
              localisation<input
                type="text"
                class="form-control" v-model="siege"
              />
             
            </div>
                
            <p class="bg-warning"> r1{{test}}</p>
            <input type="button"  class="btn btn-primary" @click="enregistrer" value="enregistrer">
          
          </form>

          <gain></gain>

          <evolutiongain></evolutiongain>

          <test></test>

          <alert></alert>
        </div>
      </main>
    </div>
    
  </div>
</template>

<script>
import bordlateral from "./bordlateral.vue";
import navbar from "./navbar.vue";

export default {
  name: "app",
  components: { bordlateral, navbar },
  data() {
    return {
      s: 1000000,
      nom,
      prenom,
      login,
      email,
      
      password,
      noma,
      siege,
      
      

    };
  },
 
  methods: {
    enregistrer(){
      
       const article = { nom: this.nom, prenom:this.prenom , login: this.login, email:this.email , role: 'branche', mdp:this.password, nomBranche: this.noma, localisation: this.siege};
  axios.post("http://localhost:5000/api/user/registerBranche/6112eed4ff8af9169c99587f", article)
    .then(response => {console.log(response);
    
   
    })
     this.success= "bravo la branche "+this.noma+" a été créé avec succes "
    }
  }
};
</script>