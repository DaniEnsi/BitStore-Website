<script lang="ts">
import Vue from 'vue';
import { supabase } from '../../supabase/supabaseClient';

export default Vue.extend({
    data() {
        return {
            SignedIn: false,
            showpopup1: false,
            showpopup2: false,
            showpopup3: false,
            email: "",
            user_id: "",
            user_id2: "",
            newemail: "",
            loading: false,
            firstname: "",
            newfirstname: "",
            lastname: "",
            newlastname: "",
            birthyear: "",
            value_changed: false,
            email_changed: false,
            name_changed: false,
            savedmethods: [],
            currentYear: new Date().getFullYear() - 14,
        };
    },
    async mounted() {
        const { data, error } = await supabase.auth.getSession()
        if (data["session"] === null) {
            this.SignedIn = false
            this.$router.push('/shop/login')
        }
        else {
            this.SignedIn = true
            this.user_id = String(data["session"]["user"]["id"])
            this.user_id2 = String(data["session"]["user"]["id"])
            this.email = String(data["session"]["user"]["email"])
            this.firstname = String(data["session"]["user"]["user_metadata"]["first_name"])
            this.lastname = String(data["session"]["user"]["user_metadata"]["last_name"])
            this.newemail = this.email
            this.newfirstname = this.firstname
            this.newlastname = this.lastname
            this.$store.commit("shop/setEmail" , this.email)
            try {
                // make a new function to get the customer details or create a new function which runs before the payment intnet...
                const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/cards", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ userid: this.user_id2 })
                })
                const { cards, success } = await response.json()
                console.log(cards)
                this.savedmethods = cards
            } catch (error) {
                console.log(error)
            }
        }
    },
    methods: {
        async LogOut() {
            const { error } = await supabase.auth.signOut()
            console.log(error)
            this.SignedIn = false
            this.$store.commit("shop/setSignedIn" , false)
            this.$router.push('/shop')
        },
        datetostring(timestamp: number) {
            const date = new Date(timestamp * 1000)
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            const hour = date.getHours()
            const minute = date.getMinutes()
            const second = date.getSeconds()
            return day + "/" + month + "/" + year
        },
        async deletecard(id: String) {
            // delete the card with the id from savedmethods
            try {
                const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/deletecard", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: id })
                })
                const { success } = await response.json()
                if (success === true) {
                    this.savedmethods = this.savedmethods.filter((item: any) => item.id !== id)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async Update_User() {
            this.showpopup3 = true
            this.value_changed = false
            // get user id from supabase
            
            try {
                if (this.email_changed === true && this.name_changed === false) {
                    const { data, error } = await supabase.auth.updateUser({email: this.newemail})
                    const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/updatecustomer", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email: this.newemail, name: null, user_id: this.user_id2})
                    })
                    console.log(await response.json())
                    this.showpopup3 = false
                    if (response.status === 200) {
                        this.PopupLogin()
                    }
                    else {
                        this.PopupError()
                    }
                }
                else if (this.name_changed === true && this.email_changed === false) {
                    const { data, error } = await supabase.auth.updateUser({
                    data: {
                        first_name: this.newfirstname, 
                        last_name: this.newlastname 
                        },
                    })
                    const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/updatecustomer", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name: this.newfirstname + " " + this.newlastname, email: null, user_id: this.user_id2})
                    })
                    console.log(await response.json())
                    this.showpopup3 = false
                    if (response.status === 200) {
                        this.PopupLogin()
                    }
                    else {
                        this.PopupError()
                    }
                }
                else if (this.email_changed === true && this.name_changed === true) {
                    const { data, error } = await supabase.auth.updateUser({
                        email: this.newemail,
                        data: {
                            first_name: this.newfirstname, 
                            last_name: this.newlastname 
                            },
                        })
                    const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/updatecustomer", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email: this.newemail, name: this.newfirstname + " " + this.newlastname, user_id: this.user_id2})
                    })
                    await response.json()
                    this.showpopup3 = false
                    if (response.status === 200) {
                        this.PopupLogin()
                    }
                    else {
                        this.PopupError()
                    }
                }
            } catch (error) {
                console.log(error)
                this.showpopup1 = false
                this.showpopup2 = false
                this.showpopup3 = false
                this.PopupError()
            }
        },
        PopupLogin() {
            this.showpopup2 = false
            this.showpopup1 = false
            this.showpopup1 = true
            setTimeout(() => {
                this.showpopup1 = false
                this.$router.push('/shop')
            }, 2000)
        },
        PopupError() {
            this.showpopup1 = false
            this.showpopup2 = false
            this.showpopup2 = true
            setTimeout(() => {
                this.showpopup1 = false
                this.$router.push('/shop')
            }, 2000)
        },
        dataupdated() {
            // check if the email or name have been changed compared to old values
            if (this.email_changed === true) {
                this.value_changed = true
            }
            else if(this.name_changed === true) {
                this.value_changed = true
            }
            else {
                this.value_changed = false
            }
            
        }
    },
    watch: {
        newemail() {
            if (this.newemail !== this.email) {
                this.email_changed = true
            }
            else {
                this.email_changed = false
            }
            this.dataupdated()
        },
        newlastname() {
            if (this.newfirstname !== this.firstname || this.newlastname !== this.lastname) {
                this.name_changed = true
            }
            else {
                this.name_changed = false
            }
            this.dataupdated()
        },
        newfirstname() {
            if (this.newfirstname !== this.firstname || this.newlastname !== this.lastname) {
                this.name_changed = true
            }
            else {
                this.name_changed = false
            }
            this.dataupdated()
        }
    },
    head() {
        const title = 'SignUp';
        const description = 'SignUp to your Account';

        return {
            title,
            meta: this.$prepareMeta({
                title,
                description,
                keywords: 'signup',
                url: 'https://bitstore.dev/signup',
            }),
            link: [
                {
                    rel: 'canonical',
                    href: 'https://bitstore.dev/signup',
                },
            ],
        }
    }
})
</script>

