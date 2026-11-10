<template>
  <section class="details-page">
    <div class="details-page__content">
      <div class="divider"><span></span></div>
      <div class="wrapper-details">
        <p class="details">
          CAMPOS <span>de</span> IBARLUCEA <br />
          25 de MAYO 5306 34s <br />
          a las 19hs
        </p>
        <img src="/src/assets/img/back1.png" alt="imagen-salon" />
      </div>

      <div class="details-page__directions">
        <div class="details-page__directions__buttons">
          <button @click="openGoogleCalendar">
            <img src="/src/assets/img/agendar-btn.svg" alt="agendar" />
          </button>
          <a :href="mapsUrl" target="_blank" rel="noopener noreferrer" class="details__btn">
            <img src="/src/assets/img/como-llegar-btn.svg" alt="como-llegar" />
          </a>
        </div>
      </div>
      <div class="divider"><span style="height: 40vh"></span></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const mapsUrl = ref(
  'https://www.google.com/maps/place/Campos+de+Ibarlucea./@-32.8531585,-60.7632909,17z/data=!3m1!4b1!4m6!3m5!1s0x95b651e73eac728b:0x96d38fa9f42ccf70!8m2!3d-32.853163!4d-60.760716!16s%2Fg%2F11cs17bxjl?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D',
)

function openGoogleCalendar() {
  const dates = `${toUTCString(eventData.start)}/${toUTCString(eventData.end)}`
  const url = new URL('https://calendar.google.com/calendar/render')
  url.searchParams.set('action', 'TEMPLATE')
  url.searchParams.set('text', eventData.title)
  url.searchParams.set('dates', dates)
  url.searchParams.set('details', eventData.description)
  url.searchParams.set('location', eventData.location)

  window.open(url.toString(), '_blank')
}

function toUTCString(dateStr) {
  const date = new Date(dateStr)
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

const eventData = {
  title: 'Boda LyM',
  description: 'Boda Leo y Marian - Campos de Ibarlucea',
  location: '25 de Mayo 5306, Ibarlucea, Santa Fe',
  start: '2027-02-06T19:00:00',
  end: '2027-02-07T03:00:00',
}
</script>
<style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.details-page {
  height: 100vh;
  background-image: url(/src/assets/img/fondo-papel.jpeg);

  &__content {
    .divider {
      display: flex;
      justify-content: center;
      height: 90px;
      span {
        display: block;
        width: 1.5px;
        height: 90px;
        background-color: $color-primary;
      }
    }
    img {
      border: 1.5px solid $color-primary;
      padding: 5px;
    }
    .wrapper-details {
      margin: auto;
      border: 1px solid;
      width: 90%;
      padding: 4px;
    }
    .details {
      position: absolute;
      justify-self: center;
      margin-top: 1.5rem;
      text-align: center;
      letter-spacing: 2px;
      span {
        font-family: $font-script;
        font-size: 30px;
      }
    }
  }
  &__directions {
    width: 90%;
    margin: auto;
    border: 1.5px solid $color-primary;
    padding: 4px;
    min-height: 100px;
    margin-top: 2rem;
    &__buttons {
      display: flex;
      width: 100%;
      border: 1px solid;
      padding: 8px;
      justify-content: space-around;
      img {
        width: 6rem;
        border: none;
        padding: 0;
      }
      button {
        text-decoration: none;
        background: none;
        border: none;
      }
    }
  }
}
</style>
