<template>
  <div class="headline">
    <div class="w-full md:w-1/2 flex flex-row justify-center md:justify-end mb-6 md:m-0">
      <img src="/illustration/healthy.svg" alt="" class="w-4/6 image-illustration"/>
    </div>
    <div class="w-full md:w-1/2 text-center md:text-left md:mr-3 m-auto">
      <p class="italic text-xl md:text-3xl font-medium">
        Get Healthy Everyday With Us
      </p>
      <p class="md:text-justify text-center font-light">
        We provide an easier way to manage your healthy lifestyle as easy
        just one click
      </p>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.headline {
  display: flex;
  flex-direction: column;
  @apply justify-center mb-3;

  @screen md {
    flex-direction: row-reverse;
    @apply mb-24;
  }

  @screen sm {
    flex-direction: row-reverse;
  }
}
</style>
