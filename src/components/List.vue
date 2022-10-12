<template>
  <div class="container-item">
    <Button :classes="'delete'" @click="deleteList()" />
    <Title class="title" :target="title" @changeName="changeListTitle" />
    <h4 class="length">всего: {{ tasks.length }}</h4>
    <draggable
      v-model="tasks"
      @start="drag = true"
      @end="drag = false"
      :item-key="Date.now().toString()"
      group="people"
      :class="{ 'list-group': true, 'list-group__district': tasks.length > 3 }"
    >
      <template #item="{ element }">
        <Item
          :index="tasks.indexOf(element)"
          :el="element"
          @edit="editName"
          @complete="complete"
          @del="delItem"
          :class="tasks.length == 1 ? 'alone' : null"
        />
      </template>

      <template #footer> </template>
    </draggable>
    <Button :classes="'inList'" @click="addItem()" />
  </div>
</template>

<script>
import Item from "./Item.vue";
import draggable from "vuedraggable";
import { mapActions } from "vuex";
import Button from "./Button.vue";
import Title from "./TitleForm.vue";
import { scrollTo } from "../assets/js/scrollTo";
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
    addItem() {
      const i = this.index;
      this.$store.dispatch("add", { val: "", i });
      scrollTo(".list-group", this.index);
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
  padding: 3% 2%;
  margin-bottom: 5%;
  width: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(160, 236, 241, 0.733);
  .length {
    margin-bottom: 3%;
  }
  .box.delete {
    margin-left: auto;
  }
  .list-group {
    flex-grow: 2;
    margin-bottom: 5%;
    &__district {
      max-height: 200px;
      overflow-y: scroll;
      ~ .box {
        margin-top: auto;
      }
    }
  }
}

// .list-move, /* apply transition to moving elements */
.list-enter-active {
  transition: all 0.5s ease-in-out;
}
.list-leave-active {
  transition: all 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
// .list-leave-active {
//   // position: absolute;
// }
</style>