<template>
  <v-app id="akv-crm">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      dark
      :src="bg"
    >
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            ref="listGroup"
            :class="{
              'active-item': item.route === activeRoute,
            }"
            @click="listItemClick(item)"
          >
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.label" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dark :src="bg">
      <v-toolbar-title style="width: 300px" class="ml-0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <span class="hidden-sm-and-down mx-2">Akvarium CRM</span>
      </v-toolbar-title>

      <v-spacer>{{ date | formatDate('datetime') }}</v-spacer>

      <span class="mx-2"> username </span>
      <v-btn icon @click.prevent="logout">
        <v-icon>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import bg from '~/assets/bg.png';

export default {
  name: 'App',
  data() {
    return {
      bg,
      date: new Date(),
      interval: null,
      selectedItem: null,
      drawer: null,
      activeRoute: null,
      items: [
        {
          label: 'Клієнти',
          icon: 'mdi-account-group',
          route: '/',
        },
        {
          label: 'Завдання',
          icon: 'mdi-clock-outline',
          route: '/tasks',
        },
        {
          label: 'Користувачі',
          icon: 'mdi-account-box',
          route: '/users',
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.activeRoute = to.name;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date;
    }, 1000);
    this.activeRoute = this.$route.path;
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    listItemClick(item) {
      if (item.route) {
        this.$router.push(item.route);
      }
    },
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login?message=logout');
    },
  },
};
</script>

<style lang="scss">
.v-navigation-drawer {
  .v-list {
    .v-item--active {
      background: #142430;
    }
    .theme--dark {
      .v-icon,
      .v-list-item__title {
        color: #ffffff;
      }
    }
  }
}
.v-item--active {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3 !important;
    background-color: #fafafa !important;
  }
}
</style>
