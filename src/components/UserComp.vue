<template>
  <div class="user" v-if="user">
    <div class="head bg-teal-500 dark:bg-gray-800 ">
      <h1>Mein Profil</h1>
      <div class="profile bg-red-400">U</div>
    </div>
    <div class="contact">
      <div>
        <h1 class=" dark:text-stone-200">KONTAKTDATEN</h1>
        <div class="personal-data  dark:text-stone-200">
          <p>Vorname: {{ user.fName }}</p>
          <p>Nachname: {{ user.lName }}</p>
          <p>E-mail-Adresse: {{ user.email }}</p>
        </div>
      </div>

      <div><button @click="handleDelete" class="text-teal-500 dark:text-teal-200">LÖSCHEN</button></div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed(() => store.state.user);

    const handleDelete = () =>{
        store.dispatch('deleteUser')
        router.push('/')
    }

    return { user, handleDelete };
  },
});
</script>

<style scoped>
.user {
  margin: 10vh auto;
  width: 50%;
  box-shadow: 4px 6px 8px rgba(1, 0, 0, 0.3);
  border-radius: 10px;
}

.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  justify-content: space-around;
  height: 8vh;
  align-items: center;
  color: white;
  border-radius: 10px 10px 0 0;
}

.head h1 {
  font-size: 2rem;
  font-weight: bold;
  padding-right: 3vh;
}

.head div {
  font-size: 2rem;
  font-weight: bold;
  border: solid 1px;
  border-radius: 50%;
  padding: 5px 17px;
}

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 2vh;
   padding-bottom: 2vh;;
   border-radius: 0 0 10px 10px;
}

.contact div h1 {
  text-decoration: underline;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: start;
 
}

.personal-data{
    text-align: start;
}

button{
    font-weight: bold;
}

@media (max-width: 1439px) {
  .user{
    width: 70%;
  }
}
  @media (max-width: 520px) {
  .user{
    width: 90%;
  }
  .contact {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2vh;
  }

  .profile{
    
    display: none;
  }
  .head{
    display: block;
    text-align: center;
  }
}
</style>
