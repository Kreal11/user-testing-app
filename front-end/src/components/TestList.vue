<template>
  <div class="test-page-wrapper">
    <h2>Hello, {{ userName }}!</h2>
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
import { fetchUserTests } from '@/api/apiRequests'

export default {
  components: { TestListItem },

  data() {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
      userId: '',
      tests: []
    }
  },
  mounted() {
    this.getUserData()
    this.getUserTests()
  },
  methods: {
    getUserData() {
      const userData = JSON.parse(sessionStorage.getItem('userData'))
      const { name, email, _id } = userData.user
      console.log(_id)
      if (name && email) {
        this.userEmail = email
        this.userName = name
        this.userId = _id
      }
    },
    async getUserTests() {
      try {
        const response = await fetchUserTests(this.userId)
        this.tests = response.data
      } catch (error) {
        console.log('Failed to fetch user tests:', error)
      }
    }
  }
}
</script>
<style scoped>
.test-page-wrapper {
  padding-left: 60px;
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
