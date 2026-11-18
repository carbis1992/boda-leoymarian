<template>
  <section class="gift-section">
    <div class="gift-card">
      <div class="gift-card__content">
        <p class="title">
          TU PRESENCIA ES <br />
          NUESTRO <span class="mejor">mejor</span> <br />
          REGALO
        </p>

        <p class="disclaimer">
          SIN EMBARGO, SI DESEAS TENER UN DETALLE CON NOSOTROS & AYUDARNOS CON NUESTRA LUNA DE MIEL,
          PODÉS HACERLO A TRAVÉS DE LAS SIGUIENTES CUENTAS BANCARIAS:
        </p>
      </div>
      <div class="popup-wrapper">
        <button class="close-popup" @click="clearPopup"><span></span></button>
        <p v-if="copyToast" class="copy-toast" role="status" aria-live="polite">{{ copyToast }}</p>
        <img v-if="showModalPesos" src="/src/assets/img/popup-pesos.svg" alt="regalo" />
        <img v-if="showModalDolares" src="/src/assets/img/popup-dol.svg" alt="regalo" />
        <img v-if="showModalEuros" src="/src/assets/img/popup-eur.svg" alt="regalo" />
        <button v-if="activeCopyText" class="copy-alias" @click="copyText"><span></span></button>
      </div>
    </div>

    <div class="btn-gift">
      <button @click="showPesosModal">
        <img src="/src/assets/img/cuenta-pesos.svg" alt="regalo" />
      </button>
      <button @click="showDolaresModal">
        <img src="/src/assets/img/cuenta-dol.svg" alt="regalo" />
      </button>

      <button @click="showEurosModal">
        <img src="/src/assets/img/cuenta-eur.svg" alt="regalo" />
      </button>
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from 'vue'

const showModalPesos = ref(false)
const showModalDolares = ref(false)
const showModalEuros = ref(false)
const copyToast = ref('')
let toastTimeout = 0

const activeCopyText = computed(() => {
  if (showModalPesos.value) return 'bodalym.'
  if (showModalDolares.value) return 'bodalym.usd'
  if (showModalEuros.value) return 'BE94967415853514'
  return ''
})

const showPesosModal = () => {
  showModalDolares.value = false
  showModalEuros.value = false
  showModalPesos.value = true
}

const showDolaresModal = () => {
  showModalPesos.value = false
  showModalEuros.value = false
  showModalDolares.value = true
}
const showEurosModal = () => {
  showModalDolares.value = false
  showModalPesos.value = false
  showModalEuros.value = true
}

const clearPopup = () => {
  showModalDolares.value = false
  showModalPesos.value = false
  showModalEuros.value = false
}

const copyText = async () => {
  const text = activeCopyText.value
  if (!text) return

  try {
    await navigator.clipboard.writeText(text)
    copyToast.value = showModalEuros.value ? 'IBAN copiado' : 'Alias copiado al portapapeles'
  } catch (error) {
    console.error('Error al copiar el texto: ', error)
    copyToast.value = 'No se pudo copiar el texto'
  }

  window.clearTimeout(toastTimeout)
  toastTimeout = window.setTimeout(() => {
    copyToast.value = ''
  }, 2500)
}
</script>
<style lang="scss" scoped>
.gift-section {
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
      url(/src/assets/img/fondo-papel.jpeg);
    background-repeat: round;
    transform: rotate(180deg);
  }
}
.gift-card {
  background-image: url(/src/assets/img/zocalo-regalo.svg);
  /* width: 100%; */
  height: 300px;
  background-size: cover;

  &__content {
    width: 80%;
    margin: auto;
    padding-top: 24%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    height: stretch;
    transform: rotate(-6deg);
    gap: 30px;
    text-align: center;
    align-items: flex-start;

    .disclaimer {
      font-size: 12px;
      font-family: $font-body;
      letter-spacing: 1px;
    }

    .mejor {
      font-size: 30px;
      font-family: $font-script;
      font-weight: 100;
    }

    .title {
      line-height: 1;
      font-size: 16px;
      margin-left: 1.5rem;
    }
  }
  .popup-wrapper {
    position: absolute;
    top: -53%;
    z-index: 13;
    width: 100%;
  }
  .close-popup {
    position: absolute;
    right: 25px;
    width: 65px;
    height: 65px;
    top: 10px;
    border: none;
    background: none;
    span {
      width: 40px;
      height: 30px;
    }
  }
  .copy-alias {
    position: absolute;
    right: 78px;
    width: 242px;
    height: 160px;
    top: 80px;
    border: none;
    background: none;
    span {
      width: 90px;
      height: 40px;
    }
  }
}

.copy-toast {
  z-index: 20;
  position: sticky;
  width: max-content;
  margin: auto;
  padding: 8px;
  font-size: 16px;
  background: rgba(236, 233, 227, 0.9);
  border-radius: 0.5rem;
  border: 0.5px solid;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  position: absolute;
  justify-self: center;
  top: 75%;
}
.btn-gift {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;

  button {
    border: none;
    background: none;
    width: 20%;
  }

  img {
    width: 100%;
  }
}
@include desktop {
  .gift-section {
    .gift-card {
      width: 31%;
      height: 345px;
      justify-self: center;

      .close-popup {
        cursor: pointer;
      }

      .popup-wrapper {
        width: 31%;
      }

      .copy-alias {
        right: 127px;
        width: 242px;
        height: 247px;
        top: 121px;
        cursor: pointer;
      }
    }
    .btn-gift {
      width: 30%;
      justify-self: center;
    }
  }
}
</style>
