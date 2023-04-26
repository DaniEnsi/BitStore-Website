<script lang="ts">
import Vue, { PropType } from "vue"

export default Vue.extend({
  data() {
    return {
      viewed: false,
    }
  },
  props: {
    text: {
      type: String,
      required: true,
      default: "This is a notification",
    },
    colour: {
      type: String,
      required: false,
      default: "bg-blue-500",
    },
    icon: {
      type: String,
      required: false,
      default: null,
    }
  },
  methods: {
    hidden() {
      this.viewed = true
    }
  },
  computed: {
    getIconName(): string {
      return this.icon?.startsWith("Icon") ? this.icon : `Icon${this.icon}`
    },
  },
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="viewed === false"
      class="fixed p-4 rounded-lg shadow-md select-none md:top-4 right-4 lg:w-1/6 ring-1 ring-white/10 dark:ring-white/20 ring-black/20 background-when-supports z-20  <md:bottom-4 <md:left-4"
    >
      <div class="flex items-center justify-between gap-2">
        <SmartLink
          href="https://github.com/sponsors/daniensi"
          blank
          :class="{'flex items-center space-x-2': $slots.icon}"
        >
        <div class="flex items-center justify-between gap-2">
          <component :is="getIconName" v-if="icon && !$slots.icon" class="h-5 w-5 text-white" />
          <slot v-else name="icon" />
          <span v-if="$slots.default">
            <slot/>
          </span>
          <h3 class=" font-medium leading-tight dark:text-white">
            {{ text }}
          </h3>
        </div>
        </SmartLink>

        <button
          class="p-1 transition-colors rounded-full hover:bg-black/20 dark:hover:bg-white/20 bg-black/10 dark:bg-white/10 dark:text-white" @click="hidden"
        >
          <IconX class="w-3 h-3" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.background-when-supports {
  @apply backdrop-blur-md backdrop-filter dark:bg-neutral-900;
}

@supports (backdrop-filter: blur()) {
  .background-when-supports {
    @apply backdrop-blur-md backdrop-filter dark:bg-neutral-800/10;
  }
}
</style>
