<script lang="ts">
import Vue, { PropType } from "vue"

// Import type
import type { PortfolioMeta } from "./Index.vue"

export default Vue.extend({
  props: {
    meta: {
      type: Object as PropType<PortfolioMeta>,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
})
</script>

<template>
  <div
    v-if="meta"
    class="overflow-hidden"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <SmartLink
      :title="meta.title"
      :href="meta.href"
      class="rounded-lg cursor-pointer space-y-2 focus-ring"
    >
      <div class="relative">
        <SmartImage
          :src="meta.image"
          class="rounded h-40 w-full flex filter bg-neutral-300 dark:bg-neutral-800 dark:brightness-100 rounded-xl"
        />

        <transition name="fade" mode="out-in">
          <div
            v-show="hovered"
            class="flex bg-black/50 inset-0 absolute items-center justify-center rounded-xl"
          >
            <IconShoppingCart class="h-6 text-white w-6" />
            <h2 class="text-white font-semibold text-lg pl-2 pt-1">{{meta.price}}</h2>
          </div>
        </transition>
      </div>

      <div class="flex flex-col space-y-1 items-center">
        <h2
          class="font-semibold text-xl leading-tight text-gray-700 truncate dark:text-gray-200 "
        >
          {{ meta.title }}
        </h2>
        <p class="text-neutral-500 line-clamp-2 flex items-center">
          {{ meta.description }}
        </p>
      </div>
    </SmartLink>
  </div>
</template>
