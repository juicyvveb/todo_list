<template>
  <div class="container-item">
    <!-- кнопка удаления списка -->
    <Button :classes="'delete'" @click="deleteList()" />

    <!-- редактируемый заголовок списка -->
    <Title class="title" :target="title" @changeName="changeListTitle" />

    <!-- тело списка-drag&drop -->
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


    <!-- кнопка добавления элемента -->
    <Button class="btn__addItem" @click="addItem()" />
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
        return this.myArray.title;
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
  margin-bottom: 4%;
  margin-right: 4%;
  width: 48%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: $blue;
  &:nth-child(2n) {
    margin-right: 0;
  }
  .length {
    margin-bottom: 3%;
  }
  .box.delete {
    margin-left: auto;
  }
  .btn__addItem {
    margin-top: 5%;
    width: 10%;
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

.linka {
  width: 10%;
  height: 10%;
}

@media (min-width: $laptop) {
  .container-item {
    width: 30%;
    margin-right: 5%;
    &:nth-child(2n) {
      margin-right: 5%;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}
@media (min-width: $desktop) {
  .container-item {
    width: 15%;
    padding: 2% 1%;
    margin-right: 2%;
    margin-bottom: 2%;
    .btn__addItem {
      width: 15%;
    }
    &:nth-child(2n) {
      margin-right: 2%;
    }
    &:nth-child(3n) {
      margin-right: 2%;
    }
  }
}

// .list-move, /* apply transition to moving elements */
.list-enter-active {
  transition: all 0.5s ease-in-out;
}
.list-leave-active {
  transition: all 0.5s ease-in-out;
  .list-item {
    display: none;
  }
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>