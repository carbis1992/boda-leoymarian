<template>
  <section class="dress-code">
    <div class="dress-code__container">
      <h2 class="dress-code__title">Código de Vestimenta</h2>
      <p class="dress-code__subtitle">Formal / Elegante</p>

      <p class="dress-code__notice">
        Queremos que luzcas espectacular, pero por favor ten en cuenta que
        <strong
          >el blanco, marfil y los colores pasteles muy claritos están reservados exclusivamente
          para la novia</strong
        >. ¡Gracias por ayudarnos a mantener la tradición!
      </p>

      <div class="dress-code__rules">
        <!-- Tarjeta de Recomendaciones -->
        <div class="dress-code__card dress-code__card--do">
          <div class="dress-code__icon">✨</div>
          <h3>Qué llevar</h3>
          <ul>
            <li>Trajes oscuros o de etiqueta.</li>
            <li>Vestidos largos o de cóctel.</li>
            <li>Colores vivos, alegres o neutros oscuros.</li>
            <li>Zapatos cómodos para darlo todo en la pista.</li>
          </ul>
        </div>

        <!-- Tarjeta de Restricciones -->
        <div class="dress-code__card dress-code__card--dont">
          <div class="dress-code__icon">❌</div>
          <h3>Qué evitar</h3>
          <ul>
            <li>Blanco, beige, champagne o marfil.</li>
            <li>Colores pasteles extremadamente claros.</li>
            <li>Ropa deportiva o excesivamente casual.</li>
            <li>Tejanos o zapatillas informales.</li>
          </ul>
        </div>
      </div>

      <!-- Espacio reservado para el futuro tablero de inspiración -->
      <!-- 
      <div class="dress-code__gallery">
        <h3 class="dress-code__gallery-title">Inspiración de Looks</h3>
        <div class="dress-code__grid">
          <img src="/img/dress-code-1.jpg" alt="Inspiración 1" class="dress-code__img" />
          <img src="/img/dress-code-2.jpg" alt="Inspiración 2" class="dress-code__img" />
        </div>
      </div> 
      -->
    </div>
  </section>
</template>

<script setup>
// Lógica lista por si necesitas manejar pestañas de inspiración en el futuro
</script>

<style lang="scss" scoped>
.dress-code {
  padding: 4rem 1.5rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  &__container {
    max-width: 900px;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 0.5rem;
    font-family: serif;
  }

  &__subtitle {
    font-size: 1.2rem;
    color: #8fa89b;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  &__notice {
    font-size: 1.1rem;
    color: #bf8d30; // Un tono dorado/alerta elegante
    background-color: #fdfbf7;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #bf8d30;
    line-height: 1.6;
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  &__rules {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  &__card {
    background: #fbf9f6;
    padding: 2.5rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    text-align: left;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      font-size: 1.4rem;
      color: #333;
      margin-bottom: 1.5rem;
      font-family: serif;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      font-size: 1rem;
      color: #555;
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.4;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #8fa89b;
        font-size: 1.2rem;
      }
    }

    &--dont {
      li::before {
        color: #c97d7d; // Viñeta sutilmente rojiza para lo prohibido
      }
    }
  }

  &__icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
