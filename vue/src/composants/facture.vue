<template>

<div class="container">
<br><br>
   <input type="text" v-model="message">
t {{message}}
code : {{code}}
    <!--  <vue-qrcode :value="message" /><br> <br>

  <input type="button"  class="btn btn-primary" @click="enregistrer" value="enregistrer"> -->

  </div>

</template>

<script>
//import VueQrcode from 'vue-qrcode';


export default{
    
    components: {},

    data() {
    return {
        message: ''
    }
    },
    props: {
        code: String,
        description: String
    },
    
    }
    
   


 
</script>