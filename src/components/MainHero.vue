<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__title">LM</h1>
      <p class="hero__subtitle">¡Nos casamos!</p>

      <div class="hero__countdown countdown">
        <div class="countdown__item">
          <span class="countdown__number">{{ timeLeft.days }}</span>
          <span class="countdown__label">Días</span>
        </div>
        <div class="countdown__item">
          <span class="countdown__number">{{ timeLeft.hours }}</span>
          <span class="countdown__label">Horas</span>
        </div>
        <div class="countdown__item">
          <span class="countdown__number">{{ timeLeft.minutes }}</span>
          <span class="countdown__label">Min.</span>
        </div>
        <div class="countdown__item">
          <span class="countdown__number">{{ timeLeft.seconds }}</span>
          <span class="countdown__label">Seg.</span>
        </div>
      </div>
    </div>

    <button @click="scrollToDetails" class="hero__scroll-btn" aria-label="Ver detalles del evento">
      <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" class="hero__arrow-icon">
        <path
          fill-rule="evenodd"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Configura aquí la FECHA Y HORA EXACTA de la boda (Año, Mes [0-11], Día, Hora, Minuto)
// Nota: En JavaScript los meses empiezan en 0 (Enero = 0, Octubre = 9)
// Año: 2027 | Mes: 1 (Febrero) | Día: 6 | Hora: 19 | Minuto: 0 | Segundo: 0
const targetDate = new Date(2027, 1, 6, 19, 0, 0)

// Estado reactivo para guardar el tiempo restante
const timeLeft = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
})

let timerInterval = null

// Función que calcula el tiempo restante
const calculateTimeLeft = () => {
  const now = new Date()
  const difference = targetDate - now

  if (difference <= 0) {
    timeLeft.value = { days: '00', hours: '00', minutes: '00', seconds: '00' }
    if (timerInterval) clearInterval(timerInterval)
    return
  }

  // Cálculos matemáticos de tiempo
  const d = Math.floor(difference / (1000 * 60 * 60 * 24))
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((difference % (1000 * 60)) / 1000)

  // Formateo para añadir un cero a la izquierda si el número es menor a 10 (Ej: "05")
  timeLeft.value = {
    days: d.toString().padStart(2, '0'),
    hours: h.toString().padStart(2, '0'),
    minutes: m.toString().padStart(2, '0'),
    seconds: s.toString().padStart(2, '0'),
  }
}

const scrollToDetails = () => {
  const detailsSection = document.getElementById('event-details')
  if (detailsSection) {
    detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Iniciar el contador al montar el componente y limpiarlo al destruirlo
onMounted(() => {
  calculateTimeLeft()
  timerInterval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  background-color: rgba($color-light, 0.9);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding-bottom: 2rem;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/src/assets/img/fondowb.jpeg');
    background-size: cover;
    opacity: 0.35;
    z-index: 0;
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    width: 100%;
    padding: 2rem;
  }

  &__title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
    color: $color-primary;
    @include tablet {
      font-size: 4.5rem;
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    margin-bottom: 2rem;
    color: $color-primary;
  }

  &__scroll-btn {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background: transparent;
    border: none;
    cursor: pointer;
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    padding: 0.5rem;
    transition: color 0.3s ease;
    animation: hero-bounce 2s ease-in-out infinite;
    will-change: transform;
    pointer-events: auto;

    &:hover {
      color: $color-primary;
    }
  }

  &__arrow-icon {
    width: 32px;
    height: 32px;
    color: $color-primary;
  }
}

@keyframes hero-bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-8px);
  }
}

.countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 0 auto;
  max-width: 290px;
  margin-bottom: 2rem;

  &__item {
    background-color: $color-primary;
    color: $color-light;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid rgba($color-dark, 0.08);
    opacity: 0.6;
  }

  &__number {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: $color-light;

    @include tablet {
      font-size: 2.5rem;
    }
  }

  &__label {
    display: block;
    font-size: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    margin-top: 0.25rem;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50__, 0);
  }
  40% {
    transform: translate(-50__, -10px);
  }
  60% {
    transform: translate(-50__, -5px);
  }
}
</style>
