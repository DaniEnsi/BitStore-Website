<script lang="ts">
import Vue from "vue"

import type { webstax } from "~/@types/runtimeConfig"

export default Vue.extend({
  data() {
    return {
      pages: [
        {
          title: "Templates - comming soon",
          url: "",
          description:
            "Use one of our honderds of templates to create your own customised webpage.",
        },
        {
          title: "Designer - comming soon",
          url: "",
          description:
            "Tool that allows you to design compleatly custom websites using our custom designer.",
        },
      ],
    }
  },
  head() {
    const title = "WebStax"
    const description =
      "Webapp to help unexperienced users to create their own simple website"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "webstax, webdesigner, websites",
        url: "https://bitstore.dev/projects/webstax",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/projects/webstax",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the project link from runtime config.
     * @returns {webstax}
     */
    getLink(): webstax {
      return this.$config.links.webstax
    },
  },
})
</script>

<template>
  <div class="py-4">
    <div class="space-y-6 text-gray-500 sm:w-9/12 dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">WebStax</h1>

        <p>
          WebStax is a website I am currently working on, which helps you to create your own clean looking website with ease. It is currently in development and will be released soon.<br><br>
        </p>

        <BlogNotification type="warning">
          This project is currently in development an will be available for public use soon...
        </BlogNotification>
      </header>

      <section class="grid gap-4 sm:grid-cols-2">
        <Card
          v-for="(page, index) in pages"
          :key="`page-${index}`"
          :title="page.title"
          :href="page.url"
        >
          {{ page.description }}
        </Card>
      </section>

      <section class="space-y-4">
        <Button :href="getLink.website" icon="IconLink" blank>


          Visit WebStax
        </Button>
      </section>
    </div>
  </div>
</template>
