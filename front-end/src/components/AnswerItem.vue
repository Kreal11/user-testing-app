<template>
  <label>
    <input
      type="radio"
      :value="answer.answerId"
      v-model="selectedAnswerId"
      @change="emitAnswerSelected"
    />
    {{ answer.text }}
  </label>
</template>
<script>
export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedAnswerId: null
    }
  },

  methods: {
    emitAnswerSelected() {
      this.$emit('answerSelected', this.selectedAnswerId)
    }
  }
}
</script>
<style scoped></style>
