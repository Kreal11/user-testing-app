<template>
  <div class="question-wrapper">
    <p class="question-text">{{ question.text }}</p>
    <form class="answers-wrapper">
      <AnswerItem
        v-for="answer in question.answers"
        :key="answer._id"
        :answer="answer"
        @answerSelected="$emit('answerSelected', answer.answerId, $event)"
      />
    </form>
  </div>
</template>
<script>
import AnswerItem from './AnswerItem.vue'

export default {
  components: { AnswerItem },

  props: {
    question: {
      type: Object,
      required: true
    }
  },

  methods: {
    emit(event, data) {
      this.$emit(event, data)
    }
  }
}
</script>
<style scoped>
.question-wrapper {
  margin-bottom: 20px;
}
.answers-wrapper {
  display: flex;
  gap: 15px;
}

.question-text {
  margin-bottom: 5px;
}
</style>
