<template lang="pug">
  .chat-message(:class='className')
    .chat-message_user {{message.user}}
    .chat-message_text {{message.text}}
    .chat-message_time {{time}}
    .chat-message_error {{message.error}}
</template>

<script>
  import Message from '@/helpers/message'

  function leftPad (num) {
    let str = num + ''
    return str.length < 2 ? 0 + str : str
  }

  export default {
    props: {
      message: {
        type: Message,
        required: true
      }
    },
    computed: {
      time () {
        const date = new Date(this.message.time)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        return `${leftPad(hours)}:${leftPad(minutes)}:${leftPad(seconds)}`
      },

      className () {
        return 'is-' + this.message.user.toLowerCase()
      }
    }
  }
</script>

<style lang="scss">
  $main-color: #2881b9;
  $shadow: 0 0 .4rem rgba(0, 0, 0, 0.25);
  $triange-size: 1rem;
  $mesage-bg-color: #fff;

  .chat-message {
    padding: .5rem;
    margin-bottom: 1rem;
    position: relative;
    background-color: $mesage-bg-color;
    border-radius: .5rem;
    box-shadow: $shadow;
    font-size: .9rem;
    line-height: 1.2rem;

    & > &_user {
      margin-bottom: .5rem;
      font-weight: bold;
      color: $main-color;

      @at-root.is-me#{&} {
        color: red;
      }
    }

    & > &_text {
      word-wrap: break-word;
    }

    & > &_time {
      padding: .5rem;
      position: absolute;
      top: 0;
      right: 0;
      color: gray;
    }

    & > &_error {
      text-align: right;
      color: red;
      font-size: .75rem;
    }
  }

  // triange for bubble
  .chat-message {
    &:before,
    &:after {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      top: 1.5 * $triange-size;
      border: $triange-size solid $mesage-bg-color;
      border-color: $mesage-bg-color transparent transparent transparent;
    }

     &:before {
       border-top-color: gray;
     }

    &.is-server {
      margin-left: 2 * $triange-size;

      &:before,
      &:after {
        left: -$triange-size;
      }

      &:before {
        margin-left: -1px;
      }
    }

    &.is-me {
      margin-right: 2 * $triange-size;

      &:before,
      &:after {
        right: -$triange-size;
      }

      &:before {
        margin-right: -1px;
      }
    }
  }
</style>
