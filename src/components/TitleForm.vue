<template>
  <form
    class="form form__title"
    action="#"
    @change="edit($event, value)"
    @submit="edit($event, value)"
  >
    <input
      type="text"
      v-model="value"
      :class="{ 'input': true, error: error}"
    />
  </form>
</template>

<script>
import validate from "../assets/js/validate";

export default {
  data(){
    return {
      value: this.target,
      error: false,
    }
  },
  props: ['target'],
  methods: {
    edit(e, val){
       return validate(e, val).then(
        () => {
          this.$emit('changeName', val)
        },
        () => {
          this.$emit('delete');
          this.error = true;
          setTimeout(() => {
            this.error = false;
            this.value = 'defaul title'
          }, 500)
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.form {
  overflow: hidden;
  input {
  // max-width: 100%;
  }

  .input {
    display: inline;
    background: none;
    font-size: 20px;
  }
  .input.error{
    background: red;
    opacity: 0.6;
    animation: error .2s ease-in-out 2;
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
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}
</style>