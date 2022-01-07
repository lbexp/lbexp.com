<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <section id="welcome">
      <Welcome />
    </section>
    <section id="journey">
      <Journey />
    </section>
    <section id="projects">
      <Projects />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Welcome from '@/components/Welcome.vue';
import Journey from '@/components/Journey.vue';
import Projects from '@/components/Projects.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    Welcome,
    Journey,
    Projects,
  },
});
</script>

<style scoped lang="scss">
section {
  padding: 60px 0px;
}
</style>
