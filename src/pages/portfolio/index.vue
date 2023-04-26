<script lang="ts">
import Vue from "vue"

/* Interfaces */

export default Vue.extend({
  data() {
    return {
      websites: [
        {
          image: "https://i.vgy.me/TzH2Om.jpg",
          title: "Portfolio 1",
          description: "A clean and simple Portfolio website made using vue and typescript.",
          href: "/portfolio/portfolio1",
        },
        {
          image: "https://i.vgy.me/qHsReQ.jpg",
          title: "Portfolio 2",
          description: "A simple Portfolio website made using react and tailwind css.",
          href: "/portfolio/portfolio2",
        },
        {
          image: "https://i.vgy.me/dnFtqo.jpg",
          title: "Portfolio 3",
          description: "A minimalistic 2-Page Portfolio website with PHP contact form.",
          href: "/portfolio/portfolio3",
        },
        {
          image: "https://i.vgy.me/rdyS0p.jpg",
          title: "Portfolio 4",
          description: "A colourful HTML5 only 1-Page Portfolio website for programmers.",
          href: "/portfolio/portfolio4",
        },
      ],
      software: [
        {
          image: "https://i.vgy.me/YPF2ii.jpg",
          title: "BitMine V3",
          description: "User Interface for Crypto Mining Software",
          href: "/portfolio/bitmine-v3",
        },
        {
          image: "https://i.vgy.me/KPyyVs.jpg",
          title: "BitMine V2",
          description: "Python script using terminal for Crypto Mining Software",
          href: "/portfolio/bitmine-v2",
        },
        {
          image: "https://i.vgy.me/CK0h2R.jpg",
          title: "BitCord",
          description: "Python script using terminal for Discord Nitro Generator",
          href: "/portfolio/bitcord",
        },
      ],
      graphics: [
        {
          image: "https://i.vgy.me/VVFACq.jpg",
          title: "Bitcoin Mining",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/aOnqme.jpg",
          title: "Co2 Emissions",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/IUsCFe.jpg",
          title: "Electric Vehicle",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/XXKdkf.jpg",
          title: "Bitcoin Price Chart",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/8MKoyH.jpg",
          title: "Bitcoin Payments",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/vNWTl8.jpg",
          title: "ATM Machine",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/BqWbsX.jpg",
          title: "Crypto Bank",
          href: "/portfolio/graphics",
        },
        {
          image: "https://i.vgy.me/lvjWZm.jpg",
          title: "Credit Cards",
          href: "/portfolio/graphics",
        },
      ],
    }
  },
  head() {
    const title = "Portfolio"
    const description =
      "This is my portfolio where you can see all my projects."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "portfolio",
        url: "https://bitstore.dev/portfolio",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/portfolio",
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
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">Portfolio</h1>

        <p>
          Here you can find all my projects. I'm working on them in my free time
          and I'm trying to make them as good as possible. If you like my
          projects, you can support me by donating or by starring the projects on
          GitHub.
        </p>
      </header>

      <section class="space-y-4">
        <Title>Visit Shop</Title>

        <div class="flex flex-wrap gap-x-4 gap-y-2 mx-4">
          <Button v-tippy="{
                    content: 'Buy Templates',
                    placement: 'bottom',
                  }" variant="github" class="w-full lg:w-max" href="https://webstax.io" blank>
            <template #icon>
              <IconDev brand="webstax" class="h-7 text-black dark:text-white w-7" />
            </template>

            WebStax
          </Button>

          <Button v-tippy="{
                    content: 'Contact Me',
                    placement: 'bottom',
                  }" variant="patreon" class="w-full lg:w-max" href="https://discord.gg/uHQFuekVun" blank>
            <template #icon>
              <SmartImage src="https://i.vgy.me/Skmi23.png" class="rounded h-7 w-7" />
            </template>

            Get Custom Template
          </Button>
        </div>
      </section>

      <template>
        <div class="pt-0">
            <Title> Website Templates </Title>

            <div class="mt-2 grid px-4 gap-4 md:grid-cols-2">

              <template>
                <CardPortfolio v-for="(account, index) in websites" :key="`new-${index}`" :portfolio="account" />
              </template>
            </div>
          </div>
      </template>

      <template>
        <div class="pt-0">
          <Title> Software </Title>

          <div class="mt-2 grid px-4 gap-4">

            <template>
              <CardPortfolio v-for="(account, index) in software" :key="`new-${index}`" :portfolio="account" />
            </template>
          </div>
        </div>
      </template>

      <template>
        <div class="pt-0">
          <Title> Graphic Design </Title>

          <div class="mt-2 grid px-4 gap-4 md:grid-cols-4">

            <template>
              <CardPortfolio v-for="(account, index) in graphics" :key="`new-${index}`" :portfolio="account" />
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
