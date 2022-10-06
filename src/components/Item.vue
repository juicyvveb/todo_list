<template>
  
        <div class="list-item" :key="element">
          <button @click="delItem(element)">del</button>
          <form
            class="list-item--form form"
            action="#"
            @change.prevent="editName($event, element)"
            @submit.prevent="editName($event, element)"
          >
            <input
              type="text"
              v-model="element.name"
              :class="{ 'list-item--name': true }"
            />
          </form>
        </div>
</template>

<script>

export default {
  props: ['el'],
  computed: {
    element(){
      return this.el
    }
  }
}
</script>

<style>

</style>