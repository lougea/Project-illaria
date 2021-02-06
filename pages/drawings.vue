<template>
  <div class="h-screen flex flex-col">
    <div v-if="!downloaded" class="h-full flex">
      <div class="m-auto loadingio-spinner-eclipse-yfkvaezbc9o">
        <div class="ldio-l6rnq285zog">
          <div></div>
        </div>
      </div>
    </div>
    <div v-if="modal" class="z-40 h-full flex" @click="modal = false">
      <div class="opacity-100 m-auto">
        <div
          v-if="downloaded"
          :class="`m-auto grid gap-2 grid-cols-${
            projects[index - 1].srcs.length === 1 ? 1 : 2
          } p-6`"
        >
          <div
            v-for="(src, index) in projectModal.srcs"
            :key="index"
            class="m-auto bg-red-500"
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
    <div
      v-if="downloaded"
      class="p-6 m-4 grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        height="500px"
        class="text-center relative bg-grey-100"
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
  components: {},
  data() {
    return {
      modal: false,
      index: 0,
      downloaded: false,
      projects: [
        {
          id: 1,
          name: 'Animals',
          cover: 'assets/draw/animals/1.jpg',
          urls: [
            'assets/draw/animals/1.jpg',
            'assets/draw/animals/2.jpg',
            'assets/draw/animals/3.jpg',
            'assets/draw/animals/4.jpg',
          ],
          srcs: [],
        },
        {
          id: 2,
          name: 'Carnet',
          cover: 'assets/draw/carnet/1.jpg',
          urls: [
            'assets/draw/carnet/1.jpg',
            'assets/draw/carnet/2.jpg',
            'assets/draw/carnet/3.jpg',
            'assets/draw/carnet/4.jpg',
            'assets/draw/carnet/5.jpg',
            'assets/draw/carnet/6.jpg',
            'assets/draw/carnet/7.JPEG',
            'assets/draw/carnet/8.jpg',
            'assets/draw/carnet/9.jpg',
            'assets/draw/carnet/10.jpg',
            'assets/draw/carnet/11.jpg',
            'assets/draw/carnet/12.jpg',
            'assets/draw/carnet/13.jpg',
          ],
          srcs: [],
        },
        {
          id: 3,
          name: 'Abstractions',
          cover: 'assets/draw/carnet_abstractions/1.JPG',
          urls: ['assets/draw/carnet_abstractions/1.JPG'],
          srcs: [],
        },
        {
          id: 4,
          name: 'Forest',
          cover: 'assets/draw/forest/1.jpg',
          urls: [
            'assets/draw/forest/1.jpg',
            'assets/draw/forest/2.jpg',
            'assets/draw/forest/3.jpg',
          ],
          srcs: [],
        },
        {
          id: 5,
          name: 'Graphisme',
          cover: 'assets/draw/graphisme/1.jpg',
          urls: ['assets/draw/graphisme/1.jpg'],
          srcs: [],
        },
        {
          id: 6,
          name: 'Picnic',
          cover: 'assets/draw/picnic/1.jpg',
          urls: ['assets/draw/picnic/1.jpg', 'assets/draw/picnic/2.jpg'],
          srcs: [],
        },
        {
          id: 7,
          name: 'Poster',
          cover: 'assets/draw/poster/1.jpg',
          urls: ['assets/draw/poster/1.jpg'],
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
      this.downloaded = false
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
    this.downloaded = true
    console.log(this.downloaded)
  },

  methods: {
    showModal(index) {
      this.modal = true
      this.index = index
    },
  },
}
</script>

<style type="text/css">
@keyframes ldio-l6rnq285zog {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-l6rnq285zog div {
  position: absolute;
  animation: ldio-l6rnq285zog 1s linear infinite;
  width: 74.58px;
  height: 74.58px;
  top: 132.21px;
  left: 132.21px;
  border-radius: 50%;
  box-shadow: 0 4.407px 0 0 #c5aca4;
  transform-origin: 37.29px 39.493500000000004px;
}
.loadingio-spinner-eclipse-yfkvaezbc9o {
  width: 339px;
  height: 339px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-l6rnq285zog {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-l6rnq285zog div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
