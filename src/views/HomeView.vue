<template>
  <main class="wedding-landing">
    <WelcomePage />
    <DetailsPage />
    <CardsDetails />
    <!-- <EventDetails />
    <TransportDetails />
    <DressCode />
    <GiftSection />
    <RsvpSection />
    <ThankSection /> -->
  </main>
</template>

<script setup>
import WelcomePage from '@/components/new/WelcomePage.vue'
import CardsDetails from '@/components/new/cardsDetails.vue'
import DetailsPage from '@/components/new/detailsPage.vue'
// import EventDetails from '@/components/EventDetails.vue'
// import RsvpSection from '@/components/RsvpSection.vue'
// import DressCode from '@/components/DressCode.vue'
// import GiftSection from '@/components/GiftSection.vue'
// import PlaylistSection from '@/components/PlaylistSection.vue'
// import ThankSection from '@/components/ThankSection.vue'
// import TransportDetails from '@/components/TransportDetails.vue'
</script>

<style lang="scss">
.wedding-landing {
  min-width: 100%;
  max-width: 100%;
}
</style>
