export default defineNuxtRouteMiddleware((to) => {
  const title = to.meta?.title ? `${to.meta.title} - 享樂酒店｜Enjoyment Luxury Hotel` : `享樂酒店｜Enjoyment Luxury Hotel`;
  useHead({ title });
});
