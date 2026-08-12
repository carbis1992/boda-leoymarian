<template>
  <section class="gift-section">
    <div class="gift-section__container">
      <h3 class="gift-section__title">REGALO</h3>

      <p class="gift-section__description">
        Tu presencia en nuestra boda es el mejor regalo que podríamos pedir. Sin embargo, si deseas
        tener un detalle con nosotros y ayudarnos en nuestra luna de miel, puedes hacerlo a través
        de la siguiente cuenta bancaria:
      </p>

      <div class="gift-section__card">
        <div class="gift-section__info-row">
          <span class="gift-section__label">Titular:</span>
          <span class="gift-section__value" style="font-size: 1rem">Nombre de los Novios</span>
        </div>

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

const bankDetails = ref({
  iban: 'ES21 1234 5678 9012 3456 7890',
  alias: 'boda.novios.2026',
})

const copiedStatus = ref({
  iban: false,
  alias: false,
})

const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedStatus.value[type] = true

    setTimeout(() => {
      copiedStatus.value[type] = false
    }, 2000)
  } catch (err) {
    console.error('Error al copiar el texto: ', err)
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.gift-section {
  padding: 5rem 1.5rem;
  background-color: $color-background;
  display: flex;
  justify-content: center;
  color: $color-primary;
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

  &__description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    color: $color-primary;
  }

  &__card {
    background: $color-light;
    color: $color-primary;

    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    border: 1px solid #eae1d4;
    text-align: left;
  }

  &__info-row {
    color: $color-primary;

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
    color: $color-primary;

    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  &__value {
    color: $color-primary;
    font-size: 0.8rem;

    word-break: break-all;

    &.font-mono {
      color: $color-primary;

      font-family: $font-body;
      letter-spacing: 0.04em;
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
    color: $color-primary;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &--success {
      color: $color-primary !important;
    }
  }

  &__svg-icon {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: 480px) {
  .gift-section__copy-wrapper {
    flex-grow: 1;
  }
}
</style>
