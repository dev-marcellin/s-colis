<template>
  

<div class="col">
    <div class="box2">
      <span class="border"></span>
      <div class="card border-success h-10 ">
          <p class="text-center text-warning">GAIN</p>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text text-center">{{gain}} FCFA</p>
          </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
    data () {
    return {
      gain: 0
      
    } 
  },
  mounted(){
    axios.get('http://localhost:5000/api/infos/').then(response =>{this.gain = response.data})
  }
}
  </script>

  <style>
.box2{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  height: 120px;
  border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.box2 .card {
  border: none;
  flex: 1 1 80%;
}

.box2 span {
  height: 100%;
  width: 10px;
  background-color: rgb(255, 141, 6);
}
</style>