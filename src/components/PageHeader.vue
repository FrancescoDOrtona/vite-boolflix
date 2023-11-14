   <script>
    import { store } from '../store'
  
    export default {
      data() {
        return {
          store: store
        }
      }  
    }
  </script>

<template>
    <header>
      <nav class="nav container">
        <div class="title">
            <img class="title__icon" src="/title-icon.jpg" alt="">
            <h2 class="title__name">
              Boolflix
            </h2>
        </div>
        <input type="text" @keyup.enter="$emit('search')" v-model.trim="store.searchText" placeholder="Cerca un film">
      </nav>
    </header>
  </template>
  
  <style lang="scss" scoped>
  
  header {
    background-color: black;
    color: white;
    padding: 15px;
  }

  .title{
    display: flex;
    align-items: center;
  }
  .title__name{
    font-size: 30px;
    font-weight: bold;
  }

  .title__icon{
    width: 50px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  </style>