<script setup>
definePageMeta({
  layout: 'user-layout',
  middleware: async (to, from) => {
    const userId = '006208' // 目前 userId 還不是從伺服器取得，先給個暫定值

    const shouldRedirectToPage = to.fullPath === '/user/' ||
      to.fullPath === '/user' ||
      to.fullPath === `/user/${userId}` ||
      to.fullPath === `/user/${userId}/`

    if (shouldRedirectToPage) {
      setTimeout(async () => {
        await navigateTo({
          path: `/user/${userId}/profile`
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
