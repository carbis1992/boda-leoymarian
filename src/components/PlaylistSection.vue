<template>
  <section class="playlist-section">
    <div class="playlist-section__container">
      <div class="playlist-section__icon-header">🎵</div>
      <h2 class="playlist-section__title">¡Ayúdanos con la Música!</h2>

      <p class="playlist-section__description">
        Queremos que la fiesta sea inolvidable y que no dejes de bailar. Hemos creado una lista
        colaborativa en Spotify para que añadas tus canciones favoritas. ¡Dale al play e inspírate!
      </p>

      <!-- Botón de acción para añadir canciones -->
      <div class="playlist-section__actions">
        <a
          :href="spotifyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="playlist-section__button"
        >
          <svg
            class="playlist-section__spotify-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://w3.org"
          >
            <path
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.894-.982-.336.075-.668-.135-.744-.47-.075-.336.135-.668.47-.743 3.856-.88 7.15-.51 9.822 1.13.296.18.387.563.206.858zm1.224-2.723c-.226.367-.706.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.108-.847.52-.972 3.67-1.114 8.24-.57 11.35 1.344.366.226.486.706.26 1.07zm.105-2.833C14.39 8.81 8.57 8.618 5.174 9.65a.9.9 0 0 1-1.084-.66c-.147-.482.13-.99.613-1.135 3.896-1.183 10.33-.96 14.385 1.45.44.26.584.823.323 1.263a.897.897 0 0 1-1.225.323z"
            />
          </svg>
          Añadir canciones a la lista
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Reemplaza esto con el enlace real a tu lista colaborativa de Spotify
const spotifyUrl = ref('https://open.spotify.com/playlist/3Li5QxraUSaqpXtsX4sa7P')
</script>

<style lang="scss" scoped>
.playlist-section {
  padding: 5rem 1.5rem;
  background-color: #ffffff; // Fondo blanco limpio para alternar secciones
  display: flex;
  justify-content: center;

  &__container {
    max-width: 650px;
    width: 100%;
    text-align: center;
  }

  &__icon-header {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
    font-family: serif;
  }

  &__description {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  &__widget {
    margin-bottom: 2.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    overflow: hidden;
    background-color: #282828; // Evita parpadeos blancos mientras carga el iframe
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background-color: #1db954; // Color corporativo oficial de Spotify
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(29, 185, 84, 0.25);

    &:hover {
      background-color: #1ed760;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(29, 185, 84, 0.35);
    }
  }

  &__spotify-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
