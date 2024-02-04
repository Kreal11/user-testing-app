<template>
  <div class="test">
    <div>
      <h2 class="test-header">{{ testProps.title }}</h2>
      <p>{{ testProps.category }}</p>
      <p v-if="testProps.isEnabled">Available to take⌛</p>
      <p v-else>Already done✔️</p>
    </div>
    <my-button :disabled="!testProps.isEnabled">Start test</my-button>
  </div>
</template>
<script>
export default {
  props: {
    testProps: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.test {
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border: 1px solid lightblue;
  padding: 16px;
  border-radius: 5px;
  background-color: darkslateblue;
}

.test-header {
  text-decoration: underline;
}
</style>
