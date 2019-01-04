<!-- TEMPLATE -->
<template>
  <div id="app">
    <SearchForm />
    <GifsDisplay v-bind:data='results' type='results' />
    <GifsDisplay v-bind:data='favourites' type='favourites' />
  </div>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from 'vuex'
import SearchForm from '../components/SearchForm'
import GifsDisplay from '../components/GifsDisplay'

export default {
  name: 'app',
  components: {
    SearchForm,
    GifsDisplay
  },
  computed: {
    ...mapState([
      'results',
      'favourites'
    ])
  },
  watch: {
    favourites: function() {
      localStorage.setItem('favourites', JSON.stringify(this.$store.state.favourites))
    }
  },
  mounted: function() {
    const condition = localStorage.getItem('favourites');
    if(condition) { this.$store.state.favourites = JSON.parse(condition) }
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