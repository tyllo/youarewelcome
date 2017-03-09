<template lang="pug">
  .chat-messages(ref="messages")
    transition-group.chat-messages_inner(
      name="messages" tag="div")
      ChatMessage(
        v-for="message in messages",
        :key="message.id",
        :message="message")

    .chat-messages_empty(v-if="!messages.length").
      Напишите что-нибудь в чат
</template>

<script>
  import ChatMessage from '@/components/chat-message'

  export default {
    props: {
      messages: {
        type: Array,
        required: true
      }
    },
    updated () {
      const box = this.$refs.messages
      box.scrollTop = box.scrollHeight
    },
    components: {
      ChatMessage
    }
  }
</script>

<style lang="scss">
  .chat-messages {
    height: 100%;
    position: relative;

    & > &_empty {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      font-weight: bold;
    }
  }
</style>

// for transition
<style lang="scss">
  .messages {
    &-enter-active,
    &-leave-active {
      // < SERVER_TIME_LATENCY
      transition: all .5s;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(-50%);
    }
  }
</style>
