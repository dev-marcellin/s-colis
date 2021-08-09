<template>
    
  
  <div class="col">
    <div class="box">
      <span class="border"></span>
      <div class="card border-success h-10 ">
          <p class="text-center text-primary" @click="update">COLIS LIVRÉS</p>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text text-center">{{colislivre}}</p>
          </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
    data () {
    return {
      colislivre: ''
      
    } 
  },
  
  methods : {

        update(){
   
       axios.get('https://jsonplaceholder.typicode.com/comments').then(response => console.log(response) )
     //console.log(this.msg)
     
    }
  },
  mounted(){
    this.colislivre= 55;
  }
}
</script>


<style>
.box{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  height: 120px;
  border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.box .card {
  border: none;
  flex: 1 1 80%;
}

.box span {
  height: 100%;
  width: 10px;
  background-color: blue;
}
</style>