export default defineNuxtRouteMiddleware((to, from) => {
  const shouldRedirectToPage = to.fullPath === '/account/' ||
    to.fullPath === '/account'

  if (shouldRedirectToPage) {
    setTimeout(async () => {
      await navigateTo({
        path: '/account/login'
      })
    })
  }
})