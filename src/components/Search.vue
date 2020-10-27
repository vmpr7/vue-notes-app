<template>
  <div class="search p-fluid">
    <span class="p-input-icon-left p-d-block">
        <i class="pi pi-search" />
        <InputText type="text" v-model="search" :placeholder="placeholder" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data () {
    return { search: this.value}
  },
  watch: {
    search(val) {
      this.$emit('search', val)
    }
  }
}
</script>