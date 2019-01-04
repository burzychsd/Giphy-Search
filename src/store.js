// STORE
import Vue from 'vue'
import Vuex from 'vuex'
import { getSpecificItems, removeDuplicates } from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		results: [],
		favourites: []
	},
	mutations: {
		ON_SUBMIT: (state, data) => {
			state.results = data
		},
		UPDATE_ITEMS: (state, data) => {
			state.results = data.res
			state.favourites = data.fav
		},
		TO_LOCAL: (state, items) => {
			state.favourites = items
		}
	},
	actions: {
		onSubmit: (store, value) => {
			const url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${process.env.VUE_APP_API_KEY}&limit=5`
			fetch(url)
			.then(response => response.json())
			.then(res => store.commit('ON_SUBMIT', res.data.map(gif => gif.id)))
		},
		updateItems: (store, args) => {
			const res = store.state.results
			const fav = store.state.favourites
			const target = getSpecificItems(res, args.index)
			const data = { res, fav }

			if(args.status === 'add') { 
				data.fav = removeDuplicates(fav.concat(target))
				data.res = getSpecificItems(res, args.index, 'remove')
			} else {
				const localGifs = JSON.parse(localStorage.getItem('favourites'))
				data.fav = getSpecificItems(localGifs, args.index, 'remove')
				localStorage.setItem('favourites', JSON.stringify(localGifs))
			}

			store.commit('UPDATE_ITEMS', data)
		},
		itemsToLocal: (store, items) => {
			store.commit('TO_LOCAL', items)
		}
	}
})