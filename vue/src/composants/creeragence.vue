<template>
  <div class="container-fluid h-100">
    <div class="row h-100 ">
      <bordlateral data="Gérer Agence" creer="Créer Agence" admin="Admin" r1="/admin/creeragence" r2="/admin/gereragence" historique="/admin/historique"></bordlateral>
      <main class="col">
        <navbar></navbar>
        <div class="bord">
          <h2>créer une Agence</h2>
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
              
              role<input
                type="text"
                class="form-control" v-model="role"
              />
            </div>
            <div class="mb-3">
              
              mot de passe<input
                type="password"
                class="form-control" v-model="password"
              />
            </div>
            <div class="partieAgence bg-success"><h7>informations sur l'agence </h7></div><br>
            
            </div>
              <div class="mb-3">
              
              nom de l'agence<input
                type="text"
                class="form-control" v-model="noma"
              />
            </div>
            <div class="mb-3">
              
              siege social<input
                type="text"
                class="form-control" v-model="siege"
              />
            </div>

            
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
      c: "Welcome to Your bord lateral",
      nom,
      prenom,
      login,
      email,
      role,
      password,
      noma,
      siege,
      

    };
  },
  methods: {
    enregistrer(){
      
       const article = { nom: this.nom, prenom:this.prenom , login: this.login, email:this.email , role: this.role, mdp:this.password, nomAgence: this.noma, siege: this.siege};
  axios.post("http://localhost:5000/api/user/registerAgence", article)
    .then(response => {console.log(response);

    })
    }
  }
};
</script>