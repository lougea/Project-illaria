<template>
  <div class="h-screen flex flex-col">
    <div v-if="modal" class="z-40 h-full flex" @click="modal = false">
      <div class="opacity-100 m-auto">
        <div
          :class="`m-auto grid gap-2 grid-cols-${
            projectModal.srcs.length === 1 ? 1 : 2
          } p-6`"
        >
          <div
            v-for="(src, index) in projectModal.srcs"
            :key="index"
            class="h-auto m-auto"
            :class="{
              'w-2/5': projectModal.srcs.length === 1,
              'w-4/5': projectModal.srcs.length !== 1,
            }"
          >
            <img :src="src" class="object-cover w-full h-full border z-20" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="p-10 m-4 grid grid-cols-2 gap-4 h-full">
      <div
        v-for="project in projects"
        :key="project.id"
        class="text-center relative"
        width="400px"
        height="400px"
        @click="showModal(project.id)"
      >
        <img
          :src="project.srcs[0]"
          alt=""
          class="object-cover h-full w-full border z-50"
        />

        <div class="absolute inset-0 z-30 opacity-0 hover:opacity-100 flex">
          <p class="text-4xl m-auto text-black bg-white p-2">
            {{ project.name }}
          </p>
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
      modal: false,
      index: 0,
      projects: [
        {
          id: 1,
          name: 'Arduino',
          cover: 'assets/workshop/arduino/3.png',
          urls: [
            'assets/workshop/arduino/1.png',
            'assets/workshop/arduino/2.png',
            'assets/workshop/arduino/3.png',
            'assets/workshop/arduino/4.png',
          ],
          srcs: [],
        },
        {
          id: 2,
          name: 'Ville sur papier',
          cover: 'assets/workshop/peinture/6.JPG',
          urls: [
            'assets/workshop/peinture/1.JPG',
            'assets/workshop/peinture/2.JPG',
            'assets/workshop/peinture/3.JPG',
            'assets/workshop/peinture/4.JPG',
            'assets/workshop/peinture/5.JPG',
            'assets/workshop/peinture/6.JPG',
            'assets/workshop/peinture/7.JPG',
            'assets/workshop/peinture/8.JPG',
            'assets/workshop/peinture/9.JPG',
            'assets/workshop/peinture/10.JPG',
          ],
          srcs: [],
        },
        {
          id: 3,
          name: 'Ville vivante',
          cover: 'assets/workshop/bricolage/6.JPG',
          urls: [
            'assets/workshop/bricolage/1.JPG',
            'assets/workshop/bricolage/2.JPG',
            'assets/workshop/bricolage/3.JPG',
            'assets/workshop/bricolage/4.JPG',
            'assets/workshop/bricolage/6.JPG',
            'assets/workshop/bricolage/7.JPG',
            'assets/workshop/bricolage/8.JPG',
            'assets/workshop/bricolage/9.JPG',
            'assets/workshop/bricolage/10.JPG',
            'assets/workshop/bricolage/11.JPG',
            'assets/workshop/bricolage/12.JPG',
            'assets/workshop/bricolage/13.JPG',
            'assets/workshop/bricolage/14.JPG',
            'assets/workshop/bricolage/15.JPG',
            'assets/workshop/bricolage/16.JPG',
            'assets/workshop/bricolage/17.JPG',
            'assets/workshop/bricolage/18.JPG',
            'assets/workshop/bricolage/19.JPG',
            'assets/workshop/bricolage/20.JPG',
          ],
          srcs: [],
        },
      ],
    }
  },
  computed: {
    projectModal() {
      return this.projects[this.index - 1]
    },
  },
  mounted() {
    try {
      this.projects.map((project) => {
        project.urls.map(async (url) => {
          const ref = storage.ref(url)
          project.srcs.push(await ref.getDownloadURL())
        })
      })
      console.log(this.projects)
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    showModal(index) {
      this.modal = true
      this.index = index
    },
  },
}
</script>
<style>
.button_slide {
  color: #fff;
  border: 2px solid rgb(216, 2, 134);
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: 'Lucida Console', Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #d80286;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}
</style>
