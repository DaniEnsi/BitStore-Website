<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { bitstore } from "~/@types/runtimeConfig"

export default Vue.extend({
  head() {
    const title = "BitStore"
    const description =
      "Online Shop where I sell my paid and free discord tools."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "bitstore",
        url: "https://bitstore.dev/projects/bitstore",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/projects/bitstore",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the project link from runtime config.
     * @returns {bitstore}
     */
    getLink(): bitstore {
      return this.$config.links.bitstore
    },
  },
})
</script>

<template>
  <div class="space-y-6 py-6">
    <div class="space-y-4 text-gray-500 sm:w-9/12 dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">
          BitStore
        </h1>

        <p>
          My online shop where I sell my paid and free discord tools. I am currently working on a new website for this project. This website will be a lot more user friendly and will have a lot more features.<br><br>- <a class="font-bold text-neutral-600  dark:text-neutral-400" >Free Tools</a> are available on Github <br>- <a class="font-bold text-neutral-600  dark:text-neutral-400">Paid Tools</a> can be purchased in my Shop
        </p>
      </header>

      <div class="flex px-4 gap-4">
        <SmartImage
          src="https://i.vgy.me/WGwJMr.png"
          class="rounded-md h-40 w-160"
        />

      </div>
    </div>

    <div class="space-y-2 items-center sm:(flex space-x-2 space-y-0)">
      <Button :href="getLink.github" blank icon="Link" >
        <span>Go to Github</span>
      </Button>

      <Button :href="getLink.shop" icon="IconDollar" > <!--"blank" makes it a new tab -->

        <span>Visit Shop</span>
      </Button>
    </div>
  </div>
</template>
