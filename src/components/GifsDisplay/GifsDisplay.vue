<!-- TEMPLATE -->
<template>
  <div v-bind:id='[type === "results" ? "gifsDisplay--result" : "gifsDisplay--favourites" ]'>
    <GifContainer v-for='items in data' :key='items' 
    v-bind:gif='`https://giphy.com/embed/${items}`' v-bind:index='items' v-bind:type='type' />
  </div>
</template>

<!-- SCRIPT -->
<script>
import GifContainer from '../GifContainer'

export default {
  name: 'GifsDisplay',
  components: {
    GifContainer
  },
  props: {
    type: String,
    data: Array
  }
}
</script>

<!-- STYLES -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #gifsDisplay--result, #gifsDisplay--favourites {
    width: 90vw;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    margin: 2em auto;
    overflow: auto;
  }


  #gifsDisplay--result {
    height: 500px;
    background: black;
  }

  #gifsDisplay--favourites {
    height: 300px;
    background: yellow;
  }
</style>