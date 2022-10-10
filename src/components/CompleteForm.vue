<template>
<div>
  <input
    @change="$emit('complete', value)"
    type="checkbox"
    v-model="value"
  />
</div>
  
</template>

<script>
    // @input="element.done = !element.done"

export default {
  mounted(){
  },
  data(){
    return{
      value: this.target || false
    }
  },
  props: ['target']
};
</script>

<style>
</style>