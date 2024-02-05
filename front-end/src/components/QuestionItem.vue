<template>
  <div>
    <h3>{{ question.title }}</h3>
    <p>{{ question.category }}</p>
    <p>{{ question.text }}</p>
    <form>
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
<style scoped></style>
