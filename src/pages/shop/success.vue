<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return({
      item: "",
    })
  },
  head() {
    const title = 'Checkout';
    const description = 'Buy Premium Tools on bitsore.dev/shop';

    return {
        title,
        meta: this.$prepareMeta({
            title,
            description,
            keywords: 'shop, products',
            url: 'https://bitstore.dev/shop/shop/checkout',
        }),
        link: [
            {
                rel: 'canonical',
                href: 'https://bitstore.dev/shop/shop/checkout',
            },
        ],
    }},
    mounted() {
      this.item = this.$store.state.shop.item2
      setTimeout(() => {
        this.$router.push({ path: "/shop" }); // redirect to checkout page
      }, 5000);
    },
})

</script>

<template>
    <div class="py-4">
        <div class="space-y-10 text-gray-500  dark:text-neutral-600">
            <header class="space-y-2 my-40 <sm:my-30 text-center">
                <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300">Thank you for your purchase!</h1>
                <p class="">
                    You have purchased {{item}}. You will soon recive an email giving information on how to activate your product.
                </p>
            </header>
        </div>
    </div>
</template>