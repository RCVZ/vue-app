<template>
  <div className="Track">
    <div className="Track-information">
      <div className="Album-img" >
        <img className="shadow" src="track.album.images[2].url" alt="album" /> 
      </div>
      <div className="Track-name">
        <span>{{track.name}}</span>
        <span>{{track.artists}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Track',
  props: ['track']
}
</script>

<style>
.Track {
  display: flex;
  position: absolute;
  cursor: pointer;
  transition: transform 300ms;
  width: 50%;
  height: 100px;
}

.shadow {
  box-shadow: 0 24px 38px 3px rgba(0,0,0,0.50), 0 9px 46px 8px rgba(0,0,0,0.30), 0 11px 15px -7px rgba(0,0,0,0.70);
}

.Track:hover {
  box-shadow: 0 15px 40px 1px rgba(0,0,0,0.30), 0 12px 18px 1px rgba(0,0,0,0.30);
  transform: scale(1.05);
  z-index: 999;
}

.Track-information img {
  height: 3.333rem;
  margin: 0.5rem 1rem 0.5rem 0.33rem;
}

.Track-information {
  display: flex;
  align-items: center;
  width: 100%;
}

.Track-name {
  flex-grow: 4;
}

.Track-information .Time {
  margin-right: 0.50rem;
}
</style>


