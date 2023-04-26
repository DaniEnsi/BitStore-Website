<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    /**
     * Returns localized GitHub notice string in Turkish/English according to current route.
     * @returns {string}
     */
    getLocalizedNotice(): string {
      if (this.$route.name?.includes("blog"))
        return "Diese Website wurde von DaniEnsi entworfen und erstellt."
      //if route name incudes shop, return this string
      if (this.$route.name?.includes("shop"))
        return "All Products sold here are for educational purposes only."
      else return "This Website was designed and created by DaniEnsi."
    },
  },
  methods: {
    /**
     * Returns localized GitHub link string in Turkish/English according to current route.
     * @returns {string}
     */
    getLocalizedLink(): string {
      if (this.$route.name?.includes("shop"))
        return "/terms"
      else return "https://github.com/DaniEnsi"
    },
  },
})
</script>

<template>
  <div
    class="bg-gray-200/50 w-full py-4 text-gray-900 dark:(bg-neutral-800 text-gray-200)"
  >
    <div class="mx-auto px-4 w-11/12 sm:w-9/12 md:w-7/12">
      <div class="space-y-4 text-center sm:(space-y-0 space-x-6 text-left)">
        <SmartLink
          :href="getLocalizedLink()"
          class="text-center sm:truncate hover:underline" 
          >{{ getLocalizedNotice }}</SmartLink
        >
      </div>
    </div>
  </div>
</template>
