<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="flex flex-col h-full flex-1 bg-gray-100">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <a href="/">
          <h1 class="text-2xl text-bold font-mono">ILARIA FANTINI</h1></a
        >
      </div>
      <nav class="mt-5 flex-1 bg-gray-100 space-y-1 text-black pl-6">
        <a
          href="bio"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover:outline-none hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: home
          <svg
            class="mr-3 h-6 w-6  group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg> -->
          bio & contact
        </a>
        <a
          href="drawings"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover: hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: users -->
          <!-- <svg
            class="mr-3 h-6 w-6  group-hover: group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg> -->
          drawings & paintings
          <!-- <span
            class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 font-medium rounded-full bg-indigo-900 transition ease-in-out duration-150 group-hover:bg-gray-100 group-focus:bg-gray-100"
          >
            3
          </span> -->
        </a>
        <a
          href="#"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover: hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: folder -->
          <!-- <svg
            class="mr-3 h-6 w-6  group-hover: group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg> -->
          photos & videos
          <!-- <span
            class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 font-medium rounded-full bg-indigo-900 transition ease-in-out duration-150 group-hover:bg-gray-100 group-focus:bg-gray-100"
          >
            4
          </span> -->
        </a>
        <a
          href="#"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover: hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: calendar -->
          <!-- <svg
            class="mr-3 h-6 w-6  group-hover: group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg> -->
          pubblications
        </a>
        <a
          href="#"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover: hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: inbox -->
          <!-- <svg
            class="mr-3 h-6 w-6  group-hover: group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg> -->
          workshops
          <!-- <span
            class="ml-auto inline-block py-0.5 px-3 text-xs leading-4 font-medium rounded-full bg-indigo-900 transition ease-in-out duration-150 group-hover:bg-gray-100 group-focus:bg-gray-100"
          >
            12
          </span> -->
        </a>
        <a
          href="#"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover: hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: chart-bar -->
          <!-- <svg
            class="mr-3 h-6 w-6  group-hover: group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg> -->
          yoga & massages
        </a>
        <a
          href="#"
          class="group flex items-center px-2 py-2 text-lg leading-5 font-medium hover: hover:bg-white focus:outline-none focus: focus:bg-white transition ease-in-out duration-150"
        >
          <!-- Heroicon name: chart-bar -->
          <!-- <svg
            class="mr-3 h-6 w-6  group-hover: group-focus: transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg> -->
          others
        </a>
      </nav>
    </div>
    <!-- <div class="flex-shrink-0 flex border-t border-indigo-700 p-4">
      <a href="#" class="flex-shrink-0 w-full group block">
        <div class="flex items-center">
          <div>
            <img
              class="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-lg leading-5 font-medium ">Tom Cook</p>
            <p
              class="text-xs leading-4 font-medium  group-hover:text-indigo-100 transition ease-in-out duration-150"
            >
              View profile
            </p>
          </div>
        </div>
      </a>
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>
