<template>
  <div id="app">
    <SearchForm v-bind:searchValue='searchValue' v-bind:change='handleOnChange' 
    v-bind:submit='handleOnSubmit'/>
    <GifsDisplay v-bind:data='items' type='result' />
    <GifsDisplay v-bind:data='items' type='favourites' />
  </div>
</template>

<script>
import SearchForm from '../components/SearchForm'
import GifsDisplay from '../components/GifsDisplay'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    SearchForm,
    GifsDisplay
  },
  data: () => ({
    items: [{id: 1, value: 2}, {id: 2, value: 45}, {id: 3, value: 33}],
    searchValue: ''
  }),
  methods: {
    handleOnChange: function(event) { this.searchValue = event.target.value },
    handleOnSubmit: function() {
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.searchValue}&api_key=${process.env.VUE_APP_API_KEY}&limit=5`

      axios.get(url)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
