<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="flex flex-col h-full flex-1 bg-gray-200">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <a href="/">
          <h1 class="text-lg md:text-2xl text-bold">ILARIA FANTINI</h1></a
        >
      </div>
      <nav class="mt-5 flex-1 bg-gray-200 space-y-1 text-black md:pl-6">
        <a
          href="/bio"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          bio & contact
        </a>
        <a
          href="/drawings"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          drawings & paintings
        </a>
        <a
          href="/photos-videos"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          photos & videos
        </a>
        <a
          href="/publications"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          publications
        </a>
        <a
          href="/workshops"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          workshops
        </a>
        <a
          href="#"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          yoga & massages
        </a>
        <a
          href="#"
          class="slide_right group flex items-center px-2 py-2 text-xs md:text-lg leading-5 font-medium"
        >
          others
        </a>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>
<style>
.slide_right:hover {
  box-shadow: inset -600px 0 0 0 #ffffff;
  transition: box-shadow 0.4s ease-in;
}
</style>
