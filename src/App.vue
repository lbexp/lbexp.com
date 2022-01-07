<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/layouts/Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>
