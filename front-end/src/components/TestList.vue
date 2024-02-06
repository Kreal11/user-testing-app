<template>
  <div class="test-page-wrapper">
    <my-button v-if="userName" @click="logout" class="logout-btn">Logout</my-button>
    <h2 v-if="userName">Hello, {{ userName }}!</h2>
    <h3 class="warning-header">Check your knowledge and take the tests below!</h3>
    <div v-if="tests.length" class="test-content-wrapper">
      <h4>Please note that once you complete the test, you will not be able to take it again⚠️</h4>
      <div v-for="test in tests" :key="test._id">
        <TestListItem :testProps="test" />
      </div>
    </div>
    <div v-else>
      <p>There are currently no tests available to take</p>
    </div>
  </div>
</template>
<script>
import TestListItem from './TestListItem.vue'
import { fetchUserTests, logoutRequest } from '@/api/apiRequests'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
  components: { TestListItem },

  setup() {
    const router = useRouter()

    const userName = ref('')
    const tests = ref([])

    const getUserTests = async () => {
      try {
        const response = await fetchUserTests()
        tests.value = response.data
        userName.value = response.name
      } catch (error) {
        console.log('Failed to fetch user tests:', error)
      }
    }

    const logout = async () => {
      try {
        await logoutRequest()
        router.push('/')
      } catch (error) {
        console.log('Failed to logout', error)
      }
    }

    onMounted(() => {
      getUserTests()
    })

    return { userName, tests, logout }
  }
}
</script>
<style scoped>
.test-page-wrapper {
  padding-left: 60px;
}

.logout-btn {
  &:hover {
    background-color: lightcoral;
  }

  &:active {
    background-color: darkred;
  }

  margin-bottom: 20px;
}

.warning-header {
  margin-bottom: 20px;
}

.test-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
</style>
