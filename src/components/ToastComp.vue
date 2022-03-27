<template>
  <div class="toast-wrapper">
    <div class="toast text-white bg-teal-500  dark:text-stone-200 dark:bg-gray-800">
      Hello at hokify
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style>
  .toast-wrapper {

    position: fixed;
    width: 100%;
    top: 9vh;
  }
  .toast {
    padding: 20px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 400px;
    margin: 0 auto;
  }
</style>
