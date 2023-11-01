<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div name="wrapper" class="fixed w-screen h-screen bg-background-50">
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
  </div>
  
</template>

<style scoped>

</style>
