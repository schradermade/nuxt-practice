<script setup>
  const { $sayHello } = useNuxtApp()
  $sayHello("Nathan Schrader")
</script>

<template>
  <div class="Main">
    <h1>Hello Nuxt 3</h1>
    <img src='/orange1.jpeg' alt='orange 1!' />
    <IconsBell />
    <!-- <img src='@/assets/orange2.jpeg' alt='orange 12!' /> -->

  </div>
</template>