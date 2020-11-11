<template>
	<div class="mb-10 md:my-10 flex flex-col">
		<Headline />
		<div
			class="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-6 mt-12"
		>
			<div v-for="item in features" :key="item.title">
				<div class="flex-initial flex flex-col items-center">
					<img
						class="w-4/6 mb-6 image-illustration"
						:src="item.image"
						alt="Sunset in the mountains"
					/>
					<div class="card max-w-lg p-6">
						<div class="">
							<div class="font-bold text-xl mb-2">{{ item.title }}</div>
							<p class="text-justify">
								{{ item.description }}
							</p>
						</div>
						<div class="flex items-center mt-3">
							<button
								class="mx-auto text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
							>
								<nuxt-link :to="item.url" class="flex items-center gap-3">
									<p>Try it now</p>
									<fa :icon="['fas', 'arrow-right']" class="pr-1 text-xl" />
								</nuxt-link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				features: [
					{
						title: "How Much Water Should You Drink Per Day?",
						image: "/illustration/hydrated.svg",
						description:
							"Use this hydration calculator to easily calculate your recommended daily water intake you need to keep yourself healthy and at peak physical and mental performance.",
						url: "/hydration-calculator",
					},
					{
						title: "How Many Calories You Should Eat?",
						image: "/illustration/calories.svg",
						description:
							"The Calories Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight",
						url: "/calories-calculator",
					},
				],
			};
		},
	};
</script>

<style scoped lang="scss">
	button {
		@apply bg-gray-700;
	}

	button:hover {
		@apply bg-gray-600;
	}

	.dark-mode button {
		@apply bg-gray-700;
	}

	.dark-mode .card button {
		@apply bg-gray-400 text-gray-700;
	}

	.badge {
		@apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
	}

	.badge:hover {
		@apply bg-gray-300;
	}

	.dark-mode .badge {
		@apply bg-gray-800 text-gray-200;
	}

	.dark-mode .badge:hover {
		@apply bg-gray-900;
	}
</style>
