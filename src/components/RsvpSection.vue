<template>
  <section class="rsvp-section">
    <div class="rsvp-section__container">
      <h2 class="rsvp-section__title">Confirmar Asistencia</h2>
      <p class="rsvp-section__description">
        Por favor, ayúdanos a organizar el gran día confirmando tu asistencia. Es muy importante que
        nos indiques si tienes alguna alergia o restricción alimentaria.
      </p>

      <div class="rsvp-section__actions">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf6m3DPHKi7PUgGK0LbmGKEUI9oG7FetnTu-oAGhNPd14gUBw/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          class="rsvp-section__button"
        >
          Confirmar asistencia
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.rsvp-section {
  padding: 4rem 1.5rem;
  background-color: $color-background;
  display: flex;
  justify-content: center;

  &__container {
    max-width: 800px;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    color: $color-primary;
    text-transform: uppercase;
    letter-spacing: 2px;
    @include tablet {
      font-size: 3rem;
    }
  }

  &__description {
    font-size: 1.1rem;
    color: $color-primary;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  &__form-wrapper {
    position: relative;
    width: 100%;
    background: $color-light;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  &__iframe {
    border: none;
    display: block;
  }

  &__button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: $color-primary;
    color: $color-light;
    text-decoration: none;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition: background-color 0.3s ease;
  }
}
</style>
