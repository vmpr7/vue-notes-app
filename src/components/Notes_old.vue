<template>
  <div :class="{ 'p-grid': grid}" class="p-col-8 p-mx-auto">
    <div class="note" :class="{ 'p-col-6': grid, 'p-col-12' : !grid }" v-for="(note, index) in notes" :key="index">
        <Card class="p-shadow-3">
          <template v-slot:title>
            {{ note.title }}
            <Button @click="removeNote(index)" icon="pi pi-times" class="close p-button-rounded p-button-danger p-button-text"  />
          </template>
          
          <template v-slot:content>
            <p>{{ note.descr }}</p>
          </template>
          <template v-slot:subtitle>
            <small>{{ note.date }}</small>
          </template>
        </Card>
      </div>
  </div>



</template>

<script>
import Card from 'primevue/card';

export default {
  components:{
    Card, DataView
  },
  props: {
    notes:{
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    removeNote(index) {
      this.$emit('remove', index)
    }
  }
}
</script>
<style lang="scss" scoped>
  .note {
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
  }
  .close {
    float: right;
  }
</style>