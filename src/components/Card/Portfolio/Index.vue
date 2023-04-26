<script lang="ts">
import Vue, { PropType } from "vue"

/* Interfaces */
import type { Portfolio } from "@/types/Post"

export interface PortfolioMeta {
  title?: string
  description?: string
  price?: string,
  href?: string
  image?: string

}

export default Vue.extend({
  props: {
    Portfolio: {
      type: Object as PropType<Portfolio>,
      required: true,
      default: () => { },
    },
    type: {
      type: String,
      required: false,
      default: "normal",
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
  computed: {
    /**
     * Returns Portfolio meta safely.
     * @returns {PortfolioMeta |null}
     */
    getPortfolioMeta(): PortfolioMeta {
      if (!this.Portfolio) return {}

      const image =
        this.Portfolio?.image

      return {
        title: this.Portfolio.title || "",
        description: this.Portfolio.description || "",
        price: this.Portfolio.price || "",
        href: this.Portfolio.href || "",
        image,
      }
    },
  },
})
</script>

<template>
  <!-- Normal -->
  <CardPortfolioNormal v-if="type === 'normal'" :meta="getPortfolioMeta" />

  <!-- Text -->
  <CardPortfolioShop v-else-if="type === 'shop'" :meta="getPortfolioMeta" />

  <!-- Text and Title -->
  <CardPortfolioTextTitle v-else-if="type === 'text-only-title'" :meta="getPortfolioMeta" />
</template>
