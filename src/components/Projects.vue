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
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Kementerian BUMN Dashboard',
        status: 'Finished',
        scope: 'Fullstack',
        stack: ['Vue.js', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Senpai',
        status: 'Finished',
        scope: 'Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Fabulash',
        status: 'Finished',
        scope: 'Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Pertamina HSSE',
        status: 'Finished',
        scope: 'Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Ibnu Sina Komkordik',
        status: 'Finished',
        scope: 'Static Pages',
        stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        desc: 'Lorem ipsum dolor sit amet',
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
