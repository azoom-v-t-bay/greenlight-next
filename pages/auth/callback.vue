<template>
  <div class="relative h-full">
    <div class="absolute-center">Please wait ...</div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.fetchUser()

    this.$router.push('/')
  },
  methods: {
    async fetchUser() {
      try {
        await this.$auth.fetchUser()
      } catch {
        this.$auth.logout()

        this.$notify.error({
          title: 'Error',
          message: 'Cannot fetch user!',
          position: 'bottom-left',
        })
      }
    },
  },
}
</script>
