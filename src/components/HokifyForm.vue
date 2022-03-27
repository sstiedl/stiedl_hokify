<template>
  <transition name="toast">
    <Toast v-if="showToast" />
  </transition>

  <form @submit.prevent="handleSubmit" class="border-l-8 border-l-teal-500 dark:border-l-sky-900">
    <div class="form-group">
      <input
        type="text"
        required
        v-model="fName"
        placeholder="Vorname"
        class="
          placeholder:text-stone-400
          dark:bg-neutral-700 dark:text-stone-200
        "
      />
      <input
        type="text"
        required
        v-model="lName"
        placeholder="Nachname"
        class="
          placeholder:text-stone-400
          dark:bg-neutral-700 dark:text-stone-200
        "
      />
    </div>
    <div class="form-group">
      <input
        type="email"
        required
        v-model="email"
        placeholder="example@mail.com"
        class="
          placeholder:text-stone-400
          dark:bg-neutral-700 dark:text-stone-200
        "
      />
    </div>

    <button class="bg-sky-600 text-white dark:bg-sky-900 dark:text-stone-200">
      Senden
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Toast from "../components/ToastComp.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { Toast },
  setup() {
    let fName = ref<string>("");
    let lName = ref<string>("");
    let email = ref<string>("");

    const store = useStore();
    const router = useRouter();

    let showToast = ref<boolean>(false);

    const handleSubmit = () => {
      /*  */
      store.dispatch("addUser", {
        fName: fName.value,
        lName: lName.value,
        email: email.value,
      });
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
        router.push("/user");
      }, 3000);
    };

    return { fName, lName, email, showToast, handleSubmit };
  },
});
</script>

<style scoped>
form {
  margin: 10vh auto;
  padding: 2vh;
  width: 40vw;
  border-radius: 5px;
  box-shadow: 4px 6px 8px rgba(1, 0, 0, 0.3);
}
.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vh;
  margin-bottom: 2vh;
}

.form-group input {
  padding-left: 1vh;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
  border: solid grey 1px;
  border-radius: 3px;
}

button {
  display: flex;
  padding: 10px 30px;
  border: none;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: bold;
}

/*transitions*/
.toast-enter-from {
  opacity: 0;
  transform: translatex(100%);
}

.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.toast-enter-active {
  transition: all 1s ease;
}

.toast-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-active {
  transition: all 1s ease;
}

@media (max-width: 1439px) {
  form{
    width: 70%;
  }
}
  @media (max-width: 520px) {
  form{
    width: 90%;
  }
  .form-group {
  display: grid;
  grid-template-columns: 1fr;
  }
}
</style>
