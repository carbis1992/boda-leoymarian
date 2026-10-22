<template>
  <div class="main-wrapper">
    <section class="dress-code">
      <div class="dress-code__container">
        <div class="dress-code__card">
          <img src="../assets/img/musica.png" alt="" />
          <!-- <h3>Formal</h3> -->
          <p class="playlist-section__description">
            Queremos que la fiesta sea inolvidable y que no dejes de bailar. Hemos creado una lista
            colaborativa en Spotify para que añadas tus canciones favoritas. ¡Dale al play e
            inspírate!
          </p>

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
        <!-- <div class="dress-code__card">
          <img src="../assets/img/auto.png" alt="" style="width: 7rem" />
          <h3>Info traslados</h3>
        </div> -->
      </div>
    </section>
  </div>
</template>
<script setup></script>
<!-- <style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.dress-code {
  padding: 4rem 1.5rem;
  // background-color: $color-background;
  background-image: url(/src/assets/img/fondo.jpg);
  background-size: cover;
  // height: 100vh;
  display: flex;
  justify-content: center;
  // align-items: center;
  color: $color-primary;
  &__container {
    max-width: 900px;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 2px;
    @include tablet {
      font-size: 3rem;
    }
  }

  &__subtitle {
    font-size: 1rem;
    color: $color-primary;

    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  &__rules {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  &__card {
    // background: $color-light;
    padding: 2.5rem 2rem;
    border-radius: 12px;
    // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    text-align: left;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      font-size: 1rem;
      color: $color-primary;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.4;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: $color-primary;
        font-size: 1.2rem;
      }
    }

    &--dont {
      li::before {
        color: #c97d7d;
      }
    }
  }

  &__icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style> -->
<style lang="scss" scoped>
@use '@/assets/abstracts' as *;
.main-wrapper {
  height: 100vh;
  background-image: url(/src/assets/img/bailando.png);
  background-size: cover;
  padding: 2rem;
  // background-color: rgba($color-light, 0.9);
  // position: relative;
  // overflow: hidden;
  // isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-evenly;
}
.dress-code {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba($color-light, 0.6);

  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid #eae1d4;
  min-height: 30rem;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }
}
.playlist-section {
  &__button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: $color-primary;
    color: $color-light;
    text-decoration: none;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(129, 81, 19, 0.25);
  }

  &__spotify-icon {
    width: 24px;
    height: 24px;
  }
}

img {
  width: 7rem;
}
</style>
