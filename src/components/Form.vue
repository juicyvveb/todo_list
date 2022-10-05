<template>
  <div class="container">
    <form
      :class="{ 'list-item--form': 1, form: 1, error: error }"
      action="#"
      @submit.prevent="write($event, name)"
      @change.prevent="write($event, name)"
    >
      <input
        type="text"
        v-model="value"
        :class="{ 'list-item--name': true }"
        v-focus
        placeholder="write task"
      />
      <button type="submit">ok</button>
    </form>
  </div>
</template>

<script>
import validate from "../assets/js/validate";
export default {
  props: ["model", "role"],
  data() {
    return {
      error: false,
      name: "",
    };
  },
  computed: {
    value: {
      set(val) {
        this.name = val;
      },
      get() {
        return this.model || this.name;
      },
    },
  },
  directives: {
    focus: {
      updated: (el) => {
        setTimeout(() => {
          el.focus();
        }, 600);
      },
      mounted: (el) => el.focus(),
    },
  },
  methods: {
    write(e, name) {
      return validate(e, name).then(
        () => {
          this.$emit("addItem", name);
        },
        (t) => {
          console.log(t);
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(189, 188, 188);
  opacity: 0.2;
}
.form {
  transition: all 0.3s ease-in-out;
}
.form.error {
  input {
    border: 2px solid rgb(243, 66, 66);
    background: rgb(219, 87, 87);
  }
}
</style>