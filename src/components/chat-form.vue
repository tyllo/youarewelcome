<template lang="pug">
  form.chat-form(@submit.prevent="onSubmit")
    .chat-form_message.
      На одинаковые вопросы будут одинаковые ответы

    //- icon from http://simpleicon.com/pen-9.html
    img.chat-form_icon-pen(src="~@/assets/pen.svg")

    input.chat-form_input(
      v-model="text"
      name="q" type="text"
      placeholder="Введите вопрос"
      autocomplete="off"
      autofocus)

    button.chat-form_button(
      type="submit", :disabled="!text") Узнать ответ
</template>

<script>
  export default {
    data: () => ({
      text: ''
    }),
    methods: {
      onSubmit () {
        this.$emit('submit', this.text)
        this.text = ''
      }
    }
  }
</script>

<style lang="scss">
  $main-color: #2881b9;
  $light-color: lighten($main-color, 20);
  $form-button-width: 8rem;

  .chat-form {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, .25);

    & > &_icon-pen {
      margin: 0.55rem;
      position: absolute;
      left: 1rem;
      height: 1.2rem;
      color: lightgray;

    }

    & > &_message {
      position: relative;
      margin-top: -12px;
      font-size: .8rem;
      color: #fff;
      line-height: 1rem;
    }

    & > &_input,
    & > &_button {
      display: inline-block;
      margin: 0;
      padding: 0.5rem;
      font-size: 1rem;
      line-height: 1.25rem;
      border: 1px solid $light-color;
      box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.25);
    }

    & > &_input {
      width: calc(100% - #{ $form-button-width });
      color: gray;
      border-right: none;
      padding-left: 2.7rem;
    }

    & > &_button {
      width: $form-button-width;
      border-left: none;
      background-color: $main-color;
      color: #fff;
      border-color: $main-color;
      transition: .5s;

      &:disabled {
        background-color: $light-color;
        border-color: $light-color;
      }

      &:not([disabled]) {
        cursor: pointer;
      }
    }
  }
</style>
