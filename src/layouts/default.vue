<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    head() {
        let string = "bitstore.dev";
        if (this.routeIsBlog)
            string = "bitstore.dev - blog";
        else if (this.routeIsShop)
            string = "bitstore.dev - shop";
        return {
            titleTemplate: `%s - ${string}`,
            htmlAttrs: {
                class: `min-h-screen ${this.$colorMode.value}`,
            },
            meta: [
                {
                    hid: "og:site_name",
                    name: "og:site_name",
                    content: string,
                },
            ],
        };
    },
    computed: {
        /**
         * Checks if current route is a blog route.
         * @returns {boolean | undefined}
         */
        routeIsBlog(): boolean | undefined {
            return this.$route.name?.includes("blog");
        },
        routeIsShop(): boolean | undefined {
            return this.$route.name?.includes("shop");
        },
    }
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <!-- Colored top bar -->
    <div class="bg-neutral-500 w-full py-1 dark:bg-neutral-700" />

    <!-- Navbar -->
    <transition name="fade" mode="out-in">
      <NavbarBlog v-if="routeIsBlog" class="pt-4" />
      <NavbarShop v-if="routeIsShop" class="pt-4" />
      <NavbarDefault v-else class="pt-4" />
    </transition>

    <!-- Nuxt component -->
    <Nuxt
      class="container mx-auto min-h-screen pb-8 w-11/12 sm:(pb-10 w-9/12) md:w-7/12"
    />

    <!-- Footer -->
    <Footer />

    <!-- Colored bottom bar -->
    <div class="bg-neutral-500 w-full py-1 dark:bg-neutral-700" />

    <!-- Command Palette -->
    <CommandPalette />

    <!-- Go to top button -->
    <GoTop />

    <!-- Sponsor Popup -->
    <SponsorPopup />
  </div>
</template>
