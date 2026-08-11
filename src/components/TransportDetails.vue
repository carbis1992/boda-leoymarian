<template>
  <section class="dress-code">
    <div class="dress-code__container">
      <h3 class="dress-code__title">Traslados</h3>

      <div class="dress-code__rules">
        <div class="dress-code__card dress-code__card--do">
          <h3>Transportes sugeridos</h3>
          <ul>
            <li>Transporte 1</li>
            <li>Transporte 2</li>
            <li>Transporte 3</li>
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
  align-items: center;
  color: $color-primary;
  &__container {
    max-width: 900px;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 2rem;
    color: $color-primary;
    margin-bottom: 0.5rem;
    font-family: $font-title;
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

    h3 {
      font-size: 1.4rem;

      margin-bottom: 1.5rem;
      font-family: $font-title;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      font-size: 1rem;
      color: #555;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.4;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #8fa89b;
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
</style>
