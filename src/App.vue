<template>
    <div class="grid">
      <div class="col">

        <!-- error message -->
        <message v-if="message" @click="message = false" :message="message" />

        <!-- new note -->
        <newNote :note="note" @addNote="addNote" />

        <!-- <div class="p-d-flex p-col-8 p-mx-auto p-my-3 p-jc-between">
          <h1 class="p-reset p-component">{{ title }}</h1>

          <search />

          <div class="header-icons">
              <Button :class="{ 'p-button-primary p-button-outlined' : grid, 'p-button-secondary p-button-text' : !grid }" @click="grid = true" icon="pi pi-th-large" class="p-button-sm p-button-icon-only"  />
              <Button :class="{ 'p-button-primary p-button-outlined' : !grid, 'p-button-secondary p-button-text' : grid }" @click="grid = false" icon="pi pi-list" class="p-button-sm p-button-icon-only"  />
              <Button icon="pi pi-heart" class="p-button-sm p-button-icon-only p-button-text p-button-primary" />
          </div>
        </div> -->

        <!-- note list -->
        <div class="p-col-10 p-mx-auto p-my-3">
          <notes :notes="notes" @remove="removeNote" :title="title"/>
        </div>

    </div>
  </div>

</template>

<script>
import message from '@/components/Message.vue'
import notes from '@/components/Notes.vue'
import newNote from '@/components/NewNote.vue'

export default {
  components: {
    message, notes, newNote, 
  },
  data() {
    return {
      title: "Notes App 123",
      message: null,
      // grid: true,
      note: {
        title: '',
        descr: ''
      },

      notes: [
        {
          title: "First Note",
          descr: "Description for first note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Second Note",
          descr: "Description for Second note",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Third Note",
          descr: "Description for Third note",
          date: new Date(Date.now()).toLocaleString(),
        },
      ]
    }
  },

  methods: {
    addNote () {
      let {title, descr} = this.note
      // console.log(this.note)
      if (title === '') {
        this.message = 'Title can`t be blank!'
        return false
      }
      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      this.note.title = ''
      this.note.descr = ''
      this.message = null
    },
    removeNote (index) {
      this.notes.splice(index, 1)
    },

    // onSortChange(event) {

    // }
    
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 20px

  }
  .header-icons {
    .p-button {
      margin-right: .5rem;
    }
  }
</style>