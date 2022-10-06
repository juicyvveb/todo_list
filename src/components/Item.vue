<template>
  <div :class="{ 'list-item': true, 'done': element.done }" :key="element">
    <button @click="delItem(element)" class="btn btn-danger">del</button>
    <!-- <button class="btn btn-success" @click="complete()">done</button> -->
    <form
      class="list-item--form form"
      action="#"
      @change.prevent="editName($event, element)"
      @submit.prevent="editName($event, element)"
    >
      <input
        type="text"
        v-model="element.name"
        :class="{ 'list-item--name': true }"
      />
      <input
        @input="element.done = !element.done"
        type="checkbox"
        v-model="element.done"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["el", "index"],
  computed: {
    element() {
      return this.el;
    },
  },
  methods: {
    editName(e, el) {
      this.$emit("edit", e, el);
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
  background: rgba(255, 110, 43, 0.616);
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