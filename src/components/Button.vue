<template>
  <div :class="['box', classes]">
    <button type="button" class="btn btn__add">
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['classes'],
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.box {
  display: flex;
  border-radius: 20%;
  border: 1px solid black;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  .btn {
    width: 100%;
    border: none;
    @include flexCenter;
    span {
      width: 70%;
      height: 13%;
      position: relative;
      background: $green;
      &:after{
        content: '';
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
.box.main{
  width: 5%;
}
.box.inList{
  margin-top: 5%;
  width: 10%;
}

.box.delete{
  width: 10%;
  .btn{
    span {
      transform: rotate(45deg);
      background: $red;
    }
  }
}
</style>