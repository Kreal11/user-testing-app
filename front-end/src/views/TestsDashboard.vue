<template>
  <div>
    <NavigationBar />
    <TestList />
  </div>
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue'
import TestList from '@/components/TestList.vue'

export default { components: { NavigationBar, TestList } }
</script>
<style scoped></style>
