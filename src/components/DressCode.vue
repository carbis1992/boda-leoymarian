<template>
  <section class="dress-code">
    <div class="dress-code__container">
      <h3 class="dress-code__title">Dress code</h3>

      <div class="dress-code__rules">
        <div class="dress-code__card dress-code__card--do">
          <h3>Formal - Elegante</h3>
          <ul>
            <li>Trajes oscuros o de etiqueta.</li>
            <li>Vestidos largos o de cóctel.</li>
            <li>Colores vivos, alegres o neutros oscuros.</li>
            <li>
              El blanco, marfil y los colores pasteles muy claritos están reservados exclusivamente
              para la novia.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.dress-code {
  padding: 4rem 1.5rem;
  background-color: $color-background;
  display: flex;
  justify-content: center;
  // height: 100vh;
  align-items: center;
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
    background: $color-light;
    padding: 2.5rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
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
  }

  &__icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
