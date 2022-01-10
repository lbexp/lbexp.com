<template>
  <div class="app">
    <Header />
    <main class="main">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped lang="scss">
.app {
  padding: 0px 20px;
}

.main {
  padding: 40px 0px 20px 0px;
}

@media screen and (min-width: 769px) {
  .app {
    padding: 0px 100px;
  }

  .main {
    padding: 80px 0px 40px 0px;
  }
}
</style>
