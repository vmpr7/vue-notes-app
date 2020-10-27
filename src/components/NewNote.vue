<template>
  <!-- new note -->
  <div class="note-form">
    <div class="new-note p-ai-center p-d-flex p-flex-column">
      <div class="p-fluid p-col-6 p-md-4">
        <div class="p-field p-my-5">
          <span class="p-float-label">
            <InputText v-model="note.title" type="text" class="" id="noteTitle"/>
            <label for="noteTitle">Note Title</label>
          </span>
        </div>
        <div class="p-field p-my-5">
          <span class="p-float-label">
            <Textarea v-model="note.descr" :autoResize="true" id="noteDescr"></textarea>
            <label for="noteDescr">Note Description</label>
          </span>
        </div>
        <Button @click="addNote" class="" label="New Note" icon="pi pi-check" iconPos="right"></button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote', this.note)
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-form {
    margin-bottom: 20px
  }
</style>