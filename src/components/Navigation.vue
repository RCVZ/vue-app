<template>
  <div class="Navigation-wrapper">
    <div class="Navigation">
      <router-link class="Menu-Button" to="/search/no-results">
        <FontAwesomeIcon icon="search" />
        <span>Search</span>
      </router-link>
      <router-link class="Menu-Button" to="/currentPlaylist">
        <FontAwesomeIcon icon="align-justify" />
        <span>Current </span>
        <span> Playlist </span>
      </router-link>
      <router-link class="Menu-Button" to="/newPlaylist">
        <FontAwesomeIcon icon="plus-square" />
        <span>New </span>
        <span> Playlist </span>
      </router-link>
      <router-link class="Menu-Button" to="/library">
        <FontAwesomeIcon icon="th" />
        <span>Library</span>
      </router-link>
      <router-link class="Menu-Button" to="/userPlaylists">
        <FontAwesomeIcon icon="list-ul" />
        <span>Playlists</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
.Navigation-wrapper {
  grid-area: Navbar;
  height: 100%;
  background-color: #003809;
}

.Mobile-Navigation {
  display: none;
}

.Navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  margin-top: 2rem;
}

.Menu-Button {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
}

.Menu-Button span {
  font-size: 12px;
}

a {
  text-decoration: none;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  transition: 300ms;
}

a:hover {
  color: rgb(255, 255, 255);
  transform: scale(1.21);
}

.active {
  color: rgb(255, 255, 255);
}
</style>
