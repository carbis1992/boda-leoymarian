<template>
  <section class="gift-section">
    <div class="gift-card">
      <!-- <img src="/src/assets/img/zocalo-regalo.svg" alt="regalo" /> -->
      <!-- <p>texto</p> -->
      <div class="popup-wrapper">
        <button class="close-popup" @click="clearPopup"><span></span></button>
        <img v-if="showModalPesos" src="/src/assets/img/popup-pesos.svg" alt="regalo" />
        <img v-if="showModalDolares" src="/src/assets/img/popup-dol.svg" alt="regalo" />
        <img v-if="showModalEuros" src="/src/assets/img/popup-eur.svg" alt="regalo" />
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
<script script setup>
import { ref } from 'vue'

const showModalPesos = ref(false)
const showModalDolares = ref(false)
const showModalEuros = ref(false)

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
  .close-popup {
    position: absolute;
    right: 25px;
    width: 30px;
    height: 30px;
    top: 50px;
    border: none;
    background: none;
    span {
      width: 40px;
      height: 30px;
    }
  }
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
</style>
