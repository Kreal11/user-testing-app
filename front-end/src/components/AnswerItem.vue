<template>
  <div>
    <input type="radio" :value="answer.answerId" :checked="isSelected" @change="handleChange" />
    {{ answer.text }}
  </div>
</template>
<script>
export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped></style>
