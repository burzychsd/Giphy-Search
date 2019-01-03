<template>
  <div v-bind:id='[type === "result" ? "gifsDisplay--result" : "gifsDisplay--favourites" ]'>
    <GifContainer v-bind:favourite='favourite' v-for='items in data' :key='items.id' 
    v-bind:gif='items.embed_url' v-bind:index='items.id' v-bind:type='type'/>
  </div>
</template>

<script>
import GifContainer from '../GifContainer'

export default {
  name: 'GifsDisplay',
  components: {
    GifContainer
  },
  props: {
    type: String,
    data: Array,
    favourite: Function
  }
}
</script>

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