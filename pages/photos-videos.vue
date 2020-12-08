/* eslint-disable no-console */
<template>
  <div>
    <div
      class="fixed top-0 flex flex-row space-x-8 px-6 bg-gray-100 opacity-75"
    >
      <p
        class="text-sm md:text-2xl"
        :class="{ 'text-red-500': heaut }"
        @click="openOnglet('heaut')"
      >
        Collines du heaut
      </p>
      <p
        :class="{ 'text-red-500': mixt }"
        class="text-sm md:text-2xl"
        @click="openOnglet('mixt')"
      >
        Mixt
      </p>
    </div>
    <div class="max-h-screen space-y-12">
      <div v-if="heaut" class="max-h-screen">
        <div v-if="!cover" class="grid gap-2 md:grid-cols-2 h-full p-10">
          <div
            v-for="(url, index) in urlsHeaut"
            :key="index"
            class="h-auto m-auto"
          >
            <img
              :src="url"
              alt=""
              class="object-cover w-full h-auto z-20"
              @click="openCover(index)"
            />
          </div>
        </div>
        <div v-if="cover" class="p-10">
          <img :src="photo" />
          <img
            :src="urlsHeaut[index]"
            alt=""
            class="object-cover w-full h-auto z-20"
          />
        </div>
      </div>
      <div v-if="mixt" class="max-h-screen">
        <div v-if="!cover" class="grid gap-2 md:grid-cols-3 p-10">
          <div
            v-for="(url, index) in urlsMixt"
            :key="index"
            class="m-auto overflow-auto"
          >
            <img
              :src="url"
              alt=""
              class="object-cover w-full h-auto z-20"
              @click="openCover(index)"
            />
          </div>
        </div>
        <div v-if="cover" class="flex">
          <div class="m-auto">
            <img :src="urlsMixt[index]" alt="" class="z-20 h-screen" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      photo: null,
      heaut: true,
      mixt: false,
      urlsHeaut: [],
      urlsMixt: [],
      cover: false,
      index: 0,
    }
  },
  async mounted() {
    try {
      for (let i = 1; i < 15; i++) {
        const ref = storage.ref(`/assets/photos/heaut/${i}.jpg`)
        this.urlsHeaut.push(await ref.getDownloadURL())
      }

      for (let i = 1; i < 10; i++) {
        const ref = storage.ref(`/assets/photos/mixt/${i}.png`)
        this.urlsMixt.push(await ref.getDownloadURL())
      }
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    openOnglet(onglet) {
      if (onglet === 'heaut') {
        this.heaut = true
        this.mixt = false
        this.cover = false
      }
      if (onglet === 'mixt') {
        this.heaut = false
        this.mixt = true
        this.cover = false
      }
    },
    openCover(index) {
      this.cover = true
      this.index = index
    },
  },
}
</script>
