<template>
  <div>Callback</div>
</template>

<script>
export default {
  async mounted() {
    await this.$auth.fetchUser()

    this.$router.push('/')
  },
}
</script>

<style lang="scss" scoped></style>
