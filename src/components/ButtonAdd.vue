<template>
  <div class="container">
    <div class="box">
      <button type="button" @click="addList()">add list</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    createdIndex(){
      return this.$store.getters.list.length 
    }
  },
  methods:{
    ...mapActions(["change"]),
    addList(){
      const i = this.createdIndex;
      this.change({arr: [{name: 'first task'}], i})
    }
  }
}
</script>

<style>

</style>