<template>
  <div class="flex flex-col justify-between">
    <div class="container mx-auto px-4 flex flex-col gap-4 md:px-24">
      <Navbar/>
        <Nuxt/>
    </div>
    <footer class="h-12 text-center pb-3">
      <p>Made with ❤️ by Clinix Team</p>
      <small>Illustration by: <a href="https://undraw.co/">Undraw.co</a></small>
    </footer>
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