<template>
    <div class="py-4">
        <div class="space-y-12 text-gray-500  dark:text-neutral-600">
            <div class="w-1/2 h-max float-left img <lg:hidden">
                <img src="https://i.vgy.me/Hflsbi.png" alt="Login" class="px-4 pt-20">
            </div>
            <div class="w-1/2 float-right <lg:float-none <lg:w-full">
            <header class="space-y-2 my-12 px-4 ">
                <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300 mb-4">Account Overview</h1>
                <p>
                    Welcome, {{firstname + " " + lastname}}! <br>You can see all your account information here.
                </p>
            </header>

            <div class="space-y-12 mt-2">
                <!-- Author Information -->
                <div class="px-4">
                    <Title :padding="false">Full Name</Title>

                    <div class="mt-1 grid gap-3 grid-cols-2 <md:grid-cols-1">
                        <div class="mt-1 md:pb-4 grid gap-3 md:grid-cols-2">
                            <input v-model="newfirstname" class="input col-span-2" type="text" :placeholder="firstname" />
                        </div>

                        <div class="mt-1 pb-4 grid gap-3 md:grid-cols-2">
                            <input v-model="newlastname" class="input col-span-2" type="text" :placeholder="lastname" />
                        </div>
                    </div>
                    <Title :padding="false">Email</Title>

                    <div class="mt-1 pb-4 grid gap-3 sm:grid-cols-2">
                        <input v-model="newemail" class="input col-span-2" type="email" :placeholder=email v-tippy="{content: 'Changing this will require email veriffication',}" icon="Menu" rounded elevated/>
                    </div>
                    <div class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
                        <Button v-if="value_changed || loading" variant="github" type="button" @click.native="Update_User">
                            <template #icon>
                                <IconSignIn class="h-6 text-black dark:text-white w-6 " />
                            </template>

                            {{ loading ? "Loading..." : "Update Information" }}
                        </Button>
                        <Button v-else variant="github" type="button" class="opacity-50 cursor-not-allowed">
                            <template #icon>
                                <IconSignIn class="h-6 text-black dark:text-white w-6" />
                            </template>

                            Update Information

                        </Button>
                        <Button variant="github" type="button" @click.native="LogOut">
                            <template #icon>
                                <IconSignOut class="h-6 text-black dark:text-white w-6" />
                            </template>

                            Sign out
                        </Button>
                    </div>
                </div>
                <div class="px-4" v-if="SignedIn">
            <Title :padding="false" class="pb-2">Saved Payment Methods</Title>
            <div>
              <BlogNotification type="cards">
                <div v-if="!SignedIn || savedmethods.length === 0 && !loading" >
                  You have no saved Payment Methods
                </div>
                <div class="space-y-4">
                <div v-if="SignedIn && !loading" v-for="(id, index)  in savedmethods" :key="`id-${index}`" @click="deletecard(String(id.id))" class="group rounded-md bg-neutral-700 border-neutral-800 hover:(border-neutral-400 bg-neutral-600) border-2 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                  <h4 class="sr-only">Mastercard</h4>
                  <div class="sm:flex sm:items-start">
                    <svg v-if="id.card.brand.includes('visa')" width="36" height="24" viewBox="9 9 30 30" xmlns="http://www.w3.org/2000/svg" class="rounded-md">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"/>
                        </g>
                        <g id="Layer_7" data-name="Layer 7">
                        <path d="M43,8H5a2.9,2.9,0,0,0-3,3V37a3,3,0,0,0,3,3H43a3,3,0,0,0,3-3V11A2.9,2.9,0,0,0,43,8ZM8,19.2l.3-.2h2.8a1.1,1.1,0,0,1,1.2.8h0l.5,2.4c0,.2,0,.3-.2.4h-.3a8.8,8.8,0,0,0-4.1-2.9A.5.5,0,0,1,8,19.2ZM14.7,29H12.2a.2.2,0,0,1-.2-.2L9.8,21.5c0-.1,0-.3.2-.3h.3a9.4,9.4,0,0,1,3,3.6h0l.3,1,2.6-6.6c0-.1.1-.2.3-.2h2.2c.1,0,.1.1.2.2s.1.2,0,.2l-4,9.4A.2.2,0,0,1,14.7,29Zm6.5-.3c0,.2-.1.3-.2.3H18.6v-.3l1.6-9.3a.3.3,0,0,1,.3-.3h2.3v.3Zm7.1-5.6c1.5.6,2.2,1.5,2.2,2.6a2.9,2.9,0,0,1-1.3,2.4,6.2,6.2,0,0,1-3.3.9,10,10,0,0,1-2.6-.5c-.2,0-.3-.2-.2-.3l.2-1.5a.2.2,0,0,1,.2-.2h.3a4.5,4.5,0,0,0,2.4.5c.7,0,1.5-.2,1.5-.9s-.3-.7-1.3-1.2-2.3-1.2-2.3-2.6S25.9,19,28.5,19a9.5,9.5,0,0,1,2.1.3.5.5,0,0,1,.2.4l-.3,1.4c0,.1,0,.2-.1.2h-.3a3.2,3.2,0,0,0-1.7-.4h-.1c-1,0-1.5.4-1.5.9S27.4,22.6,28.3,23.1Zm11.6,5.8c0,.1-.1.1-.2.1H37.8l-.3-.2a6.1,6.1,0,0,0-.3-1.3H33.8c-.1.1-.2.6-.5,1.3s-.1.2-.3.2H30.6a.2.2,0,0,1,0-.3l3.8-8.7a1.4,1.4,0,0,1,1.4-.9h1.9c.1,0,.2.1.2.3L40,28.6A.4.4,0,0,1,39.9,28.9ZM36,21.7l-1.4,3.8h2.2l-.6-2.9Z"/>
                        </g>
                    </g>
                    </svg>
                    <svg v-else-if="id.card.brand.includes('amex')" width="36" height="24" viewBox="9 9 30 30" xmlns="http://www.w3.org/2000/svg" class="rounded-md">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"/>
                        </g>
                        <g id="Layer_7" data-name="Layer 7">
                        <path d="M11.4,21.7l-1.1,2.8h2.2Zm0,0-1.1,2.8h2.2ZM43,8H5a2.9,2.9,0,0,0-3,3V37a3,3,0,0,0,3,3H43a3,3,0,0,0,3-3V11A2.9,2.9,0,0,0,43,8ZM25.9,28H24.1V22.2L21.6,28H20l-2.5-5.9V28H13.9l-.7-1.8H9.6L8.9,28H7l3.2-8h2.4l3.1,7.7V20h2.9l2.2,5.3L23,20h2.9ZM41,28H38.7l-2.1-2.7L34.4,28H27.5V20h7.1l2,2.5L38.7,20H41l-3.2,3.9ZM29.3,21.7v1.5h4v1.5h-4v1.6h4.2l2-2.4-1.8-2.2Zm-19,2.8h2.2l-1.1-2.8Z" fill="#030104"/>
                        </g>
                    </g>
                    </svg>
                    <svg v-else width="36" height="24" viewBox="9 9 30 30" xmlns="http://www.w3.org/2000/svg" class="rounded-md">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"/>
                        </g>
                        <g id="Layer_7" data-name="Layer 7">
                        <path d="M43,8H5a2.9,2.9,0,0,0-3,3V37a3,3,0,0,0,3,3H43a3,3,0,0,0,3-3V11A2.9,2.9,0,0,0,43,8ZM29,32.5a8.8,8.8,0,0,1-5-1.6,8.5,8.5,0,1,1,0-13.8,8.8,8.8,0,0,1,5-1.6,8.5,8.5,0,0,1,0,17Zm0-14a6,6,0,0,0-2.9.8,8.6,8.6,0,0,1,0,9.4,6,6,0,0,0,2.9.8,5.5,5.5,0,0,0,0-11Zm-10,0A5.5,5.5,0,1,0,24.5,24,5.5,5.5,0,0,0,19,18.5Z"/>
                        </g> 
                    </g>
                    </svg>
                    <div class="mt-3 sm:mt-0 sm:ml-4">
                    <div class="text-sm font-medium text-neutral-300">{{id.card.brand[0].toUpperCase() + id.card.brand.substr(1).toLowerCase()}} ending in {{ id.card.last4 }}</div>
                    <div class="mt-1 text-sm text-neutral-400 sm:flex sm:items-center">
                    <div>Expires {{ id.card.exp_month }}/{{ id.card.exp_year }}</div>
                      <span class="hidden sm:mx-2 sm:inline" aria-hidden="true">&middot;</span>
                    <div class="mt-1 sm:mt-0">Created on {{ datetostring(id.created) }}</div>
                    </div>
                  </div>
                  
                </div>
                <div class="group-hover:visible invisible h-full mt-3">
                  <IconDelete class="h-6 text-black dark:text-white w-6 "/>
                  <span class="sr-only">Delete</span>
                </div>
                </div>
                <div v-if="loading" class="rounded-md bg-neutral-700 border-neutral-800 hover:(border-neutral-400 bg-neutral-600) border-2 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                  <h4 class="sr-only">Processing Payment</h4>
                  <div class="sm:flex sm:items-start">
                    <IconSync class="h-6 text-black dark:text-white w-6 " />
                    <div class="mt-3 sm:mt-0 sm:ml-4">
                    <div class="mt-1 text-md font-medium text-neutral-300 text-center">Processing Payment...</div>
                    <div class="mt-1 text-sm text-neutral-400 sm:flex sm:items-center">
                    <div></div>
                    <div class="mt-1 sm:mt-0"></div>
                    </div>
                  </div>
                  </div>
              </div>
              </div>
              </BlogNotification>
            </div>

          </div>
                

            </div>
        </div>
        </div>
        <ShopPopup v-if="showpopup1" name="1" text="Update Successful" icon="Check"/>
        <ShopPopup v-if="showpopup3" name="3" text="Updating..." icon="Updating"/>
        <ShopPopup v-if="showpopup2" name="2" text="Update Failed" icon="X"/>
    </div>
</template>






<style lang="scss" scoped>
.control-button {
    @apply rounded py-2 px-4 transition-colors text-gray-900 select-none dark: text-gray-100;

    &:not(.no-background) {
        @apply bg-gray-100 dark: (bg-neutral-800 hover:bg-neutral-700) hover:bg-gray-200;
    }

    &:not(.cursor-not-allowed) {
        @apply cursor-pointer;
    }
}



.select {
    @apply appearance-none dark: bg-neutral-700 bg-gray-200/40 py-2 px-4 dark: text-gray-400 text-gray-400 focus:outline-none
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

.img {
    line-height: 200px;
}




</style>


