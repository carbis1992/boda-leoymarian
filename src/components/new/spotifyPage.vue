<template>
  <section class="spotify-wrapper">
    <div class="divider"><span></span></div>
    <div class="spotify-details">
      <div class="btn-spotify">
        <a :href="spotifyUrl" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <img src="/src/assets/img/spotify.svg" alt="spotify" />
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const spotifyUrl = ref('https://open.spotify.com/playlist/3Li5QxraUSaqpXtsX4sa7P')
</script>
<style lang="scss">
@use '@/assets/abstracts' as *;

.spotify-wrapper {
  //   height: 100vh;
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
      url(/src/assets/img/fondo-papel.jpeg);
    background-repeat: round;
  }

  .divider {
    display: flex;
    justify-content: center;
    // height: 30px;
    span {
      display: block;
      width: 0.5px;
      height: 90px;
      background-color: $color-primary;
    }
  }

  .spotify-details {
    position: relative;
    width: 80%;
    justify-self: center;
    margin: auto;
    background: #5c1d301f;
    border-radius: 45px;
  }

  .btn-spotify {
    position: absolute;
    top: 40%;
    left: 40%;
    a {
      display: block;
      width: 62px;
      height: 58px;
    }
  }
}
</style>
