<template>
  <div class="login-page">
    <h2>Log in to see which tests were prepared specially for you!</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Sign in</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('Login successful')
    }
  }
}
</script>
<style></style>
