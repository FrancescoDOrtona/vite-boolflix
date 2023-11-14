  <script>
    import { store } from '../store'
    import Card from './Card.vue';
  
    export default {
      components: {
        Card,
      },
      data() {
        return {
          store: store
        }
      }
    }
  </script>

<template>
    <main>
      <div class="container">
        <h2 class="category">Movies</h2> 
        <div class="grid">
          <Card v-for="movie in store.movies" :key="movie.id" :item="movie"/>  
          <div v-if="!store.movies.length">
            Nessun film
          </div>
        </div>        
      </div>
    </main>
  </template>
  
  <style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
  }

  main {
    padding: 15px;
  }

  .category{
    margin-bottom: 20px;
  }

  </style>