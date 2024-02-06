<template>
  <div class="test">
    <div>
      <h2 class="test-header">{{ testProps.title }}</h2>
      <p>{{ testProps.category }}</p>
      <p v-if="testProps.isEnabled">Available to take⌛</p>
      <p v-else class="test-status">
        Already done✔️ <span>Your result: {{ testProps.result }}% from 100%</span>
      </p>
    </div>
    <my-button :disabled="!testProps.isEnabled" @click="getTestQuestions">Start test</my-button>
  </div>
</template>
<script>
import { fetchTestQuestions } from '@/api/apiRequests'
import { useTestDataStore } from '@/stores/testData'
import { useRouter } from 'vue-router'

export default {
  props: {
    testProps: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const router = useRouter()
    const testDataStore = useTestDataStore()

    const getTestQuestions = async () => {
      try {
        const response = await fetchTestQuestions(props.testProps._id)
        testDataStore.setTestData(response.data)

        router.push(`/test/${response.data[0].testOwner}`)
      } catch (error) {
        console.log(error)
      }
    }

    return { getTestQuestions }
  }
}
</script>
<style scoped>
.test {
  width: 300px;
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

.test-status {
  display: flex;
  flex-direction: column;
}
</style>
