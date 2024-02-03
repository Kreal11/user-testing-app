<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2 class="modal-header">Log in to see which tests were prepared specially for you!</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
        <button class="close-btn" @click="closeModal">Close</button>
        <my-button type="submit">Submit</my-button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password
        })
        sessionStorage.setItem('userData', JSON.stringify(response.data))
        this.$emit('login-success')
        console.log('Login successful')
        this.closeModal()
      } catch (error) {
        console.error('Login failed:', error)
      }
    }
  }
}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* .modal-header {
  max-width: 300px;
} */

.close-btn {
  background-color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.6s;

  &:hover {
    background-color: lightcoral;
  }

  &:active {
    background-color: darkred;
  }
}
</style>
