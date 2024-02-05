<template>
  <div>
    <QuestionItem
      v-for="question in testDataStore.testData"
      :key="question._id"
      :question="question"
      @answerSelected="answerSelected({ selectedAnswerId: $event, question: question })"
    />
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useTestDataStore } from '@/stores/testData'
import QuestionItem from './QuestionItem.vue'

export default {
  components: { QuestionItem },

  setup() {
    const testDataStore = useTestDataStore()
    const selectedAnswers = ref({})
    let correctAnswersCount = ref(0)

    onMounted(async () => {
      await testDataStore.loadTestData()
    })

    const updateSelectedAnswers = (selectedAnswerId, question) => {
      selectedAnswers.value[question._id] = selectedAnswerId
      console.log(selectedAnswers.value)
    }

    const handleSubmit = () => {
      correctAnswersCount.value = testDataStore.testData.reduce((count, question) => {
        console.log(testDataStore.testData)
        const selectedAnswerId = selectedAnswers.value[question._id]
        console.log(selectedAnswerId, question.validAnswerId)
        return count + (selectedAnswerId === question.validAnswerId ? 1 : 0)
      }, 0)

      const percentage = (correctAnswersCount.value / testDataStore.testData.length) * 100
      console.log(`Your score: ${percentage}%`)
    }

    const answerSelected = ({ selectedAnswerId, question }) => {
      updateSelectedAnswers(selectedAnswerId, question)
    }

    return {
      testDataStore,
      selectedAnswers,
      updateSelectedAnswers,
      handleSubmit,
      answerSelected
    }
  }
}
</script>

<style scoped></style>
