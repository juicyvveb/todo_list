<template>
  <div class="container-item">
    <h3 class="title">List {{ index }}</h3>
    <draggable
      v-model="myArray"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      group="people"
      class="list-group"
    >
      <template #item="{ element }">
        <Item
          :index="myArray.indexOf(element)"
          :el="element"
          @edit="editName"
          @del="delItem"
        />
      </template>

      <template #footer>
        <button @click="addItem()">add</button>
      </template>
    </draggable>
  </div>
</template>

<script>
import validate from "../assets/js/validate";
import Item from "./Item.vue";
import draggable from "vuedraggable";
import { mapActions } from "vuex";

export default {
  props: ["index"],
  data() {
    return {

    }
  },
  components: {
    draggable,
    Item,
  },
  computed: {
    myArray: {
      get() {
        return this.$store.getters.list[this.index];
      },
      set(arr) {
        const i = this.index;
        this.change({ arr, i });
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
      let arr = this.myArray,
        index = arr.indexOf(el),
        i = this.index;
      arr.splice(index, 1);
      this.change({ arr, i });
    },
    editName(e, el) {
      return validate(e, el.name).then(
        () => {
          let arr = this.myArray,
            i = this.index;
          this.change({ arr, i });
          const input = e.target.querySelector("input");
          if (input) {
            input.blur();
          }
          this.edition = false;
        },
        () => {
          this.delItem(el);
        }
      );
    },
    compliting(done, i) {
      done, i
      this.myArray[i].done = done;
      this.change({ arr: this.myArray, i: this.index });
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