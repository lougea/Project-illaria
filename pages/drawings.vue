<template>
  <div class="h-screen flex flex-col">
    <div class="p-6 m-4 grid grid-cols-3 gap-4">
      <div
        v-for="project in projects"
        :key="project.id"
        class="text-center relative"
        @click="showModal(project.id)"
      >
        <img
          :src="`${project.cover}`"
          alt=""
          class="object-cover w-full h-full border z-10"
        />

        <div class="absolute inset-0 z-30 opacity-0 hover:opacity-100">
          <p class="text-3xl">
            {{ project.name }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="modal"
      class="absolute inset-0 opacity-75 bg-gray-200 z-40 overflow-hidden"
      @click="modal = false"
    >
      <div class="m-auto opacity-100">
        <div v-for="project in projects" :key="project.id">
          <div v-for="url in project.urls" :key="url.id">
            <img
              :src="url"
              alt=""
              class="object-cover w-full h-full border z-60"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      projects: {
        project1: {
          id: 1,
          name: 'Project 1',
          cover: 'pint.jpg',
          urls: ['assets/drawings/animals/1.jpg'],
        },
        project2: {
          id: 2,
          name: 'Project 2',
          cover: 'pint.jpg',
        },
        project3: {
          id: 3,
          name: 'Project 3',
          cover: 'pint.jpg',
        },
        project4: {
          id: 4,
          name: 'Project 4',
          cover: 'pint.jpg',
        },
        project5: {
          id: 5,
          name: 'Project 5',
          cover: 'pint.jpg',
        },
        project6: {
          id: 6,
          name: 'Project 6',
          cover: 'pint.jpg',
        },
        project7: {
          id: 7,
          name: 'Project 7',
          cover: 'pint.jpg',
        },
        project8: {
          id: 8,
          name: 'Project 8',
          cover: 'pint.jpg',
        },
        project9: {
          id: 9,
          name: 'Project 9',
          cover: 'pint.jpg',
        },
        project10: {
          id: 10,
          name: 'Project 10',
          cover: 'pint.jpg',
        },
      },
    }
  },
  methods: {
    showModal(index) {
      this.modal = true
    },
  },
}
</script>
