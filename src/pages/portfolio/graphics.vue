<script lang="ts" >

import Vue from "vue"

/* Interfaces */

export default Vue.extend({
  head() {
    const title = "Graphics"
    const description =
      "This is a small collection of Graphics I handmade using Blender."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "portfolio",
        url: "https://bitstore.dev/portfolio/graphics",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/portfolio/graphics",
        },
      ],
    }
  },

})

</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 sm:w-9/10">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">Graphics</h1>

        <p>
          This is a small collection of Graphics I handmade using Blender. If you are interested in any of these, please contact me. If you are looking for someone how can make you custom 3D models for low prices, feel free to contact me.
        </p>
      </header>





      <section class="space-y-4">
        <Title>Images</Title>

        <div class="grid px-4 gap-4 md:grid-cols-3">
          <SmartImage src="https://i.vgy.me/VVFACq.jpg" alt="Website" class="rounded-xl h-75"/>
          <SmartImage src="https://i.vgy.me/aOnqme.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/IUsCFe.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/XXKdkf.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/q5M9UX.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/8MKoyH.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/vNWTl8.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/BqWbsX.jpg" alt="Website" class="rounded-xl h-75" />
          <SmartImage src="https://i.vgy.me/lvjWZm.jpg" alt="Website" class="rounded-xl h-75" />

        </div>
      </section>

    </div>
  </div>
</template>