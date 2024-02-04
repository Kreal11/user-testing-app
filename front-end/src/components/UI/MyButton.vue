<template>
  <button class="btn" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style scoped>
.btn {
  background-color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.4s;
}

.btn:hover:not(:disabled) {
  background-color: aqua;
}

.btn:active:not(:disabled) {
  background-color: darkcyan;
}

.btn:disabled {
  background-color: gray;
  cursor: not-allowed;
  pointer-events: none;
}

.btn:disabled:hover,
.btn:disabled:active {
  background-color: gray;
}
</style>
