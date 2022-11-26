<script>
const DEFAULT_TRANSITION = 'vue-slideover'
const DEFAULT_WIDTH = 'max-w-lg'

export default {
  name: 'VueSlideover',
  inheritAttrs: false,
  props: {
    scrollable: { type: Boolean, required: false, default: false },
    show: { type: Boolean, required: true, default: false },
    transition: { type: String, required: false, default: DEFAULT_TRANSITION },
    width: {  type: String, required: false, default: DEFAULT_WIDTH }
  },
  methods: {
    freeze() {
      if (!this.scrollable)
        document.body.classList.add('vue-slideover-freeze-body')
    },
    unfreeze() {
      if (!this.scrollable)
        document.body.classList.remove('vue-slideover-freeze-body')
    }, 
    hide() {
      this.$emit('on-before-hide')
      this.$emit('on-hide')
      this.$emit('on-after-hide')
    },
    onEscapeKey(event) {
      if (event.which === 27 && this.show) {
        this.$emit('on-hide')
      }
    }
  },
  watch: {
    show: {
      handler: function(newValue) {
        if (newValue) {
          this.freeze()
        } else {
          this.unfreeze()
        }
      },
      immediate: false
    }
  },
  beforeMount() {
    window.addEventListener('keyup', this.onEscapeKey)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onEscapeKey)
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 z-50">
    <Transition 
      name="fade-overlay"
    >
      <button
        v-show="show"
        type="button"
        class="fixed inset-0 h-full w-full bg-transparent cursor-default bg-gray-500 opacity-20 focus:outline-none"
        tabindex="-1"
        @click.stop="hide"
      >
      </button>
    </Transition>

    <Transition :name="transition">
      <div 
        v-show="show" 
        class="fixed inset-y-0 right-0 max-w-full max-h-full overflow-y-hidden"
      >
        <div :class="[
          `flex flex-col w-screen h-full max-h-full bg-white overflow-hidden`,
          `sm:${width}`,
          $attrs.class
        ]">
          <slot :hide="hide">
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

/* TRANSITIONS */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: all 300ms ease-in-out;
}
.fade-overlay-enter-from {
  @apply opacity-0;
}
.fade-overlay-enter-to {
  @apply opacity-20;
}
.fade-overlay-leave-from {
  @apply opacity-20;
}
.fade-overlay-leave-to {
  @apply opacity-0;
}
.slideover-enter-active,
.slideover-leave-active {
  @apply transform transition duration-300;
}
.slideover-enter-from {
  @apply translate-x-full;
}
.slideover-enter-to {
  @apply translate-x-0;
}
.slideover-leave-from {
  @apply translate-x-0;
}
.slideover-leave-to {
  @apply translate-x-full;
}
</style>
