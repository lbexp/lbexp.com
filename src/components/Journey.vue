<template>
  <h2 class="title">
    My journey so far:
  </h2>
  <div class="content">
    <ItemJourney v-for="(item, key) in journeyData" :key="key" :data="{ index: key, ...item }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemJourney from '@/components/ItemJourney.vue';

export default defineComponent({
  name: 'Journey',
  components: {
    ItemJourney,
  },
  setup() {
    const journeyData = [
      {
        title: 'Software Engineer (Full-time)',
        subtitle: 'Upana Studio',
        time: 'January 2022 - Present',
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Frontend Web Programmer (Full-time)',
        subtitle: 'Upana Studio',
        time: 'March 2021 - January 2022 (~10 Months)',
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Frontend Web Programmer (Part-time)',
        subtitle: 'Upana Studio',
        time: 'October 2019 - December 2019 (~3 Months)',
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Frontend Web Programmer (Intern)',
        subtitle: 'Upana Studio',
        time: 'June 2019 - September 2019 (~3 Months)',
        desc: 'Lorem ipsum dolor sit amet',
      },
      {
        title: 'Bachelor\'s degree, Informatics Engineering',
        subtitle: 'Universitas Hasanuddin',
        time: '2015 - 2020 (~5 Years)',
        desc: 'Lorem ipsum dolor sit amet',
      },
    ];

    return {
      journeyData,
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
  display: flex;
  gap: 3rem;
  flex: 1;
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 20px;
}
</style>
