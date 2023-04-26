<script lang="ts" >

import Vue from "vue"
import type { Social } from "~/@types/runtimeConfig"

/* Interfaces */

export default Vue.extend({
  head() {
    const title = "BitCord"
    const description =
      "Discord Nitro Generator with proxy support and code checker using Python and Command Line"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "portfolio, software",
        url: "https://bitstore.dev/portfolio/bitcord",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/portfolio/bitcord",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the Sponsor object in runtime config.
     * @returns {Social}
     */
    getSocial(): Social {
      return this.$config.social as Social

    },
  }
})

</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 sm:w-9/10">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">BitCord</h1>

        <p>
          BitCord is a dicord nitro Generator. It uses a simple command line interface to generate nitro codes. It is written in python and uses the discord.py library.
        </p>
        <br>
        <SmartLink :href="getSocial.github" blank>
          <BlogNotification type="success" >
            The Free Version of BitCord is available for download on my GitHub...
          </BlogNotification>
        </SmartLink>
      </header>
      <section class="space-y-4">
        <Title>Features</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <p>
            - Command Line based User Interface<br>
            - Using lastest version of request module<br>
            - Automatic Nitro Code Checker<br>
            - Automatic Proxy Support<br>
            - Boost/Classic Code generation
          </p>
        </div>
      </section>





      <section class="space-y-4">
        <Title>Images</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <SmartImage src="https://i.vgy.me/CK0h2R.jpg" alt="Website" class="rounded-xl"/>
        </div>
      </section>

    </div>
  </div>
</template>
