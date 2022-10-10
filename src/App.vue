<template>
  <main class="wrapper main">
    <h1 class="title">Drag and Drop list</h1>
    <TransitionGroup tag="ul" class="container" name="list">
      <List v-for="(elem, i) in list" :key="elem.id" :items="elem" :index="i" />
    </TransitionGroup>
    <Button :classes="'main'" @click="addList"/>
  </main>
  <footer></footer>

</template>

<script>
import List from "./components/List.vue";
import Button from "./components/Button.vue";
import { mapActions } from "vuex";

export default {
  data(){
    return{
      count: 1,
    }
  },
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
  methods: {
    ...mapActions(["change"]),
    addList() {
      this.change({
        arr: { tasks: [{}], id: `fd${++this.count}` },
        i: this.list.length,
      });
    },
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

