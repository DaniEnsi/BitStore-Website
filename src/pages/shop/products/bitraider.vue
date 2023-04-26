<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    data() {
        return {
        }
    },
    head() {
        const title = "BitRaider"
        const description =
            "BitStore is a website that contains a bunch of tools and projects created by me, Webstax. It's a place where you can find all of my projects in one place."

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
                keywords: "shop, products",
                url: "https://bitstore.dev/shop/shop/products/bitraider",
            }),
            link: [
                {
                    rel: "canonical",
                    href: "https://bitstore.dev/shop/shop/products/bitraider",
                },
            ],
        }
    },
})
</script>

<template>
    <div class="py-4">
        <div class="space-y-12 text-gray-500  dark:text-neutral-600">
            <header class="space-y-2 my-12 px-4 ">
                <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300">BitBoost Premium</h1>

                <p class="sm:w-9/10">
                    Here you can find all of my products, from Discord bots to Discord Nitro generators. You can also
                    find my
                    Discord server, where you can get support for my products.
                </p>
            </header>
            <template>


            </template>
        </div>
    </div>
</template>