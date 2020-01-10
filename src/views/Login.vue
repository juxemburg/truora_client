<template>
  <div class="login-dashboard">
    <div class="login-dashboard__content">
      <div class="card">
        <div class="card-body">
          <LoginForm />
        </div>
      </div>
    </div>
    <div class="login-dashboard__image">
      <img alt="Login page banner image" src="../assets/login-banner.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

export default Vue.extend({
  name: 'Login',
  components: {
    LoginForm,
  },
});
</script>

<style lang="scss" scoped>
.login-dashboard {
  height: 100%;
  display: grid;

  grid-template-areas: 'content image';
  grid-template-rows: 1fr;
  grid-template-columns: 6fr 4fr;

  & > {
    .login-dashboard__content,
    .login-dashboard__image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .login-dashboard__content {
      grid-area: content;
      background-color: #f6f4fc;
      padding: 1rem;
      & > .card {
        min-width: 80%;
      }
    }

    .login-dashboard__image {
      grid-area: image;
      & > img {
        width: 90%;
      }
    }
  }
}

@media (max-width: 575.98px) {
  .login-dashboard {
    grid-template-areas:
      'image'
      'content';
    grid-template-rows: 3fr 7fr;
    grid-template-columns: 1fr;

    & > {
      .login-dashboard__image {
        & > img {
          width: 50%;
        }
      }
      .login-dashboard__content {
        & > .card {
          min-width: 100%;
        }
      }
    }
  }
}
</style>
