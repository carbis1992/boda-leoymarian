<template>
  <main class="wedding-landing">
    <MainHero />
    <EventDetails />
    <RsvpSection />
    <DressCode />
    <GiftSection />
    <PlaylistSection />
    <ThankSection />
  </main>
</template>

<script setup>
import MainHero from '@/components/MainHero.vue'
import EventDetails from '@/components/EventDetails.vue'
import RsvpSection from '@/components/RsvpSection.vue'
import DressCode from '@/components/DressCode.vue'
import GiftSection from '@/components/GiftSection.vue'
import PlaylistSection from '@/components/PlaylistSection.vue'
import ThankSection from '@/components/ThankSection.vue'
</script>

<style lang="scss">
// Aquí puedes aplicar estilos estructurales si los necesitas,
// aunque ya se benefician de tus archivos base cargados globalmente
</style>
