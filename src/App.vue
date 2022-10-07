<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">


  <header class="wrapper"></header>
  <main class="wrapper">
    <TransitionGroup tag="ul" class="container" name="list">
      <List v-for="(elem, i) in list" :key="i" :items="elem" :index="i" />
    </TransitionGroup>
    <Button />
  </main>
  <footer></footer>
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
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
// .list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5 ease-in-out;
}

.list-enter-from,
.list-leave-to {
  transform: scale(0.7) translateY(-40%);
}

.list-leave-active {
  position: absolute;
}
</style>

