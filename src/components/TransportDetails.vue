<template>
  <div class="main-wrapper">
    <section class="dress-code">
      <div class="dress-code__container">
        <div class="dress-code__card">
          <img src="../assets/img/percha.png" alt="" />
          <h3>Formal</h3>
          <p>Evitar los tonos blancos y sus derivados, así como los colores pastel.</p>
        </div>
        <div class="dress-code__card">
          <img src="../assets/img/auto.png" alt="" style="width: 7rem" />
          <h3>Info traslados</h3>
          <p class="traslados-detail">
            Fabián: +54 9 3416 89-2897 Ariel: +54 9 3415 60-2984 Gabriel: +54 9 3416 40-0185
          </p>
        </div>
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
  background-image: url(/src/assets/img/ilustracion.jpg);
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

    p {
      text-align: center;
    }

    .traslados-detail {
      display: flex;
      flex-direction: column;
    }
  }
}

img {
  width: 8rem;
}
</style>
