<template>
  <div :class="{ 'list-item': true, done: element.done }" :key="element">
    <Title :target="element.name" @changeName="changeName" @delete="delItem" />
    <Button :classes="'inItem'" @delItem="delItem(element)" />
    <Completed :target="element.done" @complete="complete" />
  </div>
</template>

<script>
import Button from "./ButtonAdd.vue";
import Title from "./TitleForm.vue";
import Completed from "./CompleteForm.vue";

export default {
  props: ["el", "index"],
  data() {
    return {
      title: this.el.name || "no title",
    };
  },
  components: {
    Button,
    Title,
    Completed,
  },
  computed: {
    element() {
      return this.el;
    },
    name: {
      get() {
        console.log("get");
        return this.title;
      },
      set(val) {
        console.log("set");
        this.title = val;
      },
    },
  },
  methods: {
    changeName(val) {
      this.$emit("edit", { val, index: this.index });
    },
    complete(val) {
      this.$emit("complete", { val, index: this.index });
    },
    // editName(e, el) {
    //   this.$emit("edit", e, el);
    // },
    delItem(el) {
      this.$emit("del", el);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 5% 3% 5% 0;
  border: 1px solid black;
  margin-bottom: 5%;
  background: rgba(245, 77, 77, 0.774);
  position: relative;
  &--name {
    background: inherit;
    border: none;
    outline: none;
    font-size: 20px;
    max-width: 100%;
    width: fit-content;
    cursor: pointer;
    &:focus {
      font-size: 22px;
    }
  }
}

.list-item.done {
  background: rgb(70, 214, 70);
}
</style>