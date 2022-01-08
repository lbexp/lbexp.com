<template>
  <h2 class="title">
    Projects I've contributed on:
  </h2>
  <div class="content">
    <ItemProject v-for="(item, key) in projectsData" :key="key" :data="{ index: key, ...item }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemProject from '@/components/ItemProject.vue';

export default defineComponent({
  name: 'Projects',
  components: {
    ItemProject,
  },
  setup() {
    const projectsData = [
      {
        title: 'ERP PT. Gasing Sulawesi',
        status: 'Ongoing',
        scope: 'Backend',
        stack: ['Laravel', 'MySQL', 'REST API', 'JSON'],
        desc: 'Developed a RESTful API backend web service using Laravel and MySQL database for doing data related operation that needs to be done in frontend web application in this project.',
      },
      {
        title: 'Kementerian BUMN Dashboard',
        status: 'Finished',
        scope: 'Fullstack',
        stack: ['Vue.js', 'Vuex', 'Laravel', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL'],
        desc: 'Developed a monolith dashboard web application using Laravel + Vue.js + Inertia.js. Besides doing operation by writing and reading data from PostgreSQL database directly in monolith way, the web app is also developed to consume supported data from other backend web service in this project.',
      },
      {
        title: 'Senpai',
        status: 'Finished',
        scope: 'Frontend - Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Translated app mockups into ~40 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.',
      },
      {
        title: 'Fabulash',
        status: 'Finished',
        scope: 'Frontend - Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Translated app mockups into ~100 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.',
      },
      {
        title: 'Pertamina HSSE',
        status: 'Finished',
        scope: 'Frontend - Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Translated app mockups into ~50 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.',
      },
      {
        title: 'Ibnu Sina Komkordik',
        status: 'Finished',
        scope: 'Frontend - Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Translated app mockups into ~20 HTML static pages with styles using CSS & Bootstrap and DOM manipulation using JavaScript & jQuery.',
      },
    ];

    return {
      projectsData,
    };
  },
});
</script>

<style scoped lang="scss">
.title {
  font-size: 3.5rem;
  margin-bottom: 3rem;
};

.content {
  display: grid;
  gap: 2rem;
}
</style>
