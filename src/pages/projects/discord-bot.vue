<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { discordbot } from "~/@types/runtimeConfig"

export default Vue.extend({
  head() {
    const title = "Discord bot"
    const description =
      "A new generation ticket bot for discord with various purchaseing options."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "discord-bot",
        url: "https://bitstore.dev/projects/discord-bot",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/projects/discord-bot",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the project link from runtime config.
     * @returns {discordbot}
     */
    getLink(): discordbot {
      return this.$config.links.discordbot
    },
  },
})
</script>

<template>
  <div class="space-y-6 py-6">
    <div class="space-y-8 text-gray-500 sm:w-9/12 dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">
          Discord Bot
        </h1>

        <p>
          A new generation ticket bot for discord with various purchaseing options. The bot will have many diffrent payment options, allowing server owners to choose the payment method that suits them best. <br><br>
        </p>

        <BlogNotification type="warning">
          This project was delayed due to a recent change in discord's ToS. I am currently working on a new version of the bot that will be compliant with the new ToS.
        </BlogNotification>

        <p>
          <br>The bot will be available for free, but will also have a premium version with more features and a better support.
        </p>
      </header>

      <!-- For later use


      <div class="flex flex-wrap space-x-4 px-4">
        <SmartImage
          src="https://i.vgy.me/iXYvCp.jpg"
          height="150"
          width="150"
          class="rounded-md"
        />

        <SmartImage
          src="https://i.vgy.me/zEQpUG.jpg"
          height="150"
          width="150"
          class="rounded-md"
        />
      </div>

      <div class="space-y-2 items-center sm:(flex space-x-2 space-y-0)">
        <Button :href="getLink.website" icon="IconLink" blank>
          Visit Website
        </Button>

        <Button :href="getLink.faq" icon="IconQuestion" blank>
          View FAQ
        </Button>
      </div>
      -->
    </div>
  </div>
</template>


/*       href="https://github.com/ArsenArsen/KShare/"
            class="underline"
            blank
            >KShare</SmartLink
          >
*/
