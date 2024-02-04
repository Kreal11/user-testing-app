<template>
  <div>
    <QuestionItem
      v-for="question in testDataStore.testData"
      :key="question._id"
      :question="question"
    />
  </div>
</template>
<script>
import { onMounted } from 'vue'
import { useTestDataStore } from '@/stores/testData'
import QuestionItem from './QuestionItem.vue'

export default {
  components: { QuestionItem },

  setup() {
    const testDataStore = useTestDataStore()

    onMounted(() => {
      testDataStore.loadTestData()
    })

    return {
      testDataStore
    }
  }
}
</script>
<style scoped></style>
