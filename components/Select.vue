<template>
	<div>
		<label
			class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2 dark:text-gray-300"
		>
			{{ label }}
		</label>
		<div class="relative">
			<select
				v-model="value"
				@input="dispatch($event)"
				class="block appearance-none w-full bg-gray-200 text-gray-700 border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-700"
			>
				<option
					v-for="option in options"
					:value="option.value"
					:key="option.value"
				>
					{{ option.label }}
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
</template>
<script>
	export default {
		props: {
			value: {},
			label: {
				type: String,
				default() {
					return "";
				},
			},
			options: {
				type: Array,
				default() {
					return [];
				},
			},
		},
		methods: {
			dispatch(e) {
				this.$emit("input", e.target.value);
			},
		},
	};
</script>
