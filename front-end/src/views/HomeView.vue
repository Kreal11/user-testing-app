<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<template>
  <WelcomePage />
</template>
<script>
import WelcomePage from '@/components/WelcomePage.vue'

export default { components: { WelcomePage } }
</script>
<style scoped></style>
