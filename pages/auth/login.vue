<template>
  <div>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  methods: {
    onLogin() {
      this.$auth.loginWith('google', { params: { prompt: 'select_account' } })
    },
  },
})
</script>

<style lang="scss" scoped></style>
