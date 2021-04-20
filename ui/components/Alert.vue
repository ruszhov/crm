<template>
  <v-alert text type="error" class="error-alert" dismissible :value="alert">
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {type: String, required: false},
  },
  data(){
    return{
       alert: true,
    };
  },
  created(){
    setTimeout(()=>{
      this.alert=false;
    },3000);
  }
};
</script>

<style scoped>
  .top-alert {
    position: absolute;
  }
</style>
