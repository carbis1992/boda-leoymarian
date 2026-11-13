<template>
  <main class="wedding-landing">
    <WelcomePage />
    <DetailsPage />
    <CardsDetails />
    <SpotifyPage />
    <!-- <GiftPage /> -->
  </main>
</template>

<script setup>
import WelcomePage from '@/components/new/WelcomePage.vue'
import CardsDetails from '@/components/new/cardsDetails.vue'
import DetailsPage from '@/components/new/detailsPage.vue'
import GiftPage from '@/components/new/giftPage.vue';
import SpotifyPage from '@/components/new/spotifyPage.vue';
</script>

<style lang="scss">
.wedding-landing {
  min-width: 100%;
  max-width: 100%;
}
</style>
