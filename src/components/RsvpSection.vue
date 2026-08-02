<template>
  <section class="rsvp-section">
    <div class="rsvp-section__container">
      <h2 class="rsvp-section__title">Confirmar Asistencia</h2>
      <p class="rsvp-section__description">
        Por favor, ayúdanos a organizar el gran día confirmando tu asistencia. Es muy importante que
        nos indiques si tienes alguna alergia o restricción alimentaria.
      </p>

      <!-- Opción A: Formulario incrustado directamente en la web (Recomendado por UX) -->
      <!-- <div class="rsvp-section__form-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf6m3DPHKi7PUgGK0LbmGKEUI9oG7FetnTu-oAGhNPd14gUBw/viewform?usp=publish-editor"
          width="100%"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          class="rsvp-section__iframe"
        >
          Cargando formulario…
        </iframe>
      </div> -->

      <!-- Opción B: Botón externo (Descomenta esto y borra el iframe si prefieres que se abra fuera) -->

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

<script setup>
// No se necesita lógica compleja de estado ya que Google Forms maneja los datos
</script>

<style lang="scss" scoped>
.rsvp-section {
  padding: 4rem 1.5rem;
  background-color: #fdfbf7; // Un tono cálido/boda de fondo
  display: flex;
  justify-content: center;

  &__container {
    max-width: 800px;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
    font-family: serif; // O la fuente elegante de tu proyecto
  }

  &__description {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  &__form-wrapper {
    position: relative;
    width: 100%;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  &__iframe {
    border: none;
    display: block;
  }

  // Estilos por si decides usar la Opción B (Botón)
  &__button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: #8fa89b; // Color verde sage / elegante de boda
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #768d81;
    }
  }
}
</style>
