<template>
  <div>
    <h3>{{ question.title }}</h3>
    <p>{{ question.category }}</p>
    <p>{{ question.text }}</p>
    <div>
      <AnswerItem v-for="answer in question.answers" :key="answer._id" :answer="answer" />
    </div>
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
  }
}
</script>
<style scoped></style>
