<template>
  <ul>
    <li v-for='user of users' :key='user.id'>
      <a href='#' @click.prevent='openUser(user)'>{{user.username}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'index',
  async asyncData({ $axios, params }) {
    try {
      let users = await $axios.$get('/users/');
      return { users };
    } catch (e) {
      return { users: [] };
    }
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user)
    }
  }
};
</script>

<style scoped>

</style>
