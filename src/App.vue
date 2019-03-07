<template>
  <div id="app">
    <SearchBar />
    <Navigation />
    <Main />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import Navigation from "./components/Navigation.vue";
import Main from "./components/Main.vue";

export default {
  name: "app",
  data: function() {
    return {
      tracks: []
    }
  },
  methods: {
    
  },
  components: {
    SearchBar,
    Navigation,
    Main
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "Navbar SearchBar SearchBar SearchBar"
    "Navbar Main Main Main"
    "Player Player Player Player";
  grid-template-columns: 3.5rem repeat(3, 1fr);
  grid-template-rows: 2.22rem 1fr 6.375rem;
  background-color: #100e17;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
}
</style>
