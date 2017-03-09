<template lang="pug">
  .chat
    ChatMessages.chat_messages(:messages="messages")
    ChatForm.chat_form(@submit="onSubmit")
</template>

<script src='./chat.js'></script>

<style lang="scss">
  $form-height: 85px;

  .chat {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: #fff;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      // pattern from https://goo.gl/rAelJz
      background: url('~@/assets/background.jpg');
      opacity: 0.3;
    }

    & > &_messages,
    & > &_form {
      padding: 1rem;
    }

    & > &_messages {
      overflow-y: auto;
      padding-bottom: 0;
      height: calc(100% - #{ $form-height });
    }

    & > &_form {
    }
  }
</style>
