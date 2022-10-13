<template>
  <div
    :class="{ 'list-item': true, done: el.done, leave: isLeaving }"
    :key="el"
  >
    <h4 class="index">{{ index + 1 }}</h4>
    <Button :classes="'delete'" @click="delItem(el)" />
    <Title :target="el.name" @changeName="changeName" @delete="delItem">
    </Title>
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
      isLeaving: false,
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
      this.isLeaving = true;
      setTimeout(() => {
        this.$emit("del", el);
        this.isLeaving = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.list-item {
  padding: 5% 3% 5% 3%;
  border: 1px solid black;
  margin-bottom: 5%;
  background: rgba(245, 77, 77, 0.774);
  position: relative;
  .index {
    display: inline;
  }
  .delete,
  .box__complete {
    margin-left: auto;
  }
  .delete {
    float: right;
  }
  .form {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

.list-item.leave {
  animation: leave 1s ease;
}

.list-item.alone {
  animation: none;
}


@keyframes leave {
  to {
    transform: translateX(300px);
  }
}

@media (min-width: $desktop) {
  .list-item{
    padding: 3% 1% 3% 1%;
  }
}
</style>