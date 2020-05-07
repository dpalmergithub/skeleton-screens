<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983 !important;
  }

  .modal-backdrop {
    opacity: 0.5 !important;
  }

  .modal-header {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center !important;
    position: relative;
  }

  .modal-header .close {
    margin: 0 !important;
    padding: 0 !important;
  }
</style>