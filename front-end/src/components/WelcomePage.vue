<template>
  <div class="welcome-page">
    <h1>Welcome on our User Assessment Application</h1>

    <button @click="openLoginModal">Sign in</button>

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
<style scoped></style>
