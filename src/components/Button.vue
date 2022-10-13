<template>
  <div :class="['box', classes]">
    <button type="button" class="btn btn__add">
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["classes"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.box {
  display: flex;
  aspect-ratio: 1 / 1;
  .btn {
    cursor: pointer;
    width: 100%;
    border: 1px solid black;
    border-radius: 20%;
    transition: all 0.3s ease;
    @include flexCenter;
    span {
      width: 70%;
      height: 13%;
      position: relative;
      background: $green;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(90deg);
        background: inherit;
      }
    }
  }
}

.box.delete {
  width: 10%;
  .btn {
    span {
      transform: rotate(45deg);
      background: $red;
    }
  }
}

@media (min-width: $desktop) {
  .box:hover {
    padding: 1%;
  }

  .box.delete {
    width: 15%;
  }
}
</style>