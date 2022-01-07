<template>
  <header class="header">
    <Logo />
    <Navbar />
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/layouts/Logo.vue';
import Navbar from '@/components/layouts/Navbar.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    Navbar,
  },
});
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 20px 0px;
}
</style>
