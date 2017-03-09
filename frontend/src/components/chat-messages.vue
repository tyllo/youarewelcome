<template lang="pug">
  .chat-messages
    transition-group(name="messages" tag="div" ref="messages")
      ChatMessage.chat-messages_item(
        v-for="message in messages",
        :key="message.id",
        :message="message")

    .chat-messages_empty(v-if="!messages.length").
      Напишите что-нибудь в чат
</template>

<script>
  import ChatMessage from '@/components/chat-message'

  const ANIMATION_TIME = 500

  export default {
    props: {
      messages: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      timerId: null
    }),
    updated () {
      this.timerId = setTimeout(() => {
        this.$refs.messages.$el.scrollIntoView(false)
      }, ANIMATION_TIME)
    },
    beforeDestroy () {
      clearTimeout(this.timerId)
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

    & > &_item {
    }

    & > &_empty {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
    }
  }
</style>

// for transition
<style lang="scss">
  .messages {
    &-enter-active,
    &-leave-active {
      // ANIMATION_TIME
      transition: all .5s;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(50%);
    }
  }
</style>
