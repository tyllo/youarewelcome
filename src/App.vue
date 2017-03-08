<template lang="pug">
  #app
    Chat
</template>

<script>
import Chat from '@/components/chat'

export default {
  name: 'app',
  components: {
    Chat
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
</style>

<style lang="scss">
  $main-color: lightgray;

  html,
  body {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.25;
    margin: 0;
    background-color: $main-color;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  input,
  select,
  textarea,
  button {
    font-family: inherit;
    outline-width: 0;
  }
</style>
