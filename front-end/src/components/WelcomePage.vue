<template>
  <div class="welcome-page-wrapper">
    <h1 class="main-header">Welcome on our User Assessment Application!</h1>

    <my-button @click="openLoginModal">Sign in</my-button>

    <login-modal v-if="showLoginModal" @close="closeLoginModal" @login-success="onLoginSuccess" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoginModal from '@/components/LoginModal.vue'

export default {
  components: {
    'login-modal': LoginModal
  },
  setup() {
    const showLoginModal = ref(false)
    const router = useRouter()

    const openLoginModal = () => {
      showLoginModal.value = true
    }

    const closeLoginModal = () => {
      showLoginModal.value = false
    }

    const onLoginSuccess = () => {
      router.push('/tests')
      console.log('Login success!')
    }

    return { showLoginModal, openLoginModal, closeLoginModal, onLoginSuccess }
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
