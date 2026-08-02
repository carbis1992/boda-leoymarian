<template>
  <section class="gift-section">
    <div class="gift-section__container">
      <div class="gift-section__icon-header">🎁</div>
      <h2 class="gift-section__title">Mesa de Regalos</h2>

      <p class="gift-section__description">
        Tu presencia en nuestra boda es el mejor regalo que podríamos pedir. Sin embargo, si deseas
        tener un detalle con nosotros y ayudarnos en nuestra luna de miel, puedes hacerlo a través
        de la siguiente cuenta bancaria:
      </p>

      <div class="gift-section__card">
        <!-- Fila de Titular -->
        <div class="gift-section__info-row">
          <span class="gift-section__label">Titular:</span>
          <span class="gift-section__value">Nombre de los Novios</span>
        </div>

        <!-- Fila de Cuenta / IBAN con botón de copiar -->
        <div class="gift-section__info-row">
          <span class="gift-section__label">Cuenta Bancaria (IBAN):</span>
          <div class="gift-section__copy-wrapper">
            <span class="gift-section__value font-mono">{{ bankDetails.iban }}</span>
            <button
              @click="copyToClipboard(bankDetails.iban, 'iban')"
              class="gift-section__copy-btn"
              :class="{ 'gift-section__copy-btn--success': copiedStatus.iban }"
              title="Copiar IBAN"
            >
              <!-- Ícono Dinámico: Check si está copiado, Portapapeles si no -->
              <svg
                v-if="copiedStatus.iban"
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="gift-section__svg-icon"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <svg
                v-else
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="gift-section__svg-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 0 1 3.548 0c1.131.094 1.976 1.057 1.976 2.192V7.5M5.25 7.5h13.5A2.25 2.25 0 0 1 21 9.75v10.5A2.25 2.25 0 0 1 18.75 22.5h-13.5A2.25 2.25 0 0 1 3 20.25V9.75A2.25 2.25 0 0 1 5.25 7.5z"
                />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 11.25h6M9 15h6" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Fila de Alias / Bizum (Opcional, muy útil en España/LATAM) -->
        <div class="gift-section__info-row">
          <span class="gift-section__label">Alias o Referencia:</span>
          <div class="gift-section__copy-wrapper">
            <span class="gift-section__value">{{ bankDetails.alias }}</span>
            <button
              @click="copyToClipboard(bankDetails.alias, 'alias')"
              class="gift-section__copy-btn"
              :class="{ 'gift-section__copy-btn--success': copiedStatus.alias }"
              title="Copiar Alias"
            >
              <svg
                v-if="copiedStatus.alias"
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="gift-section__svg-icon"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <svg
                v-else
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="gift-section__svg-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 0 1 3.548 0c1.131.094 1.976 1.057 1.976 2.192V7.5M5.25 7.5h13.5A2.25 2.25 0 0 1 21 9.75v10.5A2.25 2.25 0 0 1 18.75 22.5h-13.5A2.25 2.25 0 0 1 3 20.25V9.75A2.25 2.25 0 0 1 5.25 7.5z"
                />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 11.25h6M9 15h6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Modifica estos datos con tu información real
const bankDetails = ref({
  iban: 'ES21 1234 5678 9012 3456 7890',
  alias: 'boda.novios.2026',
})

// Control individual para saber qué campo ha sido copiado
const copiedStatus = ref({
  iban: false,
  alias: false,
})

const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedStatus.value[type] = true

    // Regresa el ícono a la normalidad tras 2 segundos
    setTimeout(() => {
      copiedStatus.value[type] = false
    }, 2000)
  } catch (err) {
    console.error('Error al copiar el texto: ', err)
  }
}
</script>

<style lang="scss" scoped>
.gift-section {
  padding: 5rem 1.5rem;
  background-color: #fdfbf7; // Tono crema suave de fondo
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
    margin-bottom: 3rem;
  }

  &__card {
    background: #ffffff;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    border: 1px solid #eae1d4;
    text-align: left;
  }

  &__info-row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.2rem 0;
    border-bottom: 1px dashed #eae1d4;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    &:first-child {
      padding-top: 0;
    }
  }

  &__label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #8fa89b; // Verde suave de boda
    font-weight: 600;
  }

  &__value {
    font-size: 1.2rem;
    color: #444;
    word-break: break-all;

    &.font-mono {
      font-family: monospace;
      letter-spacing: 0.5px;
    }
  }

  &__copy-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: #fbfaf8;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid #f0eae1;
  }

  &__copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #888;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #f0eae1;
      color: #333;
    }

    &--success {
      color: #58a375 !important;
      background: #eef7f1 !important;
    }
  }

  &__svg-icon {
    width: 20px;
    height: 20px;
  }
}

// Adaptación móvil para que las filas no se rompan bruscamente
@media (min-width: 480px) {
  .gift-section__copy-wrapper {
    flex-grow: 1;
  }
}
</style>
