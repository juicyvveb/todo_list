<template>
  <div :class="{ 'list-item': true, done: el.done }" :key="el">
    <Title :target="el.name" @changeName="changeName" @delete="delItem">
    </Title>
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
  padding: 5% 3% 5% 3%;
  border: 1px solid black;
  margin-bottom: 5%;
  background: rgba(245, 77, 77, 0.774);
  position: relative;
  .delete, .box__complete {
    position: absolute;
    top: 7px;
    right: 7px;
  }
  .form {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .box__complete{
    top: auto;
    bottom: 7px;
  }
}


</style>