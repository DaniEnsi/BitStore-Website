<script lang="ts">
import Vue from "vue"
import NewName from "../../components/NewName.vue"

// set $fetchState to true untill all the pictures are loaded in the page
export default Vue.extend({
  head() {
    const title = "BitStore"
    const description =
      "BitStore is a website that contains a bunch of tools and projects created by me. It's a place where you can find all of my projects in one place."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "BitStore, discord, tools",
        url: "https://bitstore.dev/shop",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/shop",
        },
      ],
    }
  },
  data() {
    return {
      $fetchState: {
        pending: true,
      },
        shop: [
          {
            image: "https://i.vgy.me/vtpWBl.png",
            title: "BitGen Premium",
            description: "Discord Nitro Generator",
            href: "/shop/products/bitgen",
          },
          {
            image: "https://i.vgy.me/Qqlhuv.png",
            title: "BitBoost Premium",
            description: "Server Boosting Script",
            href: "/shop/products/bitboost",
          },
          {
            image: "https://i.vgy.me/LqnvOD.png",
            title: "BitRedeem Premium",
            description: "Nitro Token Generator",
            href: "/shop/products/bitredeem",
          },
        ],
    }
  },
  mounted() {
    const url = this.$route.query.oauth
    if (url === "true") {
      
    }
  },
  // wait for this image https://i.vgy.me/xtTWgH.png to load before setting $fetchState to false
  async fetch()  {
    const image = new Image()
    image.src = "https://i.vgy.me/xtTWgH.png"
    await new Promise((resolve, reject) => {
      // figure out if image is cached or not, if it is cached then set $fetchState to false and if it isn't cached then set $fetchState to false after 2 seconds
      if (image.complete) {
        this.$fetchState.pending = false
        resolve
      } else {
        image.onload = () => {
          this.$fetchState.pending = false
          setTimeout(() => {
            resolve
          }, 1000)
        }
        }
        image.onerror = reject
      }
    )
  },
})

</script>

<template>
  <div class="py-4">
    <div class="space-y-12 text-gray-500  dark:text-neutral-600">
      <header class="space-y-2 my-12 px-4 ">
        <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300">BitStore™ Shop</h1>

        <p class="sm:w-9/10">
          This is the BitStore™ where you can buy my projects and tools. All of my projects are made using the latest technologies and are very easy to use. If you are looking for the free version of my projects, you can find them on my <SmartLink class="text-center sm:truncate hover:underline text-neutral-500" href="/portfolio">Portfolio</SmartLink>.
        </p>
        <SkeletonLoader v-if="$fetchState.pending" class="rounded-lg test bg-gray-300 animate-pulse dark:bg-neutral-700/40" />
        <SmartImage v-else
          src="https://i.vgy.me/xtTWgH.png"
          alt="BitStore" class="main"
        />
      </header>
      
      <template>
        <div class="pt-0">
          <Title>Featured Products</Title>

          <div class="mt-2 pt-4 grid px-4 gap-4 lg:grid-cols-3">

            <template>
              <CardPortfolio type="shop" v-for="(account, index) in shop" :key="`new-${index}`" :portfolio="account" />
            </template>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2 mx-4 pt-10 items-center justify-center">
            <Button variant="github" class="w-full lg:w-max" href="/shop/shop" >
              <template #icon>
                <IconSearch class="h-6 text-black dark:text-white w-7 " />
              </template>

              Show all Products
            </Button>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.test {
  height: 100%;
  aspect-ratio: 16/9;
}

</style>