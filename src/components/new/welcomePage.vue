<template>
  <section class="welcome-page">
    <div class="data">
      <img
        style="width: 80%; margin: 0 auto"
        src="/src/assets/img/save-our-date.svg"
        alt="save-our-date"
      />
      <img style="width: 65%; margin: 0 auto" src="/src/assets/img/fecha.svg" alt="save-our-date" />
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

  .data {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    row-gap: 31vh;
    z-index: 1;
    img {
      width: 100%;
      z-index: 1;
    }
  }
}
</style>
