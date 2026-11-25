<template>
  <section class="details-page">
    <div class="details-page__content">
      <div class="divider"><span style="height: 15vh"></span></div>
      <div class="wrapper-details">
        <img class="details" src="/src/assets/img/lugar-peque.svg" alt="save-our-date" />

        <img src="/src/assets/img/back1.png" alt="imagen-salon" />
      </div>

      <div class="details-page__directions">
        <div class="details-page__directions__buttons">
          <button @click="openGoogleCalendar" style="cursor: pointer">
            <img src="/src/assets/img/btn-agendar.svg" alt="agendar" />
          </button>
          <a :href="mapsUrl" target="_blank" rel="noopener noreferrer" class="details__btn">
            <img src="/src/assets/img/como-llego-btn.svg" alt="como-llegar" />
          </a>
        </div>
      </div>
      <div class="details-page__directions" style="margin-top: 1rem; height: 50px">
        <div class="details-page__directions__confirmar">
          <img src="/src/assets/img/confirmar-img-final.svg" alt="confirmar-asistencia" />
          <a
            class="hide-btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfDkXTYUenf7EJ0ciFlxLktTxw-Hq2HJKbPzk5806DDv-gW2A/viewform?usp=sharing&ouid=110733723237711490684"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
      <div class="divider"><span style="height: 20vh"></span></div>
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
  title: 'Boda L&M',
  description: 'Boda Leo y Marian - Campos de Ibarlucea',
  location: '25 de Mayo 5306, Ibarlucea, Santa Fe',
  start: '2027-02-06T19:00:00',
  end: '2027-02-07T04:00:00',
}
</script>
<style lang="scss" scoped>
@use '@/assets/abstracts' as *;

.details-page {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url(/src/assets/img/fondo-papel.jpeg);
  background-repeat: round;

  &__content {
    .divider {
      display: flex;
      justify-content: center;
      span {
        display: block;
        width: 0.5px;
        background-color: $color-primary;
      }
    }
    img {
      border: 0.5px solid $color-primary;
      padding: 5px;
    }
    .wrapper-details {
      margin: auto;
      border: 0.5px solid;
      width: 90%;
      padding: 4px;
    }
    .details {
      padding: 0;
      border: none;
      width: 65%;
      position: absolute;
      margin-top: 5%;
      margin-left: 12%;
    }
    .hide-btn {
      width: 90px;
      height: 65px;
      position: absolute;
      top: 190%;
      left: 60%;
    }
  }
  &__directions {
    width: 90%;
    margin: auto;
    border: 0.5px solid $color-primary;
    padding: 4px;
    min-height: 100px;
    margin-top: 2rem;
    &__buttons {
      display: flex;
      width: 100%;
      border: 0.5px solid;
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

      .btn {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        text-align: center;
        gap: 4px;
      }
    }
    &__confirmar {
      border: 0.5px solid;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        border: none;
      }
    }
  }
  .asistencia {
    display: block;
    text-align: center;

    .button-vip {
      background: $color-primary;
      color: white;
      padding: 4px 8px;
      border-radius: 70px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }
}
@include desktop {
  .details-page {
    height: -webkit-fill-available;
    .details-page__content {
      .wrapper-details {
        width: 25%;
        .details {
          width: 15%;
          margin-left: 5%;
          margin-top: 2%;
        }
      }
    }
  }
  .details-page__directions {
    width: 25%;
    &__confirmar {
      padding: 4px;
      img {
        width: 90%;
      }
      .hide-btn {
        width: 104px;
        top: 205%;
        left: 53%;
      }
    }
  }
}
</style>
