<template>
  <div class="app">
    <Header />
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/layouts/Header.vue';

export default defineComponent({
  components: {
    Header,
    // Navbar,
  },
});
</script>

<style scoped lang="scss">
.app {
  padding: 0px 100px
}

.main {
  padding: 80px 0px;
}
</style>
