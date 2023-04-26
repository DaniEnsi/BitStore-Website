<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { SponsorLinks } from "~/@types/runtimeConfig"
import type { ISponsor } from "@/types/Response/Sponsors"

export default Vue.extend({
  data() {
    return {
      sponsors: [] as ISponsor[],
      accounts: [
        {
          image: "https://i.vgy.me/IMKxN0.png",
          name: "PayPal",
          iban: "@webstax",
          link: "https://paypal.me/webstax",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/Qez9an.png",
          name: "Bitcoin",
          iban: "bc1qupstg2fur0am69h308 f0eg6hz6203st9gj4uz4",
          link: "#",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/qbi9rX.png",
          name: "Ethereum",
          iban: "0xAf814E2F4263234BA8e F0B97028fB148d2c33626",
          link: "#",
          revealed: false,
        },
        {
          image: "https://i.vgy.me/MX72SK.png",
          name: "Sparkasse",
          iban: "TR72 0004 6000 2088 8000 5070 94",
          link: "#",
          revealed: false,
        },
      ],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const { data } = await this.$axios.get(
      "https://raw.githubusercontent.com/DaniEnsi/.github/main/sponsors.json"
    )

    this.sponsors = data
  },
  head() {
    const title = "Donate"
    const description =
      "Like my projects? You can donate to me to boost my performance and help me create more, better projects in the future!"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "donate",
        url: "https://bitstore.dev/donate",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/donate",
        },
      ],
    }
  },
  computed: {
    /**
     * Returns the Sponsor object in runtime config.
     * @returns {SponsorLinks}
     */
    getSponsorLinks(): SponsorLinks {
      return this.$config.sponsor as SponsorLinks
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
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 sm:w-9/10">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">Donate</h1>

        <p>
          If you like my projects and/or what I do and you want to contribute,
          make me happy, you can donate to me with the information on this page!
          Thank you ♥
        </p>

        <p class="text-xs">
          P.S. Use "<span class="border-b border-black/10 dark:border-white/10"
            >DaniDuese</span
          >" as the name of your transactions.
        </p>
      </header>

      <section class="space-y-4">
        <Title>Support Me On</Title>

        <div class="flex flex-wrap gap-x-4 gap-y-2 mx-4">
          <Button
            v-tippy="{
              content: 'Preferred',
              placement: 'bottom',
            }"
            variant="github"
            class="w-full lg:w-max"
            :href="getSponsorLinks.github"
            blank
          >
            <template #icon>
              <IconBrand
                brand="github"
                class="h-7 text-black dark:text-white w-7"
              />
            </template>

            GitHub Sponsors
          </Button>

          <Button
            variant="patreon"
            class="w-full lg:w-max"
            :href="getSponsorLinks.patreon"
            blank
          >
            <template #icon>
              <SmartImage
                src="https://i.vgy.me/w3N0Ef.png"
                class="rounded h-7 w-7"
              />
            </template>

            Become a Patron
          </Button>
        </div>
      </section>



      <section class="space-y-4">
        <Title>Bank Accounts</Title>

        <div class="grid px-4 gap-4 md:grid-cols-2">
          <div
            v-for="(account, index) in accounts"
            :key="`account-${index}`"
            class="flex h-full items-center"
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

                <SmartLink
                  v-if="account.revealed == true"
                  class="text-gray-800 dark:text-neutral-500 overflow-hidden" :href="account.link "
                >
                  {{ account.iban }}
              </SmartLink>

                <span
                  v-else
                  class="cursor-pointer text-gray-800 dark:text-neutral-500 hover:underline"
                  @click="account.revealed = true"
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
