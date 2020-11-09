<template>
	<div class="container">
		<div
			class="w-100 h-25 p-2 pt-3 flex items-center justify-between ml-10 mr-10"
		>
			<div class="flex items-center">
				<img
					src="img/logo.png"
					alt=""
					class="w-10 sm:w-12 md:w-20"
					:style="$colorMode.value === 'dark' ? 'filter: invert(1)' : ''"
				/>
				<p class="text-base sm:text-2xl md:text-3xl ml-3">Clinix</p>
			</div>
			<button
				class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white font-bold md:py-2 py-1 md:px-4 px-1 rounded-full transition-all duration-300"
				@click="toggleDarkMode()"
			>
				<span v-if="$colorMode.value === 'light'">
					<fa :icon="['far', 'moon']" class="pr-1" /> Dark Mode
				</span>
				<span v-else>
					<fa :icon="['far', 'sun']" class="pr-1" /> Light Mode
				</span>
			</button>
		</div>
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
