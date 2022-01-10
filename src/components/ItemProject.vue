<template>
  <div :class="['item-project-wrapper', (isOnEnd ? 'justify-end' : null)]">
    <span v-if="!isOnEnd" class="item-journey-app">
      🕸
    </span>
    <div class="item-project-content-wrapper">
      <div class="item-project-header">
        <h3 :class="['item-project-title', (isOnEnd ? 'text-end' : null)]">
          {{ data?.title }} ({{ data?.scope }})
        </h3>
        <h4 :class="['item-project-stack', (isOnEnd ? 'text-end' : null)]">
          <span v-for="(item, index) in data?.stack" :key="index">
            {{ (index ? ' - ' : '') + item }}
          </span>
        </h4>
      </div>
      <p :class="['item-project-desc', (isOnEnd ? 'text-end' : null)]">
        {{ data?.desc }}
      </p>
    </div>
    <span v-if="isOnEnd" class="item-journey-app">
      🕸
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface ProjectInterface {
  index: number,
  title: string,
  scope: string,
  stack: string[],
  desc: string,
}

export default defineComponent({
  name: 'ItemProject',
  props: {
    data: Object as () => ProjectInterface,
  },
  setup(props) {
    const isOnEnd = computed(() => {
      if (props.data) {
        return props.data.index % 2;
      }
      return false;
    });

    return {
      isOnEnd,
    };
  },
});
</script>

<style scoped lang="scss">
.item-project-wrapper {
  display: flex;
  align-items: start;
  gap: 1rem;
}

.item-journey-app {
  font-size: 1.75rem;
}

.item-project-content-wrapper {
  width: 100%;
}

.item-project-header {
  margin-bottom: 1rem;
}

.item-project-title {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.item-project-stack {
  font-size: 1.375rem;
}

.item-project-desc {
  font-size: 1.125rem;
  font-weight: 300;
}

.text-end {
  text-align: end;
}

.justify-end {
  justify-content: end;
}

@media screen and (min-width: 769px) {
  .item-project-wrapper {
    gap: 2.5rem;
  }

  .item-journey-app {
    font-size: 4rem;
  }

  .item-project-content-wrapper {
    width: 50%;
  }

  .item-project-header {
    margin-bottom: 1rem;
  }

  .item-project-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .item-project-stack {
    font-size: 1.5rem;
  }

  .item-project-desc {
    font-size: 1.25rem;
  }
}
</style>
