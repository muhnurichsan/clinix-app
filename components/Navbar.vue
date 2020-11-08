<template>
  <div class="w-100 h-25 p-2 pt-3 flex items-center justify-between">
    <div class="flex items-center">
      <img src="img/logo.png" alt=""
           class="w-10 sm:w-12 md:w-20"
           :style="$colorMode.value === 'dark' ? 'filter: invert(1)' : ''">
      <p class="text-2xl sm:text-3xl ml-3">Clinix</p>
    </div>
    <button
      class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
      @click="toggleDarkMode()">
      <span v-if="$colorMode.value === 'light'">
        <fa :icon="['far', 'moon']" class="pr-1" /> Dark Mode
      </span>
      <span v-else>
        <fa :icon="['far', 'sun']" class="pr-1" /> Light Mode
      </span>
    </button>
  </div>
</template>
Œ
<script>
export default {
  methods: {
    toggleDarkMode() {
      if (this.$colorMode.value !== 'dark') {
        this.$colorMode.value = 'dark'
      } else {
        this.$colorMode.value = 'light'
      }
    }
  }
}
</script>
