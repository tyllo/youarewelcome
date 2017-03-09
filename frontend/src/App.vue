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
  $max-width: 400px;
  $max-height: 600px;
  $border-color: #efefef;
  $shadow: 0 0 4px rgba(0, 0, 0, 0.25);

  body {
   display: flex;
   flex-direction: column;
   justify-content: center;
  }

  #app {
    height: 100%;
    width: 100%;
    max-width: $max-width;
    max-height: $max-height;
    margin: auto;
    box-shadow: $shadow;
    border: 4px solid $border-color;

     @media screen and (max-width: $max-width) {
       padding: 0;
       max-height: none;
       max-width: none;
       box-shadow: none;
       border: none;
     }

     @media screen and (max-height: $max-height) {
       padding: 0;
       max-height: none;
       max-width: $max-height;
       box-shadow: none;
       border: none;
     }
  }
</style>

<style lang="scss">
  html,
  body {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.25;
    margin: 0;
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
