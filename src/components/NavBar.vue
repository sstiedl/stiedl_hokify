<template>
  <nav>
    <div class="bg-teal-500 dark:bg-gray-800">
      <div class="button-bg bg-teal-500 dark:bg-gray-800" @click="changeTheme">
      <button class="button-dark dark:text-stone-200">&#9681;</button>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, computed} from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
      const isDark = computed(() => store.state.dark);

  
    

    const changeTheme = () => {
      store.commit("setDark");
    };

    return { changeTheme, isDark};
  },
});
</script>
<style>
nav div{
  display:flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 7vh;
  margin-bottom: 3vh;
}



.button-light{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 5vh;
  height: 5vh;
  margin-top:1vh;
  font-size: 2rem;
  border: solid 2px;
  border-radius: 5px;
}

.button-dark{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 5vh;
  height: 5vh;
  margin-top:1vh;
  font-size: 2rem;
  border: solid 2px;
  border-radius: 5px;
}

span{
  font-size: 2rem;
}





</style>
