<template>
  <v-snackbar :value="show" :timeout="timeout" top>
    {{ message}}
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    message: {type: String, required: false},
    show: {type: Boolean, required: true},
  },
  data() {
    return {
      timeout: 2000,
    };
  },
};
</script>
