<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
    }
  },
  head() {
    const title = "BitBoost"
    const description =
      "BitStore is a website that contains a bunch of tools and projects created by me, Webstax. It's a place where you can find all of my projects in one place."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "shop, products",
        url: "https://bitstore.dev/shop/shop/products/bitboost",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/shop/shop/products/bitboost",
        },
      ],
    }
  },
  methods: {
    setItem() {
      // use $store to stor the string value for the item selected
      this.$store.commit("shop/setItem", "BitBoost Premium")
      this.$router.push({ path: "/shop/checkout" }); // redirect to checkout page
    },
    setPrice() {
      // use vuex storage to stor the string value for the price selected
      this.$store.commit("shop/setPrice", "19.99")
    },
  },
})
</script>

<template>
  <div class="py-4">
    <div class="space-y-10 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 ">
        <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300">BitBoost Premium</h1>

        <p class="sm:w-9/10">
          Here you can find all of my products, from Discord bots to Discord Nitro generators. You can also find my
          Discord server, where you can get support for my products.
        </p>
      </header>
      <section>
        <Title class="pb-2">Quick Links</Title>

        <div class="space-y-4 pl-4 items-center sm:(flex space-x-2 space-y-0)">
          <Button variant="github" type="button" blank href="https://github.com/BitStore-Community/BitBoost">
            <template #icon>
              <IconBrand brand="github" class="h-6 text-black dark:text-white w-6 " />
            </template>

            Visit Github
          </Button>

          <Button variant="github" type="button" @click.native="setItem(), setPrice()">
            <template #icon>
              <IconCash class="h-6 text-black dark:text-white w-6 " />
            </template>

            Buy Now for 9,99$
          </Button>
        </div>
      </section>
      <section class="space-y-4">
        <Title>Images</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <SmartImage src="https://i.vgy.me/Qqlhuv.png" alt="Website" class="rounded-xl" />
        </div>
      </section>

      <section class="space-y-4">
        <Title>Features</Title>

        <div class="grid px-4 gap-4 md:grid-cols-1">
          <p>
            <span class="font-bold">BitBoost</span> is a Discord bot that allows you to boost your Discord server with
            ease. It has a lot of features, such as: <br />
            <br />
            






            
          </p>
        </div>
      </section>
    </div>
  </div>
</template>