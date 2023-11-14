  <script>
  import { store } from '../store'
  
    export default {
      props: {
        item: {
          type: Object,
          required: true
        }
      },
      data() {
        return {
          store,
          basePath: 'https://image.tmdb.org/t/p/w342',
        }
      },
      computed: {
        srcFlag() {
          return this.store.flags[this.item.original_language]
        }
      }
    }
  </script>

<template>
    <div class="card">
        <div class="card__img">
            <img v-if="item.poster_path" :src="basePath + item.poster_path" alt="movie img">
            <img v-else src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="movie img">
        </div>
      <ul>
        <li>
            {{ item.title }}
        </li>
        <li>
            {{ item.original_title }}
        </li>
        <li>
          <img class="flags" v-if="store.flags[item.original_language]" :src="store.flags[item.original_language]" alt="Nation Flags">
          <p v-else>{{ item.original_language }}</p>
        </li>
        <li>
            {{ item.vote_average }}
        </li>
      </ul> 
    </div>
  </template>
  
  <style lang="scss" scoped>
  
  .card{
    border: 1px solid black;
    border-radius: 5px;
  }

  .card__img{
    margin-bottom: 20px;
  }
  .flags{
    width: 20px;
  }

  </style>