<template>
  <div class="header">
    <Logo />
    <Navbar />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/layouts/Navbar.vue';
import Logo from '@/components/layouts/Logo.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Navbar,
    Logo,
  },
});
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px 20px 100px;
}
</style>
