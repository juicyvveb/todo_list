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
.box {
  width: 10%;
  display: flex;
  border-radius: 20%;
  border: 1px solid black;
  aspect-ratio: 1 / 1;
  position: relative;
  .input {
    width: 100%;
  }
  &:before{
    content: 'completed';
    position: absolute;
    left: 0%;
    bottom: 0;
    font-size: 10px;
    transform: translateX(-110%);
    font-style: italic;
    color: rgb(22, 27, 110);
  }
}
</style>