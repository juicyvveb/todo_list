<template>
  <div class="container-item">
    <Title class="title" :target="title" @changeName="changeListTitle"/>
    <Button :classes="'delete'" @click="deleteList()" />
    <draggable
      v-model="tasks"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      group="people"
      class="list-group"
    >
      <template #item="{ element }">
        <Item
          :index="tasks.indexOf(element)"
          :el="element"
          @edit="editName"
          @complete="complete"
          @del="delItem"
        />
      </template>

      <template #footer>
        <Button :classes="'inList'" @click="addItem()" />
      </template>
    </draggable>
  </div>
</template>

<script>
import Item from "./Item.vue";
import draggable from "vuedraggable";
import { mapActions } from "vuex";
import Button from "./Button.vue";
import Title from "./TitleForm.vue";

export default {
  props: ["index"],
  data() {
    return {};
  },
  components: {
    draggable,
    Item,
    Button,
    Title,
  },
  computed: {
    myArray: {
      get() {
        return this.$store.getters.list[this.index];
      },
    },
    tasks: {
      get() {
        return this.myArray.tasks;
      },
      set(arr) {
        const i = this.index;
        this.myArray.tasks = arr;
        this.change({ arr: this.myArray, i });
      },
    },
    title: {
      get() {
        return this.myArray.title || "default title";
      },
      set(val) {
        this.myArray.title = val;
        this.change({ arr: this.myArray, i: this.index });
      },
    },
  },
  methods: {
    ...mapActions(["change"]),
    addItem(val) {
      val = "your task";
      const i = this.index;
      this.$store.dispatch("add", { val, i });
    },
    delItem(el) {
      this.tasks.splice(this.tasks.indexOf(el), 1);
      this.tasks = [...this.tasks];
    },
    editName({ val, index }) {
      this.tasks[index].name = val;
      this.tasks = [...this.tasks];
    },
    complete({ val, index }) {
      this.tasks[index].done = val;
      this.tasks = [...this.tasks];
    },
    changeListTitle(val) {
      this.title = val;
    },
    deleteList() {
      this.$store.dispatch("deleteList", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.container-item {
  border: 1px solid black;
  border-radius: 5px;
  padding: 3%;
  margin-bottom: 5%;
  width: 45%;
  position: relative;
  &--title {
    input {
      background: 0;
      border: none;
      max-width: 100%;
      outline: none;
    }
  }
  .list-group {
    height: 100%;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
  transform: scale(0.7);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 5s ease-in-out;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>