<template>
  <form
    class="form form__title"
    action="#"
    @change="edit($event, value)"
    @submit.prevent="edit($event, value)"
  >
    <input
      :id="value"
      type="text"
      v-model="value"
      :class="{ input: true, error: error }"
    />
    <span>
      <slot></slot>
    </span>
  </form>
</template>

<script>
import validate from "../assets/js/validate";

export default {
  data() {
    return {
      value: this.target,
      error: false,
    };
  },
  props: ["target"],
  methods: {
    edit(e, val) {
      return validate(e, val).then(
        () => {
          this.$emit("changeName",  val);
        },
        () => {
          this.$emit("delete");
          this.error = true;
          setTimeout(() => {
            this.error = false;
            this.value = "defaul title";
          }, 500);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.form {
  overflow: hidden;
  position: relative;
  padding-left: 6%;
  .input {
    display: inline;
    background: none;
    font-size: 20px;
    &:focus {
      font-size: 23px;
      font-family: "Arial";
    }
  }
  .input.error {
    background: red;
    border: 1px solid black;
    opacity: 0.6;
    animation: error 0.1s ease-in-out 2;
  }
  &:after {
    content: "";
    width: 5%;
    aspect-ratio: 1/ 1;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(50%);
    background-image: url("../assets/imgs/edit.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.form.title {
  input {
    text-transform: uppercase;
    text-decoration: underline;
  }
  margin-bottom: 5%;
}

@keyframes error {
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
}
</style>