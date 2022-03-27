<template>
<div class="" :class=" isDark ? 'dark' : ''" >
  <div class="app dark:bg-neutral-800">
    <Navbar />
    <router-view />
  </div>
  
</div>
    
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Navbar from "./components/NavBar.vue";
import { useStore } from 'vuex'

export default defineComponent({
  components: { Navbar },
  setup() {
    const store = useStore()
    const isDark = computed(() => store.state.dark);

    return{ isDark }
  },
});
</script>

<style>
#app {
  top:0;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.app{
  min-height: 100vh;
}



</style>
