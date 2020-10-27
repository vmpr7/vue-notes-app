<template>
    <Message severity="error"> {{ message }} </Message>
</template>


<script>

import Message from 'primevue/message';
export default {
  components:{
    Message
  },
  props: {
    message: {
      type: String,
      // required: true
      default: 'this is a Message'
    }
  }
  
  
}
</script>

<style lang="scss" scoped>
// .message
//   text-align: center
//   padding: 20px
//   color: red

</style>