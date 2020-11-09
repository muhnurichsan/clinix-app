<template>
	<div>
		<section class="container mt-8">
			<div class="flex mt-16 sm:flex-none">
				<div class="flex-1 ml-40">
					<p class="text-justify italic text-3xl">
						Get Healthy Everyday With Us,
						<br />
						<strong>Clinix</strong>
					</p>
					<p class="text-justify">
						we provide an easier way to manage your healthy lifestyle as easy
						just one click
					</p>
					<button class="bg-gray-700 rounded mt-2 py-2 px-3 hover:bg-gray-500">
						Learn More
					</button>
				</div>
				<div class="flex-1 ml-40 mt-">
					<img :src="hero" alt="" class="w-2/4" />
				</div>
			</div>
		</section>
		<div
			class="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-6 mt-56"
		>
			<div v-for="item in features" :key="item">
				<div class="flex-initial flex flex-col items-center">
					<img
						class="w-1/2 mb-3 image-illustration"
						:src="item.image"
						alt="Sunset in the mountains"
					/>
					<div class="card max-w-lg p-6">
						<div class="">
							<div class="font-bold text-xl mb-2">{{ item.title }}</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptatibus quia, nulla! Maiores et perferendis eaque,
								exercitationem praesentium nihil.
							</p>
						</div>
						<div class="flex items-center mt-3">
							<button
								class="mx-auto bg-gray-700 hover:bg-gray-600 dark:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
							>
								<div class="flex items-center gap-3">
									<p>Try it now</p>
									<fa :icon="['fas', 'arrow-right']" class="pr-1 text-xl" />
								</div>
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
				hero: "/illustration/healthy.svg",
				features: [
					{
						title: "How Much Water Should You Drink Per Day?",
						image: "/illustration/hydrated.svg",
						description: "",
						url: "/hydrated-calculator",
					},
					{
						title: "How Many Calories You Should Eat?",
						image: "/illustration/calories.svg",
						description: "",
						url: "/calories-calculator",
					},
				],
			};
		},
	};
</script>

<style scoped>
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
