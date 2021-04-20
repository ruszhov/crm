<template>
  <section>
    <h1>User {{$route.params.id}}</h1>
  </section>
</template>

<script>
export default {
  name: '_id',
  validate({params}) {
    return /^\d+$/.test(params.id);
  }
};
</script>

<style scoped>

</style>
