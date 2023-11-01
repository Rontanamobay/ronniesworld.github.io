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
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,700;0,6..12,800;1,6..12,300;1,6..12,400;1,6..12,700;1,6..12,800&display=swap');

.font-heading {
  font-family: 'Nunito Sans', sans-serif;
}
.font-body {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
