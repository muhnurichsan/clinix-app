<template>
	<div>
		<h1 class="text-center uppercase font-bold text-2xl">
			Hydration Calculator
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
				<div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
					<Input
						v-model="resource.weight"
						label="Weight"
						type="number"
						placeholder="Kilogram (kg)"
					/>
				</div>
				<div class="w-full md:w-1/3 px-3 mb-3 md:mb-0 pr-0">
					<Select
						v-model="resource.level_activity"
						label="Level Activity"
						:options="level_activities"
					/>
				</div>
			</div>
			<div class="w-full flex flex-row justify-end mb-6">
				<button
					class="bg-gray-600 hover:bg-gray-400 hover:text-gray-700 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 md:px-4 px-3 rounded-full transition-all duration-200 mr-5"
				>
					<nuxt-link :to="'/'" class="flex justify-center items-center gap-3">
						<p>Back to home</p>
					</nuxt-link>
				</button>
				<button
					@click="calcHydrate($event)"
					class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 md:px-4 px-3 rounded-full transition-all duration-200"
				>
					Submit
				</button>
			</div>
			<div class="w-1/2 -mt-12 bg-white rounded-md">
				<table class="table-auto">
					<thead>
						<tr>
							<th class="border px-4 py-2">Formula</th>
							<th class="border px-4 py-2">Men</th>
							<th class="border px-4 py-2">Woman</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border px-4 py-2">Water Intake Daily</td>
							<td class="border px-4 py-2">(Weight/30) + Level Activity</td>
							<td class="border px-4 py-2">(Weight/30) + Level Activity</td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>
		<div
			v-if="result"
			class="card max-w-sm bg-white h-full ml-auto mr-auto rounded-sm mt-24 mb-32"
		>
			<img
				src="/illustration/datareport.svg"
				alt=""
				class="w-48 ml-auto mr-auto mt-8"
			/>
			<div class="p-10">
				<p>
					Hi, <strong>{{ resource.name }}</strong>
				</p>
				<p class="capitalize">Gender: {{ resource.gender }}</p>
				<p class="capitalize">
					Level Activity:
					{{
						level_activities.find(
							(item) => item.value === resource.level_activity
						).label
					}}
				</p>
				<p>Water Intake Daily: {{ result }} liter</p>
				<div class="w-full py-3">
					<h2 class="text-center italic font-bold">
						Some Healthy Recomendation For You
					</h2>
					<table class="table-auto">
						<thead class="bg-blue-400">
							<tr>
								<th class="border px-4 py-2">Fruit</th>
								<th class="border px-4 py-2">Quantity</th>
								<th class="border px-4 py-2">Water</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="table in tables" :key="table">
								<td class="border px-4 py-2">{{ table.fruit }}</td>
								<td class="border pl-2 py-2">{{ table.quantity }}</td>
								<td class="border px-4 py-2">{{ table.water }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div
				class="bg-purple-700 w-full h-16 flex flex-row justify-evenly divide-x-2 divide-gray-400 text-white"
			>
				<div class="w-full h-16 text-center pt-2">
					Weight <br />{{ resource.weight }}kg
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
	import Select from "@/components/Select";

	export default {
		head: {
			title: "Hydration Calculator",
		},
		components: { Input, Select },
		data() {
			return {
				resource: {
					gender: "",
					name: "",
					weight: "",
					level_activity: "",
				},
				level_activities: [
					{
						label: "Not Active",
						value: "",
					},
					{
						label: "Pretty Active (30-mins/day)",
						value: "0.35",
					},
					{
						label: "Active (1 hour/day)",
						value: "0.7",
					},
					{
						label: "Very Active (2 hour/day)",
						value: "1.4",
					},
				],
				tables: [
					{
						fruit: "Watermelon",
						quantity: "100 gr",
						water: "91.5 ml",
					},
					{
						fruit: "Strawberries",
						quantity: "100 gr",
						water: "91 ml",
					},
					{
						fruit: "Papaya",
						quantity: "100 gr",
						water: "88.1 ml",
					},
					{
						fruit: "Oranges",
						quantity: "100 gr",
						water: "86.8 ml",
					},
					{
						fruit: "Pineapple",
						quantity: "100 gr",
						water: "86 ml",
					},
				],
				result: null,
			};
		},
		methods: {
			calcHydrate(event) {
				if (event) {
					event.preventDefault();
					event.stopPropagation();
				}
				const { gender, weight, level_activity } = this.resource;
				if (gender === "") {
					alert("You mush choose a gender");
					return;
				}
				let hydrated;
				if (gender === "male") {
					hydrated = weight / 30 + Number(level_activity);
				} else {
					hydrated = weight / 30 + Number(level_activity);
				}

				this.result = hydrated;
			},
			reset() {
				this.resource = {
					gender: "",
					name: "",
					weight: "",
					level_activity: "",
				};
				this.result = null;
			},
		},
	};
</script>

<style scoped lang="scss">
</style>
