<template>
  <div class="col">
    <div class="box1">
      <span class="border"></span>
      <div class="card border-success h-10 ">
          <p class="text-center text-success">COLIS ARRIVÉS</p>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text text-center">{{colar}} </p>
          </div>
      </div>
    </div>
  </div>

</template> 

<script>
export default {
    data () {
    return {
      colar: 302
      
      
      
    } 
  }
}
</script>

<style>
.box1{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  height: 120px;
  border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.box1 .card {
  border: none;
  flex: 1 1 80%;
}

.box1 span {
  height: 100%;
  width: 10px;
  background-color: green;
}
</style>