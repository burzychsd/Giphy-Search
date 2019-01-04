<!-- TEMPLATE -->
<template>
  <form v-on:submit.prevent>
    <input name='search' v-bind:value='search' type='search' v-on:input='change'>
    <button v-on:click='submit'>Search</button>
  </form>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'SearchForm',
  props: {
    searchValue: String,
    change: Function,
    submit: Function
  },
  data: () => ({
    search: ''
  }),
  updated: function() { this.search = this.searchValue }
}
</script>

<!-- STYLES -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    width: 90%;
    max-width: 350px;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 1em auto;
  }

  input {
    width: 75%;
    height: 100%;
  }

  button {
    width: 20%;
    min-width: 100px;
    height: 100%;
  }
</style>
