<template>
  <section class="spotify-wrapper">
    <div class="divider"><span style="height: 8vh"></span></div>
    <div class="spotify-details">
      <div class="btn-spotify">
        <a :href="spotifyUrl" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <img src="/src/assets/img/spoti1.svg" alt="spotify" />
      <div class="btn-spotify2">
        <a :href="spotifyUrl" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const spotifyUrl = ref(
  'https://open.spotify.com/playlist/2vvNjx549hyddowS9Tx8hv?si=wiXTAJiPR6O9BJWgW1v9-Q&utm_source=whatsapp&nd=1&dlsi=908d6f97e66840e3',
)
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

  .btn-spotify2 {
    position: absolute;
    bottom: 16%;
    left: 27%;
    height: 40px;
    a {
      display: block;
          height: 40px;
          width: 72px;
    }
  }
}
@include desktop {
  .spotify-wrapper {
    .spotify-details {
      width: 20%;
    }
  }
}
</style>
