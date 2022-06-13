<script>
export default {
  data() {
    return {
      currentTime: null
    }
  },
  mounted() {
    setInterval(this.countdown, 1000);
    this.countdown();
  },
  methods: {
    countdown () {
      this.currentTime = new Date();
    }
  }
}
</script>

<template>
  <p>{{ currentTime }}</p>
</template>
