<template>
  <section id="event-details" class="details">
    <div class="details__container">
      <h2 class="details__title">CEREMONIA</h2>
      <h4>Agenda la fecha</h4>
      <p class="details__card-title">06 de Febrero 2027 19:00hs</p>
      <div>
        <!-- <button>Añadir a Google Calendar</button> -->
        <button @click="openCalendarEvent" class="details__btn">Añadir a Calendar</button>
      </div>

      <h3>Lugar</h3>
      <p class="details__place-name">Campos de Ibarlucea</p>
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

const eventTitle = 'Ceremonia de boda'
const eventDescription = 'Ceremonia en Campos de Ibarlucea'
const eventLocation = 'Campos de Ibarlucea, 25 de Mayo 5306 34s, Ibarlucea, Santa Fe, Argentina'
const eventStart = new Date('2027-02-06T19:00:00-03:00')
const eventEnd = new Date('2027-02-07T04:00:00-03:00')
const timezoneId = 'America/Argentina/Buenos_Aires'

const pad = (value) => String(value).padStart(2, '0')

const formatDateForICSTimezone = (date) => {
  return (
    date.getFullYear().toString() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    'T' +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  )
}

const formatDateForGoogle = (date) => {
  return formatDateForICSTimezone(date)
}

const createICSContent = () => {
  const dtStart = formatDateForICSTimezone(eventStart)
  const dtEnd = formatDateForICSTimezone(eventEnd)
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//boda-lym//Event//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${crypto.randomUUID()}`,
    `SUMMARY:${eventTitle}`,
    `DESCRIPTION:${eventDescription}`,
    `LOCATION:${eventLocation}`,
    `DTSTART;TZID=${timezoneId}:${dtStart}`,
    `DTEND;TZID=${timezoneId}:${dtEnd}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

const getGoogleCalendarUrl = () => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: eventTitle,
    details: eventDescription,
    location: eventLocation,
    dates: `${formatDateForGoogle(eventStart)}/${formatDateForGoogle(eventEnd)}`,
    ctz: timezoneId,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

const openIcsCalendar = () => {
  const icsBlob = new Blob([createICSContent()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(icsBlob)
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const openCalendarEvent = () => {
  if (isIOS()) {
    openIcsCalendar()
    return
  }

  window.open(getGoogleCalendarUrl(), '_blank', 'noopener')
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
    min-height: 50vh;
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    color: $color-primary;

    @include tablet {
      font-size: 3rem;
    }
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
}
</style>
