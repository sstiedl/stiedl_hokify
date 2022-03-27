import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    dark: false
    

  },
  getters: {
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setDark(state){
      state.dark = !state.dark
    }
    
   
  },
  actions: {
    addUser(context, {fName, lName, email}){
      const data ={
        fName: fName,
        lName: lName,
        email: email
      }

      context.commit("setUser", data);
    },

    deleteUser(context){
      context.commit("setUser", null)
    },

  },
  modules: {
  },

  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
