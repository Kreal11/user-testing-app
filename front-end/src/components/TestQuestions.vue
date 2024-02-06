<template>
  <div @click="routeBack" class="questions-wrapper">
    <my-button class="test-back-btn">Back</my-button>
    <QuestionItem
      v-for="question in testDataStore.testData"
      :key="question._id"
      :question="question"
      @answerSelected="answerSelected({ selectedAnswerId: $event, question: question })"
    />
    <my-button @click="handleSubmit">Submit</my-button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useTestDataStore } from '@/stores/testData'
import QuestionItem from './QuestionItem.vue'
import { useRouter } from 'vue-router'
import { fetchUpdatedTests } from '@/api/apiRequests'

export default {
  components: { QuestionItem },

  setup() {
    const router = useRouter()
    const testDataStore = useTestDataStore()
    const selectedAnswers = ref({})
    let correctAnswersCount = ref(0)

    onMounted(async () => {
      await testDataStore.loadTestData()
    })

    const updateSelectedAnswers = (selectedAnswerId, question) => {
      selectedAnswers.value[question._id] = selectedAnswerId
    }

    const updateTests = async (result) => {
      const testId = router.currentRoute.value.params.id
      try {
        await fetchUpdatedTests(testId, result)
      } catch (error) {
        console.log(error)
      }
    }

    const handleSubmit = async () => {
      correctAnswersCount.value = testDataStore.testData.reduce((count, question) => {
        const selectedAnswerId = selectedAnswers.value[question._id]
        return count + (selectedAnswerId === question.validAnswerId ? 1 : 0)
      }, 0)

      const result = (correctAnswersCount.value / testDataStore.testData.length) * 100
      console.log(`Your score: ${result}%`)

      await updateTests(result)

      router.push('/tests')
    }

    const answerSelected = ({ selectedAnswerId, question }) => {
      updateSelectedAnswers(selectedAnswerId, question)
    }

    const routeBack = () => {
      router.push('/tests')
    }

    return {
      routeBack,
      updateTests,
      testDataStore,
      selectedAnswers,
      updateSelectedAnswers,
      handleSubmit,
      answerSelected
    }
  }
}
</script>

<style scoped>
.questions-wrapper {
  margin-left: 30px;
}

.test-back-btn {
  margin-bottom: 20px;
}
</style>
