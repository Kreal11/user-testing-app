<template>
  <div class="test">
    <div>
      <h2 class="test-header">{{ testProps.title }}</h2>
      <p>{{ testProps.category }}</p>
      <p v-if="testProps.isEnabled">Available to take⌛</p>
      <p v-else>Already done✔️</p>
    </div>
    <my-button :disabled="enabled" @click="getTestQuestions">Start test</my-button>
  </div>
</template>
<script>
import { fetchTestQuestions } from '@/api/apiRequests'
import { ref } from 'vue'
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
    const enabled = ref(!testDataStore.isEnabled)

    const getTestQuestions = async () => {
      try {
        const response = await fetchTestQuestions(props.testProps._id)
        testDataStore.setTestData(response.data)
        console.log(response.data)

        router.push(`/test/${response.data[0].testOwner}`)
      } catch (error) {
        console.log(error)
      }
    }

    return { enabled, getTestQuestions }
  }
}
</script>
<style scoped>
.test {
  width: 250px;
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
</style>
