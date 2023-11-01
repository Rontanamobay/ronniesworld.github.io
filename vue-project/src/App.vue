<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div name="wrapper" class=" w-screen h-screen bg-background-50">
    <h1 class=" font-heading text-4xl text-text-950 font-bold">hello gau</h1>
    <RouterView />  
  </div>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Song Myung:700|Noto Sans Nandinagari:400');

.font-body {
  font-family: 'Noto Sans Nandinagari', sans-serif;
}
.font-heading {
  font-family: 'Song Myung', sans-serif;
}
</style>
