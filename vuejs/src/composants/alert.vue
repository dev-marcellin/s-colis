<template>
    <div class="col-8">
  <div class="card  h-100">
    <p class="text-center text-primary card-header">ALERT</p>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text text-center">{{alert}}  </p><br><br><br><br><br>
    </div>
  </div>
</div>

</template>

<script>
export default {
    data () {
    return {
      alert: "il n'ya pas d'alert pour le moment"
      
    } 
  }
}
</script>