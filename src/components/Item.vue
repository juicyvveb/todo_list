<template>
  <div :class="{ 'list-item': true, done: el.done }" :key="el">
    <Title :target="el.name" @changeName="changeName" @delete="delItem"></Title>
    <Button :classes="'delete'" @click="delItem(el)" />
    <Completed :target="el.done" @complete="complete" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import Title from "./TitleForm.vue";
import Completed from "./CompleteForm.vue";

export default {
  props: ["el", "index"],
  data() {
    return {
    };
  },
  components: {
    Button,
    Title,
    Completed,
  },
  methods: {
    changeName(val) {
      this.$emit("edit", { val, index: this.index });
    },
    complete(val) {
      this.$emit("complete", { val, index: this.index });
    },
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