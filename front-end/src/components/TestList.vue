<template>
  <div>
    <h2>Hello, {{ userName }}</h2>
    <div v-if="tests.length > 0">
      <h3>Check your knowledge and pass the tests below!</h3>
      <div v-for="test in tests" :key="test._id">
        <TestListItem :title="test.title" :category="test.category" />
      </div>
    </div>
    <div v-else>
      <p>There are currently no tests available to take</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import TestListItem from './TestListItem.vue'

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
    this.fetchUserData()
    this.fetchUserTests()
  },
  methods: {
    fetchUserData() {
      const userData = JSON.parse(sessionStorage.getItem('userData'))
      const { name, email, _id } = userData.user
      console.log(_id)
      if (name && email) {
        this.userEmail = email
        this.userName = name
        this.userId = _id
      }
    },
    async fetchUserTests() {
      try {
        const response = await axios.get(
          `https://user-testing-app.onrender.com/api/auth/user/tests?id=${this.userId}`
        )
        console.log(response.data)
        this.tests = response.data
      } catch (error) {
        console.log('Failed to fetch user tests:', error)
      }
    }
  }
}
</script>
<style scoped></style>
