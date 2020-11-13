<template>
	<div>
		<h1 class="text-center uppercase font-bold text-2xl">
			Calories Calculator
		</h1>
		<form
			v-if="!result"
      class="w-full mt-20"
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
				<div class="w-full md:w-1/3 px-3 mb-3 md:mb-0 pr-0">
					<Select
						v-model="resource.level_activity"
						label="Level Activity"
						:options="level_activities"
					/>
				</div>
			</div>
			<div class="w-full flex flex-row justify-end mb-6 gap-4">
				<button
          type="button"
					class="bg-gray-600 hover:bg-gray-400 hover:text-gray-700 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 md:px-4 px-3 rounded-full transition-all duration-200"
				>
					<nuxt-link :to="'/'" class="flex justify-center items-center gap-3">
						<p>Back to home</p>
					</nuxt-link>
				</button>
				<button
          type="button"
					@click="calcCalories($event)"
					class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 text-white dark:text-gray-300 font-bold py-2 md:px-4 px-3 rounded-full transition-all duration-200"
				>
					Submit
				</button>
			</div>
		</form>
		<div
			v-if="result"
      class="card max-w-sm bg-white h-full ml-auto mr-auto rounded-sm mt-20"
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
				<p>Calories: {{ result }} kcals</p>
        <h2 class="italic font-medium">
          Some Healthy Recomendation For You
        </h2>
        <div class="w-full py-3 table-info result">
					<table class="table-auto">
						<thead class="bg-blue-400">
							<tr>
								<th class="border px-4 py-2">Fruit</th>
								<th class="border px-4 py-2">Quantity</th>
								<th class="border px-4 py-2">Calories</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="table in tables" :key="table.fruit">
								<td class="border px-4 py-2">{{ table.fruit }}</td>
								<td class="border pl-2 py-2">{{ table.quantity }}</td>
								<td class="border px-4 py-2">{{ table.calories }}</td>
							</tr>
						</tbody>
					</table>
				</div>
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
					type="button"
					class="text-center bg-gray-600 hover:bg-gray-400 hover:text-gray-700 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 w-full h-full transition-all duration-200"
				>
					<nuxt-link :to="'/'" class="flex justify-center items-center gap-3">
						<p>Back to home</p>
					</nuxt-link>
				</button>
				<button
					type="button"
					class="bg-gray-700 hover:bg-gray-600 dark:bg-gray-400 text-white dark:text-gray-700 font-bold py-2 w-full h-full transition-all duration-200"
					@click="reset()"
				>
					<p>Calculate Again</p>
				</button>
			</div>
		</div>
    <div class="flex justify-center mt-16 mb-24 pb-6">
      <div
        class="w-full rounded-md text-gray-700 bg-transparent dark:text-clinix-secondary table-info">
        <h3 class="text-2xl mb-2">Formula</h3>
        <table class="table-auto">
          <thead>
          <tr>
            <th class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">Formula</th>
            <th class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">Men</th>
            <th class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">Woman</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">BMR (basal metabolic rate)</td>
            <td class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">
              88.362 + (13.397 x Weight [kg]) + (4.799 x Height [cm]) – (5.677
              x Age)
            </td>
            <td class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">
              447.593 + (9.247 x Weight [kg]) + (3.098 x Height [cm]) – (4.33
              x Age)
            </td>
          </tr>
          <tr>
            <td class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">TEE (total energy expenditure)</td>
            <td class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">BMR * Level Activity</td>
            <td class="border border-gray-700 dark:border-clinix-secondary px-4 py-2">BMR * Level Activity</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
	</div>
</template>

<script>
	import Input from "@/components/Input";
	import Select from "@/components/Select";

	export default {
		head: {
			title: "Calories Calculator",
		},
		components: { Input, Select },
		data() {
			return {
				resource: {
					gender: "",
					name: "",
					age: "",
					weight: "",
					height: "",
					level_activity: "",
				},
				level_activities: [
					{
						label: "Not Active",
						value: "1.2",
					},
					{
						label: "Pretty Active",
						value: "1.375",
					},
					{
						label: "Active",
						value: "1.55",
					},
					{
						label: "Very Active",
						value: "1.725",
					},
				],
				tables: [
					{
						fruit: "Apple",
						quantity: "100 gr",
						calories: "58",
					},
					{
						fruit: "Strawberries",
						quantity: "100 gr",
						calories: "72 ",
					},
					{
						fruit: "Melon",
						quantity: "100 gr",
						calories: "62",
					},
					{
						fruit: "Oranges",
						quantity: "100 gr",
						calories: "45",
					},
					{
						fruit: "Pineapple",
						quantity: "100 gr",
						calories: "50",
					},
				],
				result: null,
			};
		},
		methods: {
			calcCalories(event) {
				if (event) {
					event.preventDefault();
					event.stopPropagation();
				}
				const { gender, age, weight, height, level_activity } = this.resource;
				if (gender === "") {
					alert("You mush choose a gender");
					return;
				}
				let calories;
				if (gender === "male") {
					calories = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
				} else {
					calories = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
				}

				this.result = (calories * level_activity).toFixed(2);
			},
			reset() {
				this.resource = {
					gender: "",
					name: "",
					age: "",
					weight: "",
					height: "",
					level_activity: "",
				};
				this.result = null;
			},
		},
	};
</script>
