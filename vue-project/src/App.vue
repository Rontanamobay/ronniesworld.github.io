<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<<<<<<< Updated upstream
  <div name="wrapper" class=" w-screen h-screen bg-background-50">
    <h1 class=" font-heading text-4xl text-text-950 font-bold">hello gau</h1>
    <RouterView />  
=======
  <div name="wrapper" class="fixed w-screen h-screen bg-background-50 overflow-y-scroll">
    <header name="header" class="font-body text-base flex fixed w-screen border-b border-b-text-900">
      <h1 class="my-4 ml-8 text-text-950">ronnies-world.net</h1>
      <nav class="ml-auto mr-8 my-auto">
        <ul class=" list-none flex">
          <li class="pr-6">Home</li>
          <li class="pr-6">Blog</li>
          <li class="">Contact</li>
        </ul>
      </nav>
    </header>
    <RouterView class=" mt-20" />  
>>>>>>> Stashed changes
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
