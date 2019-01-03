<template>
  <div id='gifContainer'>
    <iframe v-bind:src='gif' width="100%" frameBorder=allowFullScreen></iframe>
    <button v-on:click='favourite($event, index, "add")' v-if='type === "result"'>Like</button>
    <button v-on:click='favourite($event, index, "remove")' v-else>Unlike</button>
  </div>
</template>

<script>
export default {
  name: 'GifContainer',
  props: {
    gif: String,
    type: String,
    index: String,
    favourite: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    width: 100px;
    height: 50px;
    margin: 1em;
  }

  #gifContainer {
    width: 200px;
    background: green;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    margin: 1em;
  }
</style>