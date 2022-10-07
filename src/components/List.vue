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
      :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: !drag ? 'list' : null,
      }"
    >
      <template #item="{ element }">
<<<<<<< HEAD
        <div class="list-item" :key="element">
          <button @click="delItem(element)">del</button>
          <form
            class="list-item--form form"
            action="#"
            @change.prevent="editName($event, element)"
            @submit.prevent="editName($event, element)"
          >
            <input
              type="text"
              v-model="element.name"
              :class="{ 'form-name': true }"
              :id="element.id"
            />
          </form>
          <!-- <p v-if="!edition" @click="edition=true">{{ element.name }}</p>
          <button class="label" @click="edition=true">edit</button> -->
        </div>
=======
        <Item
          :index="myArray.indexOf(element)"
          :el="element"
          @edit="editName"
          @del="delItem"
        />
>>>>>>> withItem
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
// import ButtonAdd from './ButtonAdd.vue';

export default {
  props: ["index"],
  data() {
    return {
<<<<<<< HEAD
      edition: false,
=======
      drag: false,
>>>>>>> withItem
    };
  },
  components: {
    draggable,
    Item,
    // ButtonAdd,
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
  .list {
<<<<<<< HEAD
    &-item {
      padding: 5% 3% 5% 3%;
      border: 1px solid black;
      margin-bottom: 5%;
      background: rgb(88, 226, 196);
      &--form,
      .form {
        display: flex;
        flex-wrap: wrap;
        &-name {
          background: inherit;
          border: none;
          outline: none;
          font-size: 20px;
          max-width: 90%;
          width: fit-content;
          cursor: pointer;
          word-break: break-all;
          &:focus {
            font-size: 22px;
          }
        }
        .label {
          width: 3vw;
          height: 3vw;
          border: 1px solid black;
          border-radius: 4px;
        }
      }
    }
=======
>>>>>>> withItem
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