<template>
  <div class="box box__complete">
    <input
      @change="$emit('complete', value)"
      type="checkbox"
      v-model="value"
      class="input"
    />
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      value: this.target || false,
    };
  },
  props: ["target"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.box {
  width: 10%;
  display: flex;
  border-radius: 20%;
  aspect-ratio: 1 / 1;
  position: relative;
  &:hover{
    padding: 3px;
    padding-bottom: 0;
  }
  .input {
    width: 100%;
    border: 3px solid black;
    cursor: pointer;
  }
  &:before {
    content: "completed";
    position: absolute;
    left: 0%;
    bottom: 0;
    font-size: 10px;
    transform: translateX(-110%);
    font-style: italic;
    color: rgb(22, 27, 110);
    pointer-events: none;
  }
}

@media (min-width: $desktop) {
  .box {
    width: 15%;
  }
}
</style>