<script setup>
const countdown = ref(-1)
let timer = null

const event = useRequestEvent();
setResponseStatus(event, 404);

onMounted(() => {
  autoRedirect()
})
onUnmounted(() => {
  clearIntervalFn()
})

definePageMeta({
  layout: 'front-layout'
})

function autoRedirect() {
  const autoRedirectSec = 5
  countdown.value = autoRedirectSec
  const startTime = Date.now()

  timer = setInterval(() => {
    const now = Date.now()
    const elapsedTime = ((now - startTime) / 1000).toFixed(0)
    countdown.value = autoRedirectSec - elapsedTime

    if (countdown.value <= 0) {
      clearIntervalFn()
      setTimeout(async () => await navigateTo('/'), 1000);
    }
  }, 1000);
}
function clearIntervalFn() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

</script>

<template>
  <div class="error-container">
    <div class="main">
      <h1>404 Not Found!!</h1>
      <h2>歐買尬！這裡什麼都沒有 😨😨😨</h2>

      <p>
        <template v-if="countdown > 0">
          返回首頁剩餘時間：<strong>{{ countdown }}</strong> 秒
        </template>
        <template v-else-if="countdown !== -1">
          準備起飛！
        </template>
      </p>
    </div>
  </div>
</template>

<style lang='scss' scope>
.error-container {
  --header-height: 120px;
  --footer-height: 120px;
  height: calc(100vh - var(--header-height) - var(--footer-height));
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - var(--footer-height) / 2));
  text-align: center;

  h1 {
    font-size: 80px;
    font-weight: 900;
    margin-bottom: 50px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 50px;
  }

  &>p {
    font-size: 20px;
    line-height: 40px;

    & strong {
      font-size: 40px;
      font-weight: 700;
    }
  }
}
</style>
