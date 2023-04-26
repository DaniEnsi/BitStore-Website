<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    head() {
        const title = "Terms of Service"
        const description =
            "Terms of Service for BitStore Shop"

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
            }),
        }
    },
})
</script>

<template>
    <div class="py-4 px-4 ">
        <div class="space-y-6 text-gray-500  dark:text-neutral-500">
            <header class="space-y-2 my-12">
                <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300 mb-4">Terms of Service</h1>
                <a>
                    By using BitStore Shop, you agree to the following terms of service.
                </a>
            </header>
            <p>Payments</p>
            <ol>Our payment system fully relies on Stripe to process payments. Stripe is a third-party payment processor, and BitStore Shop does not store any of your payment information. Stripe's privacy policy can be found <a class="text-neutral-400" href="https://stripe.com/privacy">here</a>.</ol>
            <p>1. Terms</p>
            <ol>By accessing the website at <a class="text-neutral-400" href="https://bitstore.dev">https://bitstore.dev</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</ol>
            <p>2. Use License</p>
            <div>
                <ol>Permission is granted to temporarily download one copy of the materials (information or software) on BitStore Shop's website for personal and non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</ol>
                <div class=" space-y-4 text-sm py-4">
                <p>Modify or copy the materials</p>
                <p>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</p>
                <p>Attempt to decompile or reverse engineer any software contained on BitStore Shop's website</p>
                <p>Remove any copyright or other proprietary notations from the materials</p>
                <p>Transfer the materials to another person or "mirror" the materials on any other server</p>
                </div>
            <ol>This license shall automatically terminate if you violate any of these restrictions and may be terminated by BitStore
                Shop at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must
                destroy any downloaded materials in your possession whether in electronic or printed format.</ol>
            </div>
            <p>3. Disclaimer</p>
            <div class=" space-y-4">
                <ol>The materials on BitStore Shop's website are provided on an 'as is' basis. BitStore Shop makes no warranties,
                    expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
                    property or other violation of rights.</ol>
                <ol>Further, BitStore Shop does not warrant or make any representations concerning the accuracy, likely results, or
                    reliability of the use of the materials on its website or otherwise relating to such materials or on any sites
                    linked to this site.</ol>
            </div>
            <p>4. Limitations</p>
            <ol>In no event shall BitStore Shop or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BitStore Shop's website, even if BitStore Shop or a BitStore Shop authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</ol>
            <p>5. Accuracy of materials</p>
            <ol>The materials appearing on BitStore Shop's website could include technical, typographical, or photographic errors. BitStore Shop does not warrant that any of the materials on its website are accurate, complete or current. BitStore Shop may make changes to the materials contained on its website at any time without notice. However BitStore Shop does not make any commitment to update the materials.</ol>
            <p>6. Links</p>
            <ol>BitStore Shop has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BitStore Shop of the site. Use of any such linked website is at the user's own risk.</ol>
            <p>7. Modifications</p>
            <ol>BitStore Shop may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</ol>
            <p>8. Governing Law</p>
            <ol>These terms and conditions are governed by and construed in accordance with the laws of United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</ol>
            <ol class="text-xs">Copyright by BitStore</ol>
        </div>
    </div>
</template>

<style lang="scss" scoped>
p,


.control-button {
  @apply rounded py-2 px-4 transition-colors text-gray-900 select-none dark: text-gray-100;

  &:not(.no-background) {
    @apply bg-gray-200 dark: (bg-neutral-800 hover:bg-neutral-700) hover:bg-gray-200;
  }

  &:not(.cursor-not-allowed) {
    @apply cursor-pointer;
  }
}



.select {
  @apply appearance-none dark:bg-neutral-700 bg-gray-200/40 py-2 px-4 dark: text-gray-400 text-gray-400 focus:outline-none
}

.input {
  @apply py-2 px-4 dark: text-gray-200 focus:outline-none;

  &:not(.no-bg) {
    @apply bg-gray-200/40 dark: bg-neutral-700;
  }

  &:not(.rounded-none) {
    @apply rounded-md;
  }

  &:not(.ring-0) {
    @apply ring-offset-gray-100 ring-gray-200 ring-offset-2 dark: (ring-neutral-800 ring-offset-neutral-900) focus:ring-1;
  }
}



pre[class*="language-"] {
  @apply bg-neutral-900;
}

.ring {
  @apply ring-1 ring-offset-2 ring-offset-gray-100 ring-gray-200 dark: (ring-neutral-800 ring-offset-neutral-900);
}
</style>