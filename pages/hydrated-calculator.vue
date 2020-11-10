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
								Age
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-age"
								type="number"
								placeholder="your age"
								name="ageMen"
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
							/>
						</div>
						<div class="w-full px-3 mb-6 md:mb-0">
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
								placeholder="weight in cm"
								name="weightMen"
							/>
						</div>
						<div class="w-full">
							<div class="flex justify-center md:mt-6">
								<button
									class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
									type="button"
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
								placeholder="weight in cm"
								name="weightWoman"
							/>
						</div>
						<div class="w-full">
							<div class="flex justify-center md:mt-6">
								<button
									class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
									type="button"
								>
									Check
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
</style>
