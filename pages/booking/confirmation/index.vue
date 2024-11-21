<script setup>
definePageMeta({
  middleware (to, from) {
    const roomId = 'a'
    const shouldRedirectToPage = to.fullPath === '/booking/confirmation/' ||
      to.fullPath === '/booking/confirmation'

  if (shouldRedirectToPage) {
    setTimeout(async () => {
      await navigateTo({
        path: `/rooms/${roomId}/booking`
      })
    })
  }
  }
})
</script>

<template>
  <div></div>
</template>

<style lang='scss' scope></style>
