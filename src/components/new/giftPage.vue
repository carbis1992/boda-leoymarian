<template>
  <section class="gift-section">
    <div class="gift-card">
      <div class="gift-card__content">
        <img src="/src/assets/img/last-regalo-tarjeta.svg" alt="tarjeta" />
      </div>
      <div class="popup-wrapper">
        <button class="close-popup" @click="clearPopup"><span></span></button>
        <p
          v-if="copyToast"
          class="copy-toast"
          role="status"
          aria-live="polite"
          :class="showModalEuros ? 'copy-iban' : ''"
        >
          {{ copyToast }}
        </p>
        <img v-if="showModalPesos" src="/src/assets/img/pesos-popup.svg" alt="regalo" />
        <img v-if="showModalDolares" src="/src/assets/img/usd-popup.svg" alt="regalo" />
        <img v-if="showModalEuros" src="/src/assets/img/eur-popup.svg" alt="regalo" />
        <button
          v-if="showModalPesos"
          class="copy-alias"
          style="top: 55%; right: 31%"
          @click="copyText('bodalym.', 'Alias')"
        >
          <span></span>
        </button>

        <button
          v-if="showModalPesos"
          class="copy-alias"
          style="top: 63%; right: 21%"
          @click="copyText('0000230305450046871520', 'CVU')"
        >
          <span></span>
        </button>

        <button
          v-if="showModalDolares"
          class="copy-alias"
          style="top: 55%; right: 28%"
          @click="copyText('bodalym.usd', 'Alias')"
        >
          <span></span>
        </button>

        <button
          v-if="showModalDolares"
          style="top: 63%; right: 21%"
          class="copy-alias"
          @click="copyText('3220001888027457910014', 'CBU')"
        >
          <span></span>
        </button>

        <button
          v-if="showModalEuros"
          class="copy-alias"
          style="top: 55%; right: 25%"
          @click="copyText('BE94967415853514', 'IBAN')"
        >
          <span></span>
        </button>
      </div>
    </div>

    <div class="btn-gift">
      <button @click="showPesosModal" style="cursor: pointer">
        <img src="/src/assets/img/last-pesos-btn.svg" alt="regalo" />
      </button>
      <button @click="showDolaresModal" style="cursor: pointer">
        <img src="/src/assets/img/last-btn-dol.svg" alt="regalo" />
      </button>

      <button @click="showEurosModal" style="cursor: pointer">
        <img src="/src/assets/img/last-btn-eur.svg" alt="regalo" />
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const showModalPesos = ref(false)
const showModalDolares = ref(false)
const showModalEuros = ref(false)
const copyToast = ref('')
let toastTimeout = 0

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

const copyText = async (text, itemType) => {
  try {
    await navigator.clipboard.writeText(text)
    copyToast.value = `${itemType} copiado`
  } catch (error) {
    console.error('Error al copiar el texto: ', error)
    copyToast.value = 'No se pudo copiar el texto'
  }

  window.clearTimeout(toastTimeout)
  toastTimeout = window.setTimeout(() => {
    copyToast.value = ''
  }, 1200)
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
  height: 235px;
  background-size: cover;

  &__content {
    width: 65%;
    padding-top: 9%;
    transform: rotate(-6deg);

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
    width: 30px;
    height: 20px;
    border: none;
    background: none;
    span {
      width: 90px;
      height: 40px;
    }
  }
}

.copy-toast {
  padding: 4px;
  font-size: 12px;
  background: rgba(236, 233, 227, 0.9);
  border-radius: 0.5rem;
  border: 0.5px solid;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  position: absolute;
  top: 75%;
  left: 40%;

  width: fit-content;
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
