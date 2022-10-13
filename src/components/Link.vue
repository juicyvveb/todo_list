<template>
  <a :href="href" class="link" :style="{ 'background-image': `url(${bg})` }">
  </a>
</template>

<script>
import tg from "../assets/imgs/tg.png";
import inst from "../assets/imgs/inst.png";
import vk from "../assets/imgs/vk.png";
import link from "../assets/imgs/link.png";
export default {
  props: ["social", "href"],
  computed: {
    bg() {
      return this.social == "tg"
        ? tg
        : this.social == "inst"
        ? inst
        : this.social == "link"
        ? link
        : this.social == "vk"
        ? vk
        : null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.link {
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}
</style>