<template>
  <div class="SearchBar">
    <input v-model="searchTerm" placeholder="Enter A Song, Album, or Artist" />
    <button
      class="Search_Button"
      type="submit"
      v-on:click="submitSearch"
      name="SEARCH"
    />
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

<style scoped>
.SearchBar {
  display: flex;
  align-items: center;
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
  background-color: rgb(33, 0, 0);
  height: 20px;
  width: 20px;
}
</style>
