<template>
  <div id="app">
    <SearchForm v-bind:searchValue='searchValue' v-bind:change='handleOnChange' 
    v-bind:submit='handleOnSubmit'/>
    <GifsDisplay v-bind:favourite='handleFavourite' v-bind:data='results' type='result' />
    <GifsDisplay v-bind:favourite='handleFavourite' v-bind:data='favourites' type='favourites' />
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
    results: [],
    favourites: [],
    searchValue: ''
  }),
  methods: {
    handleOnChange: function(event) { this.searchValue = event.target.value },
    handleOnSubmit: function() {
      const url = `http://api.giphy.com/v1/gifs/search?q=${this.searchValue}&api_key=${process.env.VUE_APP_API_KEY}&limit=5`

      axios.get(url)
      .then(res => this.results = res.data.data)
      .catch(err => console.log(err))
    },
    handleFavourite: function(event, index, status) {
      if(status === 'add') {
        const fav = this.favourites
        const target = this.results.filter(gif => gif.id === index)
        this.favourites = fav.concat(target)
        event.target.style.display = 'none'
      } else { 
        const gifs = JSON.parse(localStorage.getItem('favourites')).filter(gif => gif.id !== index)
        this.favourites = gifs
        localStorage.setItem('favourites', JSON.stringify(gifs))
      }
    } 
  },
  watch: {
    favourites: function() {
      localStorage.setItem('favourites', JSON.stringify(this.favourites))
    }
  },
  updated: function() {
    this.handleOnSubmit()
  },
  mounted: function() {
    const condition = localStorage.getItem('favourites');
    if(condition) { this.favourites = JSON.parse(condition) }
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
