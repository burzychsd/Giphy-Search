<template>
  <div id='gifContainer'>
    
  </div>
</template>

<script>
export default {
  name: 'GifContainer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #gifContainer {
    width: 200px;
    height: 200px;
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