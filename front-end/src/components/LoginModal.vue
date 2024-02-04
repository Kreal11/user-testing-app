<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2 class="modal-header">Log in to see which tests were prepared specially for you!</h2>
      <form @submit.prevent="login" class="modal-form">
        <div class="modal-area-wrapper">
          <label for="email" class="modal-label">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="modal-area-wrapper">
          <label for="password" class="modal-label">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="modal-btns-wrapper">
          <my-button class="close-btn" @click="closeModal">Close</my-button>
          <my-button type="submit">Submit</my-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { loginRequest } from '@/api/apiRequests'

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
        const response = await loginRequest(this.email, this.password)
        sessionStorage.setItem('userData', JSON.stringify(response))

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

.modal-header {
  font-size: 20px;
  margin-bottom: 10px;
}

.modal-form {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.modal-area-wrapper {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-label {
  align-self: flex-start;
}

input {
  min-width: 100%;
}

.modal-btns-wrapper {
  min-width: 100%;
  display: flex;
  justify-content: space-between;
}

.close-btn {
  &:hover {
    background-color: lightcoral;
  }

  &:active {
    background-color: darkred;
  }
}
</style>
