<script>
import Timer from "./Timer.vue"

export default {
  components: {
    Timer
  },
  data() {
    return {
      message: 'Hello World!'
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <Timer />
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>