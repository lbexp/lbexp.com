<template>
  <h2 class="title">
    I'm Fiqar 'lbexp' Aprialim,
  </h2>
  <p class="desc">
    Currently pursuing my career as software engineer in a
    local software agency.
  </p>
  <p class="more-desc">
    Based in Makassar, Indonesia 🇮🇩.
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Welcome',
});
</script>

<style scoped lang="scss">
.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
};

.desc {
  font-size: 1.25rem;
}

.more-desc {
  margin-top: 0.25rem;
  font-size: 1.25rem;
}

@media screen and (min-width: 769px) {
  .title {
    font-size: 3.5rem;
    margin-bottom: 0.75rem;
  };

  .desc {
    font-size: 1.5rem;
  }

  .more-desc {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
}
</style>
