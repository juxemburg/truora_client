<template>
  <div
    class="grid-layout grid-layout--main 
        grid-layout--main-navbar grid-layout--no-sidebar"
  >
    <div class="grid-layout__navbar">
      <b-navbar type="dark" variant="primary">
        <b-navbar-brand href="#">
          Búsqueda de dominios
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <router-link class="nav-link" :to="{ name: 'serverList' }">
            Buscar dominios
          </router-link>
          <b-button
            class="ml-2"
            size="xs"
            variant="outline-light"
            type="submit"
            @click="logout()"
          >
            Cerrar sesión
            <font-awesome-icon icon="sign-out-alt" />
          </b-button>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="grid-layout__content">
      <b-container class="mt-4" fluid="md">
        <router-view></router-view>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'dashboard',
  methods: {
    ...mapActions(['logoutAction']),
    async logout() {
      await this.logoutAction();
      this.$router.push({ name: 'login' });
    },
  },
  computed: {},
});
</script>

<style lang="scss" scoped>
$default-layout-main-columns: 2fr 11fr !default;
$default-layout-main-rows: 1fr 14fr !default;

$mobile-layout-main-columns: 12fr !default;
$mobile-layout-main-rows: 1fr 9fr 1fr !default;
.grid-layout {
  &.grid-layout--main {
    display: grid;
    height: 100%;
    background-color: #f6f4fc;
    grid-template-columns: $default-layout-main-columns;
    grid-template-rows: $default-layout-main-rows;

    &.grid-layout--main-navbar {
      grid-template-areas:
        'navbar navbar'
        'sidebar content';

      &.grid-layout--no-sidebar {
        grid-template-areas:
          'navbar navbar'
          'content content';
      }
    }

    &.grid-layout--main-sidebar {
      grid-template-areas:
        'sidebar navbar'
        'sidebar content';

      &.grid-layout--no-navbar {
        grid-template-areas:
          'sidebar content'
          'sidebar content';
      }
    }

    .grid-layout__navbar {
      grid-area: navbar;
    }

    .grid-layout__sidebar {
      grid-area: sidebar;
    }

    .grid-layout__content {
      grid-area: content;
      overflow: auto;
      padding: 0 1rem;
      height: 100%;
    }
  }
}

// ********** Media queries **********
@media (max-width: 575.98px) {
  .grid-layout.grid-layout--main {
    grid-template-columns: $mobile-layout-main-columns;
    grid-template-rows: $mobile-layout-main-rows;

    grid-template-areas:
      'navbar'
      'content'
      'sidebar';

    & > .grid-layout__content {
      padding: 0 0.5rem;
    }

    &.grid-layout--main-navbar,
    &.grid-layout--main-navbar.grid-layout--no-sidebar {
      grid-template-areas:
        'navbar'
        'content'
        'content';
      &.grid-layout--mobile-navbar-bottom {
        grid-template-areas:
          'content'
          'content'
          'navbar';
      }
    }

    &.grid-layout--main-sidebar {
      grid-template-areas:
        'navbar'
        'content'
        'sidebar';

      &.grid-layout--no-navbar {
        grid-template-rows: 11fr 1fr;
        grid-template-areas:
          'content'
          'sidebar';
      }
    }
  }
}
</style>
