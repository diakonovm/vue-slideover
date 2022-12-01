# @diakonovm/vue-slideover

Simple Vue modal slideover component styled with TailwindCSS

## Install

```bash
npm install @diakonovm/vue-slideover
```

## Usage

```vue
<script>
import Slideover from "@diakonovm/vue-slideover";
import "@diakonovm/vue-slideover/style.css";

export default {
  components: {
    Slideover,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 right-0 bg-white">
      <button class="flex items-center py-4 px-4" @click="toggle">
        <span class="block text-2xl">🚪</span>
        <span class="block text-sm">open</span>
      </button>
    </div>

    <Slideover
      :scrollable="false"
      :show="show"
      :width="`max-w-lg`"
      @on-hide="show = false"
      class="sm:rounded-tl-md sm:rounded-bl-md"
      v-slot="{ hide }"
    >
      <div class="flex-shrink-0 flex items-center justify-end bg-white">
        <button
          @click="hide"
          class="flex items-center space-x-1.5 text-2xl py-4 px-4"
        >
          <span class="block text-sm">close</span>
          <span class="block text-2xl">🚪</span>
        </button>
      </div>
      <div class="flex-1 overflow-y-auto"></div>
      <div class="flex-shrink-0 h-20 bg-white"></div>
    </Slideover>
  </div>
</template>
```

### Props

| Prop       | Default         | Description                           |
| ---------- | --------------- | ------------------------------------- |
| scrollable | `false`         | Disable background scroll             |
| show       | `false`         | View state of modal                   |
| transition | `vue-slideover` | Specify transition animation class    |
| width      | `max-w-lg`      | Apply any TailwindCSS `max-w-*` class |

### Events

| Event   | Description                                           |
| ------- | ----------------------------------------------------- |
| on-hide | Upon invocation of `hide`. Use to toggle `show` state |

## License

The MIT License (MIT).
