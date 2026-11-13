<template>
  <section class="cards-details-wrapper">
    <div class="divider"><span></span></div>
    <div class="cards-details-wrapper__card card-1">
      <div class="cards-details-wrapper__card__content">
        <p class="title">
          AYUDANOS CONFIRMANDO <span>tu</span> ASISTENCIA
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6m3DPHKi7PUgGK0LbmGKEUI9oG7FetnTu-oAGhNPd14gUBw/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            >ACÁ</a
          >
        </p>

        <p class="disclaimer">
          En caso de tener alguna alergia o restricción alimentartia, por favor, indicanos
        </p>
        <p class="footer">- Leo & Marian</p>
      </div>
    </div>
    <div class="cards-details-wrapper__card card-2">
      <div class="cards-details-wrapper__card__content">
        <p class="title">
          <span style="font-size: 35px">dress</span>CODE: <br />
          <a href="#">FORMAL</a>
          <br />
        </p>
        <p class="disclaimer">
          <span class="dress">IMP:</span> evitar tonos blancos & derivados (colores pastel)
        </p>
      </div>
    </div>
    <div class="cards-details-wrapper__card card-3">
      <div class="cards-details-wrapper__card__content">
        <p class="title">
          TRASLADO <br />
          <span>hacia</span> EL EVENTO
        </p>

        <p class="disclaimer">
          Op. 01 -- (341) 5602 984 <CopyBtn copyText="+5493415602984" /> <br />
          Op. 02 -- (341) 6892 897 <CopyBtn copyText="+5493416892897" /> <br />
          Op. 03 -- (341) 6400 185 <CopyBtn copyText="+5493416400185" /> <br />
        </p>
        <p class="footer" style="font-size: 12px">
          - les acercamos opciones, <br />
          en caso de que les sea de ayuda -
        </p>
      </div>
    </div>
    <div class="divider"><span style="height: 125px"></span></div>
  </section>
</template>
<script setup>
import CopyBtn from '../copyBtn.vue'
</script>
<style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.cards-details-wrapper {
  height: 100vh;
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

  .divider {
    display: flex;
    justify-content: center;
    height: 90px;
    span {
      display: block;
      width: 0.5px;
      height: 90px;
      background-color: $color-primary;
    }
  }
  &__card {
    width: 80%;
    height: 25%;
    margin: auto;
    border: 1px solid;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);

    p {
      letter-spacing: 1px;
      font-size: 1rem;
      span {
        font-family: $font-script;
        font-size: 30px;
      }
      .dress {
        font-family: $font-body;
        font-size: 12px;
        font-weight: 600;
      }
      a {
        text-decoration: underline;
      }
    }
    .disclaimer {
      font-size: 12px;
      text-transform: uppercase;
    }
    &__content {
      margin: auto;
      width: 80%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 95%;
    }
  }

  .card-1 {
    background-image: url(/src/assets/img/fondo-papel.jpeg);
    transform: rotate(-10deg);
    z-index: 1;
  }

  .card-2 {
    transform: rotate(10deg);
    z-index: 0;
    background-image: url(/src/assets/img/fondo-papel.jpeg);
  }

  .card-3 {
    transform: rotate(-10deg);
    z-index: 2;
    background-image: url(/src/assets/img/fondo-papel.jpeg);
  }
}
</style>
