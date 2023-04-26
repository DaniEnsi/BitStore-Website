<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Social } from "~/@types/runtimeConfig"
import type { ISponsor } from "@/types/Response/Sponsors"

export default Vue.extend({
  data() {
    return {
      sponsors: [] as ISponsor[],
      services: [
        {
          image: "https://i.vgy.me/ipyXVn.png",
          name: "Template Website",
          price: "approx. 50€",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/Skmi23.png",
          name: "Custom Website",
          price: "approx. 100€",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/0iChJ6.png",
          name: "Python Script",
          price: "approx. 50€",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/RMaJO6.png",
          name: "Flutter App",
          price: "approx. 100€",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/vStOKw.png",
          name: "Discord Bot",
          price: "approx. 25$",
          revealed: false,
        },
      ],
    }
  },
  methods: {
    contactForm() {
      this.$router.push({ path: "/me/hireme-form" })
    },
  },
  head() {
    const title = "Hire Me"
    const description =
      "Looking for a developer? I'm available for hire! I can help you with your projects, whether it's a website, a Discord bot, or a Python script."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "hireme",
        url: "https://bitstore.dev/hireme",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/hireme",
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

    getSortedSponsors(): { oneTime: ISponsor[]; monthly: ISponsor[] } {
      const sponsors = this.sponsors

      const sortByPrice = (a: ISponsor, b: ISponsor) =>
        b.monthlyDollars - a.monthlyDollars

      return {
        oneTime: sponsors
          .filter((sponsor) => sponsor.isOneTime)
          .sort(sortByPrice),
        monthly: sponsors
          .filter((sponsor) => !sponsor.isOneTime)
          .sort(sortByPrice),
      }
    },
  },
})
</script>

<template>
  <div class="py-2">
    <div class="space-y-12 text-gray-500 dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 sm:w-9/10">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">Hire Me</h1>

        <p>
          <span class="font-extrabold flex ">Looking for a developer to help you with your project? Seems like you are in the right place! </span><br>
          I am currently open for hire and can help you with your project. If you are interested, please have a look at the prices before contacting me.
        </p>

        <p class="text-xs">
          P.S. We will talk about "<span class="border-b border-black/10 dark:border-white/10"
            >Final Price</span
          >" after I have finished the project. The prices listed below are just an estimate.
        </p>
      </header>

      <section class="space-y-4">
        <Title>Contact Me On</Title>

        <div class="flex flex-wrap gap-x-4 gap-y-5 mx-4">
          <Button
            v-tippy="{
              content: 'Preferred',
              placement: 'bottom',
            }"
            variant="github"
            class="w-full lg:w-max"
            href="/me/hireme-form"
            
          >
            <template #icon>
              <IconDocument
                class="h-7 text-black dark:text-white w-7"
              />
            </template>

            Submit Form  
          </Button>

          <Button
            variant="patreon"
            class="w-full lg:w-max"
            href="/me/contact"

          >
          <template #icon>
            <IconSearch class="h-7 text-white w-7" />
          </template>

            View other Contact Methods
          </Button>
        </div>
      </section>

      <section class="space-y-4">
        <Title>Estimated Prices</Title>

        <div class="mt-4 grid gap-4 mx-4 md:grid-cols-2" @click="contactForm" >
          <div
            v-for="(account, index) in services"
            :key="`account-${index}`"
            class="flex h-full w-full items-center"
            @pointerenter="account.revealed = true" @pointerleave="account.revealed = false"
          >
            <div class="rounded-l bg-gray-200/75 dark:bg-neutral-800/50">
              <SmartImage :src="account.image" class="light:bg-neutral-400 light:opacity-100 rounded-l opacity-50 h-24 w-24" />
            </div>

            <div
              class="rounded-tr rounded-br flex h-full bg-gray-200/50 w-full pl-4 items-center dark:bg-neutral-800/75" 
            >
              <div>
                <h3
                  class="font-medium text-lg text-gray-900 dark:text-neutral-300"
                >
                  {{ account.name }}
                </h3>

                <span
                  v-if="account.revealed == true"
                  class="text-gray-800 dark:text-neutral-500"
                >
                  {{ account.price }}
                </span>

                <span
                  v-else
                  class="cursor-pointer text-gray-800 dark:text-neutral-500 hover:underline overflow-hidden"
                  
                >
                  Click to reveal
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
