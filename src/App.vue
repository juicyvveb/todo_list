<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">


  <header class="wrapper"></header>
  <main class="wrapper">
    <div class="container">
      <List v-for="(elem, i) in list" :key="i" :items="elem" :index="i" />
    </div>
    <Button />
  </main>
  <footer>
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
  },
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

