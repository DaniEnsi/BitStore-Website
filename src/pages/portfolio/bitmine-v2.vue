<script lang="ts" >

import Vue from "vue"

/* Interfaces */

export default Vue.extend({
  head() {
    const title = "BitMine V2"
    const description =
      "Crypto Mining Software built using Python and Command Line"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "portfolio, software",
        url: "https://bitstore.dev/portfolio/bitmine-v2",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/portfolio/bitmine-v2",
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
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">BitMine V2</h1>

        <p>
          BitMine V2 is a crypto mining software. It uses a simple command line interface to mine crypto. It is written in python and uses the requests library. It was originally made for a client but was later relplaced. The successor can be found <SmartLink class="text-center sm:truncate hover:underline"
            href="/portfolio/bitmine-v3">here</SmartLink>.
        </p>
        <br>
        <BlogNotification type="danger">
          This Software is no longer available for download...
        </BlogNotification>
      </header>

      <section class="space-y-4">
        <Title>Features</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <p>
            - Command Line based User Interface<br>
            - Using lastest version of request module<br>
            - Automatically detects max threads<br>
            - Automatic Proxy Support<br>
            - Stores your crypto adresses automatically<br>
          </p>
        </div>
      </section>

      <section class="space-y-4">
        <Title>Images</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <SmartImage src="https://i.vgy.me/KPyyVs.jpg" alt="Website" class="rounded-xl"/>
        </div>
      </section>

    </div>
  </div>
</template>
