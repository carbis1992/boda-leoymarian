<template>
  <section class="hero">
    <div class="hero__content">
      <!-- Nombres de los novios -->
      <h1 class="hero__title">Leonela & Mariano</h1>
      <p class="hero__subtitle">¡Nos casamos!</p>

      <!-- Detalles clave del evento -->
      <div class="hero__details">
        <span class="hero__date">06 de Febrero 2027</span>
        <span class="hero__divider">|</span>
        <span class="hero__location">Campos de Ibarlucea</span>
      </div>

      <!-- Cuenta regresiva dinámica -->
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

    <!-- BOTÓN DE SCROLL HACIA ABAJO -->
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
  // Buscaremos la sección por su ID (la crearemos en el siguiente componente)
  const detailsSection = document.getElementById('event-details')
  if (detailsSection) {
    detailsSection.scrollIntoView({ behavior: 'smooth' })
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
// Hacemos uso de tus variables globales gracias a tu config de Vite
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; // Ocupa toda la pantalla del móvil al entrar
  width: 100%;
  text-align: center;
  background-color: $color-light; // Variable de tu _variables.scss
  position: relative;
  //   background-image: url('/src/assets/img/background.jpg');

  &__content {
    max-width: 600px;
    width: 100%;
    padding: 2rem;
  }

  &__title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 0.5rem;

    // Ejemplo de uso de tu mixin para responsive design
    @include tablet {
      font-size: 4.5rem;
    }
  }

  &__subtitle {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    margin-bottom: 3rem;
  }

  &__details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    letter-spacing: 0.05em;
    margin-bottom: 4rem;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  &__divider {
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    @media (max-width: 480px) {
      display: none; // Escondemos la barra en móviles verticales
    }
  }
  &__scroll-btn {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    padding: 0.5rem;
    transition: color 0.3s ease;
    animation: bounce 2s infinite; // Animación de rebote

    &:hover {
      color: $color-dark;
    }
  }

  &__arrow-icon {
    width: 32px;
    height: 32px;
  }
}

// Estilos del contenedor del contador
.countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 0 auto;
  max-width: 450px;

  &__item {
    background-color: rgba($color-dark, 0.03); // Fondo sutil
    padding: 1rem 0.5rem;
    border-radius: 8px;
    border: 1px solid rgba($color-dark, 0.08);
  }

  &__number {
    display: block;
    font-size: 1.8rem;
    font-weight: 600;
    color: $color-dark;

    @include tablet {
      font-size: 2.5rem;
    }
  }

  &__label {
    display: block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background-color: color-mix(in srgb, var(--color-dark), white 10%);
    margin-top: 0.25rem;
  }
}

// Animación de rebote sutil para la flecha
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
