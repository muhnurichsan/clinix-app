<template>
  <div class="flex flex-col justify-between">
    <div class="container mx-auto px-4 flex flex-col gap-4 md:px-24">
      <Navbar/>
      <Nuxt/>
    </div>
    <footer class="h-10 text-center">Made with ❤️ by Clinix Team</footer>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Clinix App',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Clinix App is a simple web app hydrate and calorie calculator'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  }
}
</script>
