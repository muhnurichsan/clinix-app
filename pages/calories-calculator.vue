<template>
	<div>
		<div class="flex flex-col md:flex-row justify-evenly gap-10">
			<div class="w-full md:w-1/2">
				<form class="w-full max-w-lg">
					<h2 class="block uppercase md:text-lg font-bold mb-6 text-center">
						Men
					</h2>
					<div class="flex flex-wrap -mx-3 mb-2">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-age"
							>
								Name
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-name"
								type="text"
								placeholder="your name"
								name="nameMen"
								v-model="formMen.name"
							/>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-age"
							>
								Age
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-age"
								type="number"
								placeholder="your age"
								name="ageMen"
								v-model="formMen.age"
							/>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-age"
							>
								Height
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-city"
								type="number"
								placeholder="height in cm"
								name="heightMen"
								v-model="formMen.height"
							/>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-weight"
							>
								Weight
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-weight"
								type="number"
								placeholder="weight in kg"
								name="weightMen"
								v-model="formMen.weight"
							/>
						</div>
						<div class="w-full px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-state"
							>
								Physical Activity Level
							</label>
							<div class="relative">
								<select
									class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
									v-model="formMen.exercise"
								>
									<option value="1.2">Not Active</option>
									<option value="1.375">
										Pretty Active (get exercise 1-3 times a week)
									</option>
									<option value="1.55">
										Active (get exercise 3-5 times a week)
									</option>
									<option value="1.725">
										Very Active (get exercise 6-7 times a week)
									</option>
								</select>
								<div
									class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
								>
									<svg
										class="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path
											d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div class="w-full">
							<div class="flex justify-center md:mt-6">
								<button
									class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
									type="button"
									@click="calculateMen()"
								>
									Check
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="w-full md:w-1/2">
				<form class="w-full max-w-lg">
					<h2 class="block uppercase md:text-lg font-bold mb-6 text-center">
						Woman
					</h2>

					<div class="flex flex-wrap -mx-3 mb-2">
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-age"
							>
								Name
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-name"
								type="text"
								placeholder="your name"
								name="nameWoman"
								v-model="formWoman.name"
							/>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-age"
							>
								Age
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-age"
								type="number"
								placeholder="your age"
								name="ageWoman"
								v-model="formWoman.age"
							/>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-6">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-height"
							>
								Height
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-height"
								type="number"
								placeholder="height in cm"
								name="heightWoman"
								v-model="formWoman.height"
							/>
						</div>
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-weight"
							>
								Weight
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-city"
								type="number"
								placeholder="weight in kg"
								name="weightWoman"
								v-model="formWoman.weight"
							/>
						</div>
						<div class="w-full px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-state"
							>
								Physical Activity Level
							</label>
							<div class="relative">
								<select
									class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
									v-model="formWoman.exercise"
								>
									<option value="1.2">Not Active</option>
									<option value="1.375">
										Pretty Active (get exercise 1-3 times a week)
									</option>
									<option value="1.55">
										Active (get exercise 3-5 times a week)
									</option>
									<option value="1.725">
										Very Active (get exercise 6-7 times a week)
									</option>
								</select>
								<div
									class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
								>
									<svg
										class="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path
											d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div class="w-full">
							<div class="flex justify-center md:mt-6">
								<button
									class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
									type="button"
									@click="calculateWoman()"
								>
									Check
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="card max-w-sm bg-white h-full ml-auto mr-auto rounded-sm mb-32">
			<img
				src="/illustration/data.svg"
				alt=""
				class="w-48 ml-auto mr-auto mt-8"
			/>
			<p class="text-center pt-10">
				Hi,there <strong>{{ formMen.name }}</strong>
			</p>
			<p class="text-center">
				this is your report <br />
				your basal metabolic rate (BMR) is {{ Math.round(BMR) }} kcals <br />
				your total energy expenditure (TEE) is {{ Math.round(TEE) }} kcals Lorem
				ipsum dolor sit amet consectetur, adipisicing elit. Explicabo modi ipsum
				ex, tempore et ea libero culpa similique unde numquam dicta delectus
				natus beatae ullam eum esse consequatur iste quos?
			</p>
			<div
				class="bg-purple-700 w-full h-16 mt-20 flex flex-row justify-evenly divide-x-2 divide-gray-400"
			>
				<div class="w-full h-16 text-center pt-2">
					Age <br />{{ formMen.age }}
				</div>
				<div class="w-full h-16 text-center pt-2">
					Weight <br />{{ formMen.weight }}
				</div>
				<div class="w-full h-16 text-center pt-2">
					Height <br />{{ formMen.height }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formMen: {},
				formWoman: {},
				BMR: 0,
				TEE: 0,
			};
		},
		methods: {
			calculateMen() {
				this.BMR =
					88.362 +
					13.397 * this.formMen.weight +
					4.799 * this.formMen.height -
					5.677 * this.formMen.age;
				this.TEE = this.formMen.exercise * this.BMR;
			},
			calculateWoman() {
				447.593 +
					9.247 * this.formWoman.weight +
					3.098 * this.formWoman.height -
					4.33 * this.formWoman.age;
				this.TEE = this.formMen.exercise * this.BMR;
			},
		},
	};
</script>

<style>
</style>
