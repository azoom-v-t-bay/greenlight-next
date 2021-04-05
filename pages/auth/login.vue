<template>
  <div class="page__auth-login">
    <div class="absolute-center text-center">
      <Logo class="logo" />

      <button class="btn-login" @click="onLogin">Sign in with Google</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Logo from 'images/greenlight-logo.svg?inline'

export default defineComponent({
  components: { Logo },
  methods: {
    onLogin() {
      this.$auth.loginWith('google')
    },
  },
})
</script>

<style scoped>
.page__auth-login {
  @apply relative h-full;
}
.logo {
  width: 300px;
  height: 45px;

  @apply sm:w-[400px] sm:h-[60px];
}
.btn-login {
  @apply mt-4;
  @apply px-8 py-2 shadow rounded-full;
}
</style>
