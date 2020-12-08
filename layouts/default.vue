<template>
  <div class="flex flex-row h-screen">
    <Sidebar class="w-1/4" />
    <main class="w-3/4 overflow-y-auto">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: Sidebar,

  data() {
    return {
      photos: {},
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spinnaker&display=swap');

html {
  font-family: 'Spinnaker', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
