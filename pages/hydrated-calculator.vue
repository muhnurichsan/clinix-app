<template>
	<div>
		<h1 class="text-center uppercase font-bold text-2xl">
			Hydrated Calculator
		</h1>
		<form
			v-if="!result"
			class="w-full mt-24 mb-40 pb-20"
			@submit="calcCalories($event)"
		>
			<div class="flex flex-col justify-center items-center">
				<div class="text-5xl flex flex-row gap-4">
					<input
						type="radio"
						id="male"
						value="male"
						v-model="resource.gender"
						class="hidden"
					/>
					<label
						class="cursor-pointer text-center appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-700 hover:shadow-lg transition duration-200"
						for="male"
					>
						🙋🏻‍♂️
					</label>
					<input
						type="radio"
						id="female"
						value="female"
						v-model="resource.gender"
						class="hidden"
					/>
					<label
						class="cursor-pointer text-center appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-700 hover:shadow-lg transition duration-200"
						for="female"
					>
						🙋🏻‍♀️
					</label>
				</div>
				<span class="text-2xl font-medium capitalize">{{
					resource.gender
				}}</span>
			</div>
			<div class="flex flex-col md:flex-row items-start mt-6 mb-3">
				<div class="w-full md:w-4/6 px-3 mb-3 md:mb-0 md:pl-0">
					<Input
						v-model="resource.name"
						label="Name"
						type="text"
						placeholder="Full Name"
					/>
				</div>
				<div class="w-full md:w-3/12 px-3 mb-3 md:mb-0">
					<Input v-model="resource.age" label="Age" type="number" />
				</div>
				<div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
					<Input
						v-model="resource.height"
						label="Height"
						type="number"
						placeholder="Centimeter (cm)"
					/>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
					<Input
						v-model="resource.weight"
						label="Weight"
						type="number"
						placeholder="Kilogram (kg)"
					/>
				</div>
			</div>
			<div class="w-full flex flex-row justify-end mb-6">
				<button
					@click="calcCalories($event)"
					class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 md:px-4 px-3 rounded-full transition-all duration-200"
				>
					Submit
				</button>
			</div>
		</form>
		<div
			v-if="result"
			class="card max-w-sm bg-white h-full ml-auto mr-auto rounded-sm mt-24 mb-32"
		>
			<img
				src="/illustration/data.svg"
				alt=""
				class="w-48 ml-auto mr-auto mt-8"
			/>
			<div class="p-10">
				<p>
					Hi, <strong>{{ resource.name }}</strong>
				</p>
				<p class="capitalize">Gender: {{ resource.gender }}</p>
				<p>Total Body Water: {{ result }} liter</p>
			</div>
			<div
				class="bg-purple-700 w-full h-16 flex flex-row justify-evenly divide-x-2 divide-gray-400 text-white"
			>
				<div class="w-full h-16 text-center pt-2">
					Age <br />{{ resource.age }}
				</div>
				<div class="w-full h-16 text-center pt-2">
					Weight <br />{{ resource.weight }}kg
				</div>
				<div class="w-full h-16 text-center pt-2">
					Height <br />{{ resource.height }}cm
				</div>
			</div>
			<div class="w-full flex flex-row justify-between">
				<button
					class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 w-full h-full transition-all duration-200"
				>
					<nuxt-link :to="'/'" class="flex justify-center items-center gap-3">
						<fa :icon="['fas', 'arrow-left']" class="pr-1 text-xl" />
						<p>Back</p>
					</nuxt-link>
				</button>
				<button
					class="text-center bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 w-full h-full transition-all duration-200"
					@click="reset()"
				>
					<p>Count Again</p>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Input from "@/components/Input";

	export default {
		head: {
			title: "Hydrated Calculator",
		},
		components: { Input },
		data() {
			return {
				resource: {
					gender: "",
					name: "",
					age: "",
					weight: "",
					height: "",
				},
				result: null,
			};
		},
		methods: {
			calcCalories(event) {
				if (event) {
					event.preventDefault();
					event.stopPropagation();
				}
				const { gender, age, weight, height } = this.resource;
				if (gender === "") {
					alert("You mush choose a gender");
					return;
				}
				let hydrated;
				if (gender === "male") {
					hydrated = 2.447 - 0.09145 * age + 0.1074 * height + 0.3362 * weight;
				} else {
					hydrated = -2.097 + 0.1067 * height + 0.2466 * weight;
				}

				this.result = hydrated.toFixed(2);
			},
			reset() {
				this.resource = {
					gender: "",
					name: "",
					age: "",
					weight: "",
					height: "",
				};
				this.result = null;
			},
		},
	};
</script>

<style scoped lang="scss">
</style>
