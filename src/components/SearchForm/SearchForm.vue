<!-- TEMPLATE -->
<template>
  <form v-on:submit.prevent>
    <input name='search' v-model='search' type='search' >
    <button v-on:click='handleOnSubmit(search)'>Search</button>
  </form>
</template>

<!-- SCRIPT -->
<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchForm',
  data: () => ({
    search: ''
  }),
  methods: {
    ...mapActions([
      'onSubmit'
    ]),
    handleOnSubmit: function(value) {
      this.onSubmit(value)
    }
  }
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
