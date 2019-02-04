<template>
  <div id="app">
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "app",
  components: {
    SearchBar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.App {
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "Navbar SearchBar SearchBar SearchBar"
    "Navbar Main Main Main"
    "Player Player Player Player";
  grid-template-columns: 3.5rem repeat(3, 2fr);
  grid-template-rows: 2.22rem 1fr 6.375rem;
  background-color: #100e17;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  color: #fff;
}
</style>
