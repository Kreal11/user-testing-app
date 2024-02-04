<template>
  <div class="welcome-page-wrapper">
    <h1 class="main-header">Welcome on our User Assessment Application!</h1>

    <my-button @click="openLoginModal">Sign in</my-button>

    <login-modal v-if="showLoginModal" @close="closeLoginModal" @login-success="onLoginSuccess" />
  </div>
</template>
<script>
import LoginModal from '@/components/LoginModal.vue'
export default {
  components: {
    'login-modal': LoginModal
  },
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
    onLoginSuccess() {
      this.$router.push('/tests')
    }
  }
}
</script>
<style scoped>
.welcome-page-wrapper {
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-header {
  margin-bottom: 20px;
}
</style>
