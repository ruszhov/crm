<template>
  <div class="empty-layout">
    <alert v-show="showError" :message="error"/>
    <nuxt />
  </div>
</template>

<script>
import isString from 'lodash/isString';
import Alert from '~/components/Alert';

export default {
  components: {
    Alert,
  },
  data() {
    return {
      showError: false,
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(value) {
      this.showError = isString(value);
    }
  }
};

</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
  .error-alert {
    position: absolute;
  }
}
</style>
