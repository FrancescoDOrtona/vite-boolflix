<script>
import PageMain from './components/PageMain.vue';
import PageHeader from './components/PageHeader.vue';
import { store } from './store'
import axios from 'axios'

export default {
  components: {
    PageMain,
    PageHeader,
  },
  data() {
    return {
      store: store
    }
  },
  methods: {
    fetchData() {
      if(this.store.searchText === '') {
        store.movies = []
        store.series = []
        return
      }

      axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.store.API_KEY,
          query: this.store.searchText,
          language: 'it-IT'
        }
      })
      .then(res => {
        const movies = res.data.results
        this.store.movies = movies
      })

    }
  }
}
</script>

<template>
  <PageHeader @search="fetchData" />
  <PageMain />
</template>

<style lang="scss">
@use './style/partials/general.scss';

</style>