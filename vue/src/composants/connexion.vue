<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
     
      <main class="col">
        <navbar></navbar>
        <div class="bord">
          <h2>Connectez vous à votre compte</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <br />
          <form >
            
            <div class=" row row-cols-1 row-cols-md-1 g-4">

            <div class="mb-3 ">
              
              login:<input
                type="text"
                class="form-control" v-model="login"
              />
              
            </div>
            <div class="mb-3">
              
              mot de passe:<input
                type="password"
                class="form-control" v-model="password"
              />
            </div>
            
          
            
            
            
            </div>
              
           

            
            <input type="button"  class="btn btn-primary" @click="enregistrer" value="enregistrer">
           
          </form>

       <!--   <gain></gain>

          <evolutiongain></evolutiongain>

          <test></test>

          <alert></alert> -->
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
  
  components: { navbar },
  data() {
    return {
      c: "Welcome to Your bord lateral",
      login,
      password,
      role
      
      

    };
  },
  methods: {
    enregistrer(){
      
       const login = {login: this.login, mdp:this.password };
  axios.post("http://localhost:5000/api/user/login", login)
    .then(response => {console.log(response);
      this.role= response.data.status;

    this.$emit("submit", {
        login: this.login,
        pwd: this.password,
        role: this.role
      });

    })
    }
  }
};
</script>