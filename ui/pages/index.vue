<template>
  <v-container fluid fill-height class="main-container">
    <v-row align="center" justify="center">
      <h2>im here</h2>
      {{ clients }}
      <v-col class="col-12 d-flex justify-center" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  middleware: ['authenticated'],
  async asyncData({ $axios, params }) {
    try {
      let clients = await $axios.$get('/clients/');
      return { clients };
    } catch (e) {
      return { clients: [] };
    }
  },
  data() {
    return {
      clients: []
    };
  },
};
</script>

<style>
.main-container {
  background: #ccc;
}
</style>
