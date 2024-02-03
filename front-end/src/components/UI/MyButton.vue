<template>
  <button class="btn">
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
  transition: background-color 0.6s;

  &:hover {
    background-color: aqua;
  }

  &:active {
    background-color: darkcyan;
  }
}
</style>
