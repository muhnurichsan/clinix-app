<template>
  <div class="w-100">
    <label v-if="label !== ''"
           class="block uppercase tracking-wide text-md font-bold mb-2">
      {{ label }}
    </label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-700"
      :value="value" @input="dispatch($event)"
      :type="type"
      :placeholder="placeholder">
    <p v-if="message !== ''" class="text-yellow-500 text-xs italic">{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    type: {
      type: String,
      default() {
        return 'text'
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    },
    placeholder: {
      type: String,
      default() {
        return ''
      }
    },
    message: {
      type: String,
      default() {
        return ''
      }
    },
  },
  methods: {
    dispatch(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.dark-mode {
  input {
    @apply border-gray-300;
  }
}
input::placeholder {
  @apply text-sm;
}
</style>
