<template>
  <div class="container">
    <div class="c-1">Helo</div>
    <div class="c-2">About us</div>
    <div class="c-3">Screeing</div>
  </div>
</template>

<script>
export default {
  name: "Test"
};
</script>

<style scoped>
.container {
  display: flex;
  border: 1px solid #333;
}

.c-1 {
  background: #333;
  flex: 1 1 200px;
}
.c-2 {
  background: red;
  flex: 1 1 20px;
}
.c-3 {
  background: yellow;
  flex: 10 1 200px;
}
</style>
