<template>
  <section id="event-details" class="details">
    <div class="details__container">
      <h2 class="details__title">CEREMONIA</h2>
      <div class="details__wrapper">
        <div class="details__card">
          <h3>Agenda la fecha</h3>
          <p class="details__card-title" type="date">Sábado, 6 de febrero de 2027, 19:00 hs</p>

          <div class="details__calendar-menu">
            <button @click="openGoogleCalendar" class="details__btn details__calendar-menu__btn">
              Google Calendar
            </button>
            <button
              @click="downloadICS"
              class="details__btn details__calendar-menu__btn btn--secondary"
            >
              Apple / Outlook
            </button>
          </div>
        </div>
        <div class="details__card">
          <h3>Lugar</h3>
          <p class="details__card-title">Campos de Ibarlucea</p>
          <div class="details__address_copy">
            <p class="details__address_copy__address">25 de Mayo 5306 34s, Ibarlucea, Santa Fe</p>
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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

    setTimeout(() => {
      copiedStatus.value[key] = false
    }, 2500)
  } catch (err) {
    console.error('Error al copiar la dirección: ', err)
  }
}
const showCalendarMenu = ref(false)

const eventData = {
  title: 'Ceremonia',
  description: 'Ceremonia - ¡Los esperamos!',
  location: '25 de Mayo 5306, Ibarlucea, Santa Fe',
  start: '2027-02-06T19:00:00',
  end: '2027-02-06T22:00:00',
}

function toUTCString(dateStr) {
  const date = new Date(dateStr)
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

function buildICS() {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MiEvento//ES',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@mievento.com`,
    `DTSTAMP:${toUTCString(new Date().toISOString())}`,
    `DTSTART:${toUTCString(eventData.start)}`,
    `DTEND:${toUTCString(eventData.end)}`,
    `SUMMARY:${eventData.title}`,
    `DESCRIPTION:${eventData.description}`,
    `LOCATION:${eventData.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

function openGoogleCalendar() {
  const dates = `${toUTCString(eventData.start)}/${toUTCString(eventData.end)}`
  const url = new URL('https://calendar.google.com/calendar/render')
  url.searchParams.set('action', 'TEMPLATE')
  url.searchParams.set('text', eventData.title)
  url.searchParams.set('dates', dates)
  url.searchParams.set('details', eventData.description)
  url.searchParams.set('location', eventData.location)

  window.open(url.toString(), '_blank')
  showCalendarMenu.value = false
}

function addToAppleOrOtherCalendar() {
  const icsContent = buildICS()

  if (isIOS()) {
    // En iOS: navegar directo a la data URI abre la vista previa nativa
    // en vez de descargar el archivo
    const dataUri = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(icsContent)
    window.location.href = dataUri
  } else {
    // En desktop/Android: sí forzamos la descarga del .ics
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'ceremonia.ics'
    link.click()
    URL.revokeObjectURL(link.href)
  }
  showCalendarMenu.value = false
}
</script>

<style lang="scss" scoped>
.details {
  @include flex-center;
  width: 100%;
  text-align: center;
  background-color: $color-light;
  position: relative;

  &__container {
    text-align: center;
    max-width: 600px;
    width: 100%;
    padding: 8rem 1.2rem;
    min-height: 100vh;
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

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    row-gap: 4rem;
  }

  &__card {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__subtitle {
    font-size: 1rem;
    margin-bottom: 3.5rem;
  }

  &__time {
    // font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  &__place-name {
    margin-bottom: 0.25rem;
    color: $color-primary;
  }

  &__address_copy {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.3rem;
    min-width: max-content;
    margin-top: 0.5rem;
    &__address {
      font-size: 0.9rem;
    }
  }

  &__copy-btn {
    width: 18px;
    color: $color-primary;
    background: none;
    border: none;
  }

  &__btn {
    display: inline-block;
    align-self: center;
    width: 100%;
    max-width: 200px;
    padding: 0.8rem 1.5rem;
    background-color: $color-primary;
    color: $color-light;
    margin-top: 2rem;
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

  &__calendar-menu {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
    &__btn {
      width: 100%;
      max-width: 200px;
      padding: 0.8rem;
      font-size: 0.8rem;
      margin: 0;
      border: none;
    }
  }
}
</style>
