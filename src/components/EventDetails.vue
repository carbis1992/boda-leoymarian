<template>
  <!-- El ID 'event-details' es obligatorio para que funcione el scroll del Hero -->
  <section id="event-details" class="details">
    <div class="details__container">
      <h2 class="details__title">CIVIL Y FIESTA</h2>
      <p class="details__subtitle">Información importante</p>

      <!-- <div class="details__grid"> -->
      <h3 class="details__card-title">La Ceremonia</h3>
      <p class="details__time">19:00 HS</p>
      <p class="details__place-name">Campos de Ibarlucea</p>
      <div class="details__address_copy">
        <p class="details__address_copy__address">
          25 de Mayo 5306 34s, Ibarlucea, Santa Fe, Argentina
        </p>
        <button @click="copyAddress(addressCeremonia, 'ceremonia')" class="details__copy-btn">
          <svg
            v-if="!copiedStatus.ceremonia"
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="details__svg-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.18a2 2 0 0 1 3.64 0H17a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"
            />
          </svg>

          <!-- Icono de Check (Cuando ya se ha copiado con éxito) -->
          <svg
            v-else
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="details__svg-icon details__svg-icon--check"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </button>
      </div>
      <a :href="mapsUrl" target="_blank" rel="noopener noreferrer" class="details__btn">
        ¿Cómo llegar?
      </a>
    </div>
    <!-- </div> -->
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Rutas de Google Maps universales. El navegador/móvil se encarga de abrir la App nativa.
// TIP: Reemplaza los espacios por símbolos '+' para asegurar que la URL sea 100% válida.
const mapsUrl = ref(
  'https://www.google.com/maps/place/Campos+de+Ibarlucea./@-32.8531585,-60.7632909,17z/data=!3m1!4b1!4m6!3m5!1s0x95b651e73eac728b:0x96d38fa9f42ccf70!8m2!3d-32.853163!4d-60.760716!16s%2Fg%2F11cs17bxjl?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D',
)

const addressCeremonia = '25 de Mayo 5306 34s, Ibarlucea, Santa Fe, Argentina'
const copiedStatus = ref({
  ceremonia: false,
  celebracion: false,
})
const copyAddress = async (text, key) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedStatus.value[key] = true

    // El mensaje de "¡Copiado!" vuelve a la normalidad tras 2.5 segundos
    setTimeout(() => {
      copiedStatus.value[key] = false
    }, 2500)
  } catch (err) {
    console.error('Error al copiar la dirección: ', err)
  }
}
</script>

<style lang="scss" scoped>
/* Las variables y mixins ya están inyectados por Vite */

.details {
  @include flex-center; // ¡Ya puedes usar los mixins directamente!
  min-height: 100vh;
  width: 100%;
  text-align: center;
  background-color: $color-light;
  position: relative;

  &__container {
    max-width: 1000px;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    color: $color-dark;

    @include tablet {
      font-size: 3rem;
    }
  }

  &__subtitle {
    font-size: 1rem;
    margin-bottom: 3.5rem;
  }

  &__time {
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  &__place-name {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    color: $color-dark;
  }

  &__address_copy {
    // Corregido (2 guiones)
    justify-content: center;
    align-items: flex-start;
    &__address {
      // Ojo: BEM estricto sugiere no anidar elementos así, pero compilará como .details__address_copy__address
      font-size: 0.9rem;
      margin-bottom: 2rem;
      line-height: 1.4;
    }
  }

  &__copy-btn {
    width: 25px;
    color: gray;
    background: none;
    border: none;
  }

  &__btn {
    display: inline-block;
    width: 100%;
    max-width: 200px;
    padding: 0.8rem 1.5rem;
    background-color: $color-dark;
    color: $color-light;
    text-decoration: none;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
