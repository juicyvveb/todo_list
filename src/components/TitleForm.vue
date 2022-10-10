<template>
  <form
    class="list-item--form form"
    action="#"
    @change="edit($event, value)"
    @submit="edit($event, value)"
  >
    <input
      type="text"
      v-model="value"
      :class="{ 'list-item--name': true }"
    />
  </form>
</template>

<script>
import validate from "../assets/js/validate";

export default {
  mounted(){
    
  },
  data(){
    return {
      value: this.target || 'nothing'
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
          this.$emit('delete')
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  border: 1px solid black;
  input{
  max-width: 100%;
  }
}
</style>