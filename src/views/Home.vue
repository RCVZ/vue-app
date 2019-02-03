<template>
      <div class='SearchBar'>
        <input v-model="searchTerm" placeholder="Enter A Song, Album, or Artist">
        <button type="submit" v-on:click="test" name="SEARCH">
        </button>
      </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// };
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
  /* background-color: rgba(0, 0, 0, 0); */
}

.SearchBar input {
  position: relative;
  width: 20rem;
  height: 2rem;
  padding: .30rem 0;
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
