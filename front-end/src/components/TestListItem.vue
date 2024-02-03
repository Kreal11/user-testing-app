<template>
  <div class="test">
    <h4>{{ title }}</h4>
    <p>{{ category }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.test {
  color: white;
  border: 1px solid aqua;
  padding: 30px;
  border-radius: 5px;
  background-color: darkcyan;
}
</style>
