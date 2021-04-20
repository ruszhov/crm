<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> На головну </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Сторінку не знайдено',
      otherError: 'Помилка',
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped lang="scss">
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;

    h1 {
      color: rgb(145, 6, 6);
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
