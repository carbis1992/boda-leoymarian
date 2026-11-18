<template>
  <section class="cards-details-wrapper">
    <div class="divider"><span></span></div>
    <div class="cards-details-wrapper__card card-1">
      <img src="/src/assets/img/tarjeton-1.svg" alt="tarjeta1" />

      <a
        class="hide-btn"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfDkXTYUenf7EJ0ciFlxLktTxw-Hq2HJKbPzk5806DDv-gW2A/viewform?usp=sharing&ouid=110733723237711490684"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
    <div class="cards-details-wrapper__card card-2">
      <img src="/src/assets/img/tarjeton-2.svg" alt="tarjeta2" />
    </div>
    <div class="cards-details-wrapper__card card-3">
      <img src="/src/assets/img/tarjeton-3.svg" alt="tarjeta3" />
    </div>
    <div class="divider"><span style="height: 190px"></span></div>
  </section>
</template>
<script setup></script>
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
    height: 75px;
    span {
      display: block;
      width: 0.5px;
      height: 90px;
      background-color: $color-primary;
    }
  }
  &__card {
    width: 80%;
    margin: auto;
    border: 1px solid;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);

    .hide-btn {
      position: absolute;
      top: 38%;
      left: 62%;
      width: 75px;
      height: 30px;

      border: none;
      background: none;
      text-decoration: none;
    }

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
@include desktop {
  .cards-details-wrapper {
    height: auto;
  }
  .cards-details-wrapper__card {
    width: 25%;
  }
}
</style>
