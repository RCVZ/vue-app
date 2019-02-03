<template>
      <div className='SearchBar'>
        <input v-model="searchTerm" placeholder="Enter A Song, Album, or Artist">
        <button type="submit" v-on:click="test" name="SEARCH">
        </button>
      </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
