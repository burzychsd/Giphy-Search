<!-- TEMPLATE -->
<template>
  <div id="app">
    <SearchForm v-bind:searchValue='searchValue' v-bind:change='handleOnChange' 
    v-bind:submit='handleOnSubmit'/>
    <GifsDisplay v-bind:favourite='handleFavourite' v-bind:data='results' type='result' />
    <GifsDisplay v-bind:favourite='handleFavourite' v-bind:data='favourites' type='favourites' />
  </div>
</template>

<!-- SCRIPT -->
<script>
import SearchForm from '../components/SearchForm'
import GifsDisplay from '../components/GifsDisplay'

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
      fetch(url).then(response => response.json())
      .then(res => this.results = res.data.map(gif => gif.id))
    },
    handleFavourite: function(event, index, status) {
      const { getSpecificItem, addItem, removeItem } = this
      const res = this.results
      const target = getSpecificItem(res, index) 
      const fav = this.favourites

      status === 'add' ? addItem(index, fav, target, res) : 
      removeItem(index)
    },
    addItem: function (index, fav, target, res) {
      const { getSpecificItem, removeDuplicates } = this
      this.favourites = removeDuplicates(fav.concat(target))
      this.results = getSpecificItem(res, index, 'remove')
    },
    removeItem: function (index) {
      const { getSpecificItem } = this
      const gifs = JSON.parse(localStorage.getItem('favourites'))
      this.favourites = getSpecificItem(gifs, index, 'remove')
      localStorage.setItem('favourites', JSON.stringify(gifs))
    },
    getSpecificItem: function (arr, index, status) {
      return status === 'remove' ? arr.filter(el => el !== index) :
                            arr.filter(el => el === index)
    },
    removeDuplicates: function (arr) {
      return arr.filter((id, i, array) => array.indexOf(id) === i)
    }
  },
  watch: {
    favourites: function() {
      localStorage.setItem('favourites', JSON.stringify(this.favourites))
    }
  },
  mounted: function() {
    const condition = localStorage.getItem('favourites');
    if(condition) { this.favourites = JSON.parse(condition) }
  }
}
</script>

<!-- STYLES -->
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