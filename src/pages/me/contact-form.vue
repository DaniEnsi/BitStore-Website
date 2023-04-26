<script lang="ts">
import Vue from "vue"
import { MessageClient } from "cloudmailin"

// set $fetchState to true untill all the pictures are loaded in the page
export default Vue.extend({
    data() {
        return {
            isDisabled: true,
            // id of the email input
            email: "",
            name: "",
            message: "",
            isemail: true,
            isname: true,
            ismessage: true,

            showpopup: false,
            text: "",
            icon: "",
        }   
    },
  head() {
    const title = "Contact Form"
    const description =
      "Contact me, I will reply as soon as possible."

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        keywords: "Contact, Form, Email, DaniEnsi, Dani Ensi",
        url: "https://bitstore.dev/me/contact-form",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/me/contact-form",
        },
      ],
    }
  },
    methods: {
        Popup() {
            if (this.isDisabled === false) {
                this.text = "Email sent!"
                this.icon = "Check"
                this.sendEmail()
                this.showpopup = false
                this.showpopup = true
                setTimeout(() => {
                    this.showpopup = false
                    this.$router.push('/')
                }, 3000)
            } else {
                this.text = "Please fill all the fields!"
                this.icon = "X"
                this.showpopup = false
                this.showpopup = true
                setTimeout(() => {
                    this.showpopup = false
                }, 3000)
            }
        },
        async sendEmail() {
            const client = new MessageClient({ username: "710506dea731b2f9", apiKey: "i9b1YzNd7HHSvZuT5YtTZSjE" });
            const response = await client.sendMessage({
                to: "daniensi@bitstore.dev",
                from: 'info@bitstore.dev',
                html: `<p>From: ${this.name}</p><p>Email: ${this.email}</p><p>Message: ${this.message}</p>`,
                subject: "New Contact Form submited",
            });
        }
    },
    watch: {
        email: function () {
            // check if the email is valid
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.isemail = false;
            } else {
                this.isemail = true;
            }
            // check if all the inputs are valid
            if (this.isname === false && this.isemail === false && this.ismessage === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
        name: function () {
            // check if the name is valid
            if (this.name.length > 2) {
                this.isname = false;
            } else {
                this.isname = true;
            }
            // check if all the inputs are valid
            if (this.isname === false && this.isemail === false && this.ismessage === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
            
        },
        message: function () {
            // check if the message is valid
            if (this.message.length > 2) {
                this.ismessage = false;
            } else {
                this.ismessage = true;
            }
            // check if all the inputs are valid
            if (this.isname === false && this.isemail === false && this.ismessage === false) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
    }
})
</script>

<template>
    <div>
    <div class="text-gray-500 dark:text-neutral-600">
        <header class="space-y-2 my-12 px-4">
            <h1 class="text-gray-900 text-4xl dark:text-neutral-300">Contact Me</h1>
            <p>Feel free to contact me if you have any questions or if you want to work with me, or just have some questions about the website...</p>
        </header>
        <form name="Request" method="post" netlify>
            <div class="flex flex-col space-y-2 my-12 px-4">
                <div class="flex flex-col space-y-2">
                    <label for="name" class="text-gray-900 dark:text-neutral-300">Name</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="John Doe" class="input" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="email" class="text-gray-900 dark:text-neutral-300">Email</label>
                    <input type="email" id="email" v-model="email" name="email" placeholder="johndoe@gmail.com" class="input" />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="message" class="text-gray-900 dark:text-neutral-300">Message</label>
                    <textarea id="message" name="message" v-model="message" placeholder="I really love the userfiendliness of this website..." class="input h-xs"></textarea>
                </div>

                <div class="">
                    <Title :padding="false" class="pb-2 pt-5">Submit Form </Title>
                    <div class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
                        <Button variant="github" type="button" href="/me/contact" >
                            <template #icon>
                                <IconX class="h-6 text-black dark:text-white w-6 " />
                            </template>
                
                            Cancel
                        </Button>
                        <Button v-if="isDisabled === true" variant="github" class="button" @click.native="Popup">
                            <template #icon>
                                <IconInbox class="h-6 text-black dark:text-white w-6 " />
                            </template>
                
                            Submit Form
                        </Button>
                        <Button variant="github" type="submit" v-else="" @click.native="Popup">
                            <template #icon>
                                <IconInbox class="h-6 text-black dark:text-white w-6 " />
                            </template>
                        
                            Submit Form
                        </Button>
                    </div>
                </div>

            </div>
        </form>
    </div>
    <ShopPopup v-if="showpopup" name="2" :text="this.text" :icon="this.icon"/>
    </div>
</template>

<style lang="scss" scoped>
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

.div {
    //center the div in the page
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


}

.button {
    cursor: not-allowed;
    opacity: 0.5;

}
.overlay {
    opacity: 0.8;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 10;
}

.background-when-supports {
    @apply backdrop-blur-md backdrop-filter dark: bg-neutral-900;
}

@supports (backdrop-filter: blur()) {
    .background-when-supports {
        @apply backdrop-blur-sm backdrop-filter dark: bg-neutral-800/10;
    }
}
</style>