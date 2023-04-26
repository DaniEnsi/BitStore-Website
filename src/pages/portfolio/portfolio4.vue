<script lang="ts" >

import Vue from "vue"

/* Interfaces */

export default Vue.extend({
  head() {
    const title = "Poftfolio 4"
    const description =
      "A colourful HTML5 only 1-Page Portfolio website for programmers."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "portfolio",
        url: "https://bitstore.dev/portfolio/portfolio4",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/portfolio/portfolio4",
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
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">Portfolio - 4</h1>

        <p>
          A clean and simple Portfolio website made using vue and typescript. You can showcase your GitHub repositories,
          skills and even add hyperlinks to your social media profiles.<br><br>
        </p>
        <BlogNotification type="warning">
          If you would like to use this template, or want to have a custom website , please contact me <SmartLink
            href="/me/hireme" class="font-extrabold"> here</SmartLink> ...
        </BlogNotification>
      </header>

      <section class="space-y-4">
        <Title>Images</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <SmartImage src="https://i.vgy.me/rdyS0p.jpg" alt="Website" class="rounded-xl"/>
        </div>
      </section>

    </div>
  </div>
</template>
