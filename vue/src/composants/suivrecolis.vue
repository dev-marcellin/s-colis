<template>
  <div class="container">
    <navbar></navbar>
    <p class="text-center fs-1 fw-bold">
      BIENVENU DANS LE SERVICE <br />
      S-COLIS
    </p>
    <form class="d-flex">
      <input
        class="form-control me-2"
        v-model="codes"
        type="search"
        placeholder="Entrez votre code de suivi ici"
        aria-label="Search"
      />
      <input
        type="button"
        class="btn bg-warning"
        @click="update"
        value="Rechercher"
      />
    </form>

    <div class="btn-connexion text-center">
      <p class="text-success">{{ rendu }}</p>
      <br />
      OU<br />
     <router-link to="/connexion">  <button class="btn bg-warning btn-primary btn-lg" type="submit">
          Connectez Vous
        </button>
      </router-link>
       
      
    </div>
  </div>
</template>

<script>
import navbar from "../composants/navbar.vue";

export default {
  name: "app",


  data() {
    return {
      codes: "gar-dou-18",
      result: "",
      rendu: "",
    };
  },
  methods: {
    update() {
      // axios.get('http://localhost:5000/api/colis/historique').then(response => this.code =response)
      // console.log(this.code)

      const article = { code: this.codes };
      axios
        .post("http://localhost:5000/api/suivre", article)
        .then((response) => {
          console.log(response);

          if (!response.data.etat) return (this.rendu = response.data);

          console.log("test rendu :" + this.rendu);
          
          if (response.data.etat.etat.length === 1) {
            this.rendu =
              "votre " +
              response.data.suivi.description +
              " est enregistré mais nest pas encore en route";
          } else if (response.data.etat.etat.length === 2) {
            this.rendu =
              "votre " + response.data.suivi.description + " est  en route";
          } else if (response.data.etat.etat.length === 3) {
            this.rendu =
              "votre " +
              response.data.suivi.description +
              " est  deja arrivé veuillez passer le recupérer";
          }
          else if (response.data.etat.etat.length === 4) {
            this.rendu =
              "votre " +
              response.data.suivi.description +
              " a deja été recupéré";
          }
        });
      //this.rendu = this.result.data;
      /* if(this.result.data.etat.etat.length==0){
     this.rendu = 'votre '+this.result.data.description+' est enregistré mais nest pas encore en route' ;
    }else if(this.result.data.etat.etat.length==1){
      this.rendu = 'votre '+this.result.data.description+' est  en route' ;
    }*/

      //console.log(this.result);
    },
  },
};
</script>