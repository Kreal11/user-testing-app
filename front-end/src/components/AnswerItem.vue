<template>
  <label class="answer-label">
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
import { ref } from 'vue'

export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  },

  setup(props, { emit }) {
    const selectedAnswerId = ref(null)

    const emitAnswerSelected = () => {
      emit('answerSelected', selectedAnswerId.value)
    }

    return {
      selectedAnswerId,
      emitAnswerSelected
    }
  }
}
</script>

<style scoped>
.answer-label {
  cursor: pointer;
}
</style>
