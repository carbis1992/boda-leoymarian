<template>
    <button
              @click="copyToClipboard(copyText)"
              class="gift-section__copy-btn"
              :class="{ 'gift-section__copy-btn--success': copied }"
              title="Copiar IBAN"
              style="    width: 1rem;
    background: none;
    border: none;"
            >
              <svg
                v-if="copied"
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="gift-section__svg-icon"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <svg
                v-else
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="gift-section__svg-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 0 1 3.548 0c1.131.094 1.976 1.057 1.976 2.192V7.5M5.25 7.5h13.5A2.25 2.25 0 0 1 21 9.75v10.5A2.25 2.25 0 0 1 18.75 22.5h-13.5A2.25 2.25 0 0 1 3 20.25V9.75A2.25 2.25 0 0 1 5.25 7.5z"
                />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 11.25h6M9 15h6" />
              </svg>
            </button>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  copyText: String
})
const copied = ref(false)

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Error al copiar el texto: ', err)
  }
}
</script>