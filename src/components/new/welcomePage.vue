<template>
  <section class="welcome-page">
    <div class="welcome-page__title">
      <p>SAVE <span class="title-span">our</span> DATE</p>
    </div>
    <div class="welcome-page__subtitle">
      <p>
        Sábado 06 <br />
        <span class="subtitle-span">de</span> Febrero, 2027
      </p>
      <p>19:00 hrs</p>
    </div>
  </section>
</template>
<script setup></script>
<style lang="scss" scoped>
@use '@/assets/abstracts' as *;
.welcome-page {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  background-color: rgba($color-light, 0.9);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding-bottom: 2rem;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/src/assets/img/fondo-foto.jpeg');
    background-position: center 45%;
    background-size: cover;
    filter: grayscale(100%) brightness(0.9);

    z-index: 0;
  }

  &__title {
    position: absolute;
    top: 50%;
    p {
      font-size: 2rem;
      color: $color-light;
      font-family: $font-title;
      letter-spacing: 2px;
      text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.35);
    }
    .title-span {
      position: relative;
      display: inline-block;
      font-family: $font-script;
      font-size: clamp(5.5rem, 12vw, 7rem);
      font-style: italic;
      line-height: 0.8;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0.08em;
        left: 0;
        height: 2px;
        background-color: $color-primary;
      }
    }
  }
  &__subtitle {
    position: absolute;
    bottom: 5%;
    p {
      font-size: 1.3rem;
      color: $color-light;
      font-family: $font-body;
      letter-spacing: 1px;
      text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.35);
    }
    .subtitle-span {
      font-family: $font-script;
      font-size: 2rem;
      font-style: italic;
    }
  }
}
</style>
