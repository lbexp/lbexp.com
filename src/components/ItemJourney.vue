<template>
  <div class="item-journey-wrapper">
    <span v-if="data?.index" class="item-journey-arrow">
      ⬅️
    </span>
    <div class="item-journey-content-wrapper">
      <div class="item-journey-header">
        <h3 class="item-journey-title">
          {{ data?.title }}
        </h3>
        <h4 class="item-journey-subtitle">
          {{ data?.subtitle }}
        </h4>
        <p class="item-journey-time">
          {{ data?.time }}
        </p>
      </div>
      <!-- <p class="item-journey-desc">
        {{ data?.desc }}
      </p> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface JourneyInterface {
  index: number,
  title: string,
  subtitle: string,
  time: string,
  desc: string
}

export default defineComponent({
  name: 'ItemJourney',
  props: {
    data: {
      type: Object as () => JourneyInterface,
    },
  },
});
</script>

<style scoped lang="scss">
.item-journey-wrapper {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.item-journey-arrow {
  font-size: 1.5rem;
}

// .item-journey-header {
//   margin-bottom: 1rem;
// }

.item-journey-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.item-journey-subtitle {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.item-journey-time {
  font-size: 1.25rem;
  font-weight: 300;
}

.item-journey-desc {
  font-size: 1.5rem;
}
</style>
