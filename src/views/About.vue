<template>
  <v-container class="fill-height" fluid>
    <div class="about">
      <h1>This is an about page</h1>

      <!-- ローカルステート管理 -->
      <div class="">
        <p class="name">local state: {{ localState }}</p>
        <input class="input" v-model="localState" placeholder="let's input" />
      </div>
      <v-divider></v-divider>

      <!-- vuex管理 -->
      <div class="">
        <p class="name">vuex state: {{ name }}</p>
        <v-form>
          <!-- inputとかに登録する関数はアローでラップするいつものテクニック -->
          <input
            class="input"
            :value="name"
            placeholder="enter your name"
            @input="e => setName(e.target.value)"
          />
          <!-- v-text-fieldは@inputでvalueを渡す -->
          <v-text-field label="Vuetify input" :value="name" @input="commitSetName" />
          <p v-if="this.hasValue">空です</p>
          <p v-else>入力されてる</p>
        </v-form>
      </div>
      <v-divider></v-divider>
      <button type="button" @click="() => commitSleep(1000)">スリープ</button>

      <!-- <router-link to="/Home">Go to home page</router-link> -->
      <router-link to="/">Go to top page</router-link>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  strict: process.env.NODE_ENV !== "production",
  name: "nickname",
  data: () => {
    return {
      localState: ""
    };
  },
  computed: {
    ...mapState({
      name: state => state.userInput.name
    }),
    ...mapGetters({ hasValue: "userInput/hasValue" })
  },
  methods: {
    ...mapMutations({ setName: "userInput/setName", asyncSleep: "userInput/asyncSleep" }),
    ...mapActions({ asyncSleep: "userInput/asyncSleep" }),
    commitSetName(input) {
      // this.$store.commit("setName", { input });
      this.setName({ input });
    },
    commitSleep(time) {
      // this.$store.commit("setName", { input });
      this.asyncSleep({ time });
    }
  }
};
</script>
