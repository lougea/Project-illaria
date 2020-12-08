<template>
  <div>
    <div
      class="fixed top-0 flex flex-row space-x-8 px-6 bg-gray-100 opacity-75"
    >
      <p
        class="text-2xl"
        :class="{ 'text-red-500': ortherkin }"
        @click="openOnglet('ortherkin')"
      >
        Ortherkin
      </p>
      <p
        :class="{ 'text-red-500': papier }"
        class="text-2xl"
        @click="openOnglet('papier')"
      >
        Papier machine
      </p>
    </div>
    <div class="max-h-screen space-y-12">
      <div v-if="ortherkin" class="max-h-screen">
        <div v-if="!cover">
          <div
            v-for="(url, index) in urlsOrtherkin"
            :key="index"
            class="flex h-screen"
          >
            <div class="m-auto">
              <video
                :src="url"
                class="object-cover w-full h-auto z-20"
                controls
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div v-if="papier" class="max-h-screen">
        <div v-if="!cover" class="grid gap-2 md:grid-cols-2 p-8">
          <div
            v-for="(url, index) in urlsPapier"
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
            <img :src="urlsPapier[index]" alt="" class="h-screen z-20" />
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
      ortherkin: true,
      papier: false,
      urlsOrtherkin: [],
      urlsPapier: [],
      cover: false,
      index: 0,
    }
  },
  async mounted() {
    try {
      const ref = storage.ref('assets/publications/ortherkin/1.mp4')
      this.urlsOrtherkin.push(await ref.getDownloadURL())

      for (let i = 1; i < 4; i++) {
        const ref = storage.ref(`assets/publications/papier/${i}.jpg`)
        this.urlsPapier.push(await ref.getDownloadURL())
      }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    openOnglet(onglet) {
      if (onglet === 'ortherkin') {
        this.ortherkin = true
        this.papier = false
        this.cover = false
      }
      if (onglet === 'papier') {
        this.ortherkin = false
        this.papier = true
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
