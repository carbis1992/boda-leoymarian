<template>
  <main class="wedding-landing">
    <MainHero />
    <EventDetails />
    <TransportDetails />
    <DressCode />
    <GiftSection />
    <PlaylistSection />
    <RsvpSection />
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
import TransportDetails from '@/components/TransportDetails.vue'
</script>
