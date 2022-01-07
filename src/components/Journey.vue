<template>
  <h2 class="title">
    My journey so far,
  </h2>
  <p class="desc">
    Currently pursuing my career as software engineer in a Makassar based software house.
  </p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Journey',
});
</script>
<style scoped lang="scss">
.title {
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
};

.desc {
  font-size: 1.5rem;
}
</style>
