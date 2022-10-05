<template>
  <header class="wrapper"></header>
  <main class="wrapper">
    <div class="container">
      <List v-for="(elem, i) in list" :key="i" :items="elem" :index="i" />
    </div>
    <Button />
  </main>
  <footer>
    {{value}}
    <button @click="toLocal()">change value</button>
  </footer>
</template>

<script>
import List from "./components/List.vue";
import Button from "./components/ButtonAdd.vue";

export default {
  name: "App",
  components: {
    List,
    Button,
  },
  computed: {
    list() {
      return this.$store.getters.list;
    },
    value(){
      return this.$store.getters.value;
    }
  },
  methods: {
    toLocal(){
      this.$store.dispatch('saveToLs') 
      
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  text-align: center;
  .container {
    @include flexCenter;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>

