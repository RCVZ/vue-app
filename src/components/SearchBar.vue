<template>
  <div class="SearchBar">
    <input v-model="searchTerm" placeholder="Enter A Song, Album, or Artist" />
    <button type="submit" v-on:click="submitSearch" name="SEARCH">
      <FontAwesomeIcon class="Search_Button" icon="search" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    submitSearch: function() {
      console.log(this.searchTerm);
    }
  }
};
</script>

<style>
.SearchBar {
  display: flex;
  align-items: center;
  grid-column: 2 / 5;
  justify-content: center;
  height: 2.223rem;
  width: 100%;
  margin: auto;
  background-color: #17141d;
}

.SearchBar input {
  position: relative;
  width: 20rem;
  height: 2rem;
  padding: 0.3rem 0;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #010c3f;
  text-align: center;
  font-size: 1.2rem;
}

.SearchBar .Search_Button {
  position: relative;
  right: 1.6rem;
  color: rgb(0, 8, 33);
}
</style>
