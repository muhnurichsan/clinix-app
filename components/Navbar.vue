<template>
	<div class="w-100 h-25 py-6 flex items-center justify-between">
		<nuxt-link class="flex items-center" to="/">
			<img
				src="img/logo.png"
				alt=""
				class="w-10 sm:w-12 md:w-20"
				:style="$colorMode.value === 'dark' ? 'filter: invert(1)' : ''"
			/>
			<p class="text-base sm:text-2xl md:text-3xl ml-3">Clinix</p>
		</nuxt-link>
		<button
			class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white font-bold py-2 md:px-4 px-3 rounded-full transition-all duration-200"
			@click="toggleDarkMode()"
		>
			<div v-if="$colorMode.value === 'light'" class="flex items-center">
				<fa :icon="['far', 'moon']" class="pr-1 text-xl" />
				<div>Dark Mode</div>
			</div>
			<div v-else class="text-gray-700 flex items-center">
				<fa :icon="['far', 'sun']" class="pr-1 text-lg" />
				<div>Light Mode</div>
			</div>
		</button>
	</div>
</template>
Œ
<script>
	export default {
		methods: {
			toggleDarkMode() {
				if (this.$colorMode.value !== "dark") {
					this.$colorMode.value = "dark";
				} else {
					this.$colorMode.value = "light";
				}
			},
		},
	};
</script>
