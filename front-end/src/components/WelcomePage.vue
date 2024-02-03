<template>
  <div class="welcome-page">
    <h1 class="main-header">Welcome on our User Assessment Application!</h1>

    <button class="login-btn" @click="openLoginModal">Sign in</button>

    <login-modal v-if="showLoginModal" @close="closeLoginModal" @login-success="onLoginSuccess" />
  </div>
</template>
<script>
import LoginModal from '@/components/LoginModal.vue'
export default {
  data() {
    return {
      showLoginModal: false
    }
  },
  methods: {
    openLoginModal() {
      this.showLoginModal = true
    },
    closeLoginModal() {
      this.showLoginModal = false
    },
    onLoginSuccess() {}
  },
  components: {
    'login-modal': LoginModal
  }
}
</script>
<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-header {
  margin-bottom: 20px;
}

.login-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.6s;

  &:hover {
    background-color: aqua;
  }

  &:active {
    background-color: darkcyan;
  }
}
</style>
