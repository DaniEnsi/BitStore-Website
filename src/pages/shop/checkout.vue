<script lang="ts">
import { thisExpression } from '@babel/types';
import Vue, { ref } from 'vue';
import Loader from '../../components/Loader.vue';
import { TIMEOUT } from 'dns';

const style = {
  style: {
    base: {
      iconColor: "#777777",
      color: "#999999",
      fontWeight: "500",
      fontSize: "16px",
    },
    invalid: {
      iconColor: "#FF00000",
      color: "red"
    },
    complete: {
      iconColor: "#005500",
    }
  }
}

export default Vue.extend({
  data() {
    return {
      id: "",
      secret: "",
      pricenum : 0,
      text: "Loading",
      loading: true,
      price: "error",
      price2: "",
      item: "Error",
      creditCardNumber: "",
      expireMonth: "",
      expireYear: "",
      firstname: "",
      lastname: "",
      email: "",
      cvv: "",
      icon: "ShoppingCart",
      saveinfo: true,
      paymentMethod: "",
      success: false,
      signed_in: false,
      signed_in2: false,
      customer_id: "",
      currentYear: new Date().getFullYear(),
      error: "",
      showpopup2: false,
      initialised: false,
      savedmethods: [],
    };
  },
  beforeCreate() {
    if (String(this.$store.state.shop.price2) == "error" || String(this.$store.state.shop.item2) == "error") {
      this.$router.push("/shop/shop")
    }
  },
  async mounted() {
    this.loading = false
    // get price and item in from session storage
    this.price = String(this.$store.state.shop.price2)
    // remove the dot between the dollar and cents
    this.price2 = this.price.replace(".", "")
    this.pricenum = Number(this.price2)
    this.signed_in2 = Boolean(this.$store.state.shop.signedin)
    this.item = String(this.$store.state.shop.item2)
    if (this.price == "error" || this.item == "error") {
      this.$router.push("/shop/shop")
    } else {
      try {
        // make a new function to get the customer details or create a new function which runs before the payment intnet...
        const response = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ amount: this.pricenum, description: this.item, userid: this.$store.state.shop.userid })
          })
          const { secret, id, firstname, lastname, email, cards } = await response.json()
          console.log(cards)
          this.savedmethods = cards
          this.id = id
          this.secret = secret
          this.firstname = firstname
          this.lastname = lastname
          this.email = email
          setTimeout(() => {
            this.initialised = true
          }, 1000)
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    creditCardNumber() {
      // Card number without dash (-)
      let realNumber = this.creditCardNumber?.replace(/-/gi, '')

      // Generate dashed number
      if (realNumber.length != 0) {
        var dashedNumber = realNumber.replace(/(.{1,4})/g, "$1-").slice(0, -1)
        this.creditCardNumber = dashedNumber
      }
    },
  },
  methods: {
    PopUp() {
      this.showpopup2 = false
      this.showpopup2 = true
      setTimeout(() => {
        this.showpopup2 = false
        this.icon = "X"
        this.text = "Undefined"
      }, 10000)
    },
    async paywithsavedcard(id: string) {
      // check that email and name are filled in
      if(this.firstname.length > 3 && this.lastname.length > 5 && this.email.length > 8) {
        if(!this.loading) {
          this.loading = true
          this.text = "Processing Payment"
          this.icon = "Updating"
          this.PopUp()
          try {
            const response2 = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/savedcheckout", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ paymentMethod: id, price: this.price, item: this.item, userid: this.$store.state.shop.userid,id: String(this.id) , name: String(this.firstname + " " + this.lastname), email: this.email})
            });
            const { success, errormsg } = await response2.json()
            this.success = success
            this.error = errormsg
          } catch (error) {
            if(this.success == false){
              //check if the error contains the word "card"
              console.log("Could not connect to Server")
              this.icon = "X"
              this.text = "Could not connect to Server"
              this.PopUp()
            }
          }
          if (this.success == true) {
            // redirect to success page
            this.icon = "Check"
            this.text = "Payment Successful"
            this.PopUp()
            setTimeout(() => {
              this.$router.push("/shop/success")
            }, 1000)
          }
          else if (this.success == false) {
            // show error + clear fields
            if(this.error.includes("card" && "number")){
                this.icon = "X"
                this.text = "Invalid Card Details"
                this.clear("card")
                this.PopUp()
            } else if (this.error.includes("expiration month")){
              this.icon = "X"
              this.text = "Invalid Expiry Date"
              this.clear("card")
              this.PopUp()
            } else if (this.error.includes("expiration year")){
              this.icon = "X"
              this.text = "Invalid Expiry Date"
              this.clear("card")
              this.PopUp()
            } else if (this.error.includes("cvc")){
              this.icon = "X"
              this.text = "Invalid CVC"
              this.clear("card")
              this.PopUp()
            } else if (this.error.includes("name")){
              this.icon = "X"
              this.text = "Invalid Name"
              this.clear("details")
              this.PopUp()
            } else if (this.error.includes("email")){
              this.icon = "X"
              this.text = "Invalid Email"
              this.clear("details")
              this.PopUp()
            } else{
              this.clear("card")
              this.icon = "X"
              this.text = String(this.error)
              this.PopUp()
            }
          }
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      }
    },
    clear(value: string) {
      if (value == "card") {
        this.creditCardNumber = ""
        this.cvv = ""
        this.expireMonth = ""
        this.expireYear = ""
      } else if (value == "details") {
        this.firstname = ""
        this.lastname = ""
        this.email = ""
      }
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
    async pay() {
      this.loading = true
      this.text = "Processing Payment"
      this.icon = "Updating"
      this.PopUp()
      try {
        // remove dashes from credit card number
        const fixedcreditcard = this.creditCardNumber.replace(/-/g, "")
        const user_id = this.$store.state.shop.userid

        const response2 = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ number: String(fixedcreditcard), exp_month: Number(this.expireMonth), exp_year: Number(this.expireYear), cvc: String(this.cvv), userid: String(user_id), id: String(this.id), name: String(this.firstname + " " + this.lastname), email: this.email, item: this.item, price: this.price})
        });
        const { paymentMethod, customerId, signedIn, success, errormsg } = await response2.json()
        this.paymentMethod = paymentMethod
        this.customer_id = customerId
        this.signed_in = signedIn
        this.success = success
        this.error = errormsg
      } catch (error) {
        if(this.success == false){
          //check if the error contains the word "card"
          console.log("Could not connect to Server")
          this.icon = "X"
          this.text = "Could not connect to Server"
          this.PopUp()
        }
      }

      if (this.saveinfo == true && this.signed_in == true) {
        // save info to database
        try {
          console.log("Saving Payment Info")
          const response3 = await fetch("https://8gos83igt4.execute-api.eu-central-1.amazonaws.com/stripe/savepayment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ customerId: String(this.customer_id) , paymentMethod: String(this.paymentMethod)})
          })
          const { success, errormsg } = await response3.json()
          this.success = success
          this.error = String(errormsg)
        }
        catch (error) {
          if(this.success == false){
            console.log("Could not connect to Server")
            this.icon = "X"
            this.text = "Could not connect to Server"
            this.PopUp()
          }
        }
      }
      if (this.success == true) {
        // redirect to success page
        this.icon = "Check"
        this.text = "Payment Successful"
        this.PopUp()
        setTimeout(() => {
          this.$router.push("/shop/success")
        }, 1000)
      }
      else if (this.success == false) {
        // show error + clear fields
        if(this.error.includes("card" && "number")){
            this.icon = "X"
            this.text = "Invalid Card Details"
            this.clear("card")
            this.PopUp()
        } else if (this.error.includes("expiration month")){
          this.icon = "X"
          this.text = "Invalid Expiry Date"
          this.clear("card")
          this.PopUp()
        } else if (this.error.includes("expiration year")){
          this.icon = "X"
          this.text = "Invalid Expiry Date"
          this.clear("card")
          this.PopUp()
        } else if (this.error.includes("cvc")){
          this.icon = "X"
          this.text = "Invalid CVC"
          this.clear("card")
          this.PopUp()
        } else if (this.error.includes("name")){
          this.icon = "X"
          this.text = "Invalid Name"
          this.clear("details")
          this.PopUp()
        } else if (this.error.includes("email")){
          this.icon = "X"
          this.text = "Invalid Email"
          this.clear("details")
          this.PopUp()
        } else{
          this.clear("card")
          this.icon = "X"
          this.text = String(this.error)
          this.PopUp()
        }
      }
      this.loading = false
    },

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
})
</script>

<template>
  <div>
    <div v-if="this.initialised === false" class="w-full h-full text-center lg:pt-96 pt-64">
      <Loader/>
    </div>
    <Transition name="fade" mode="out-in" duration="500">
    <div class="py-4" v-if="this.initialised === true">
      <div class="space-y-12 text-gray-500  dark:text-neutral-600">
        <header class="space-y-2 my-12 px-4 ">
          <h1 class="text-gray-700 text-4xl font-extrabold dark:text-neutral-300 mb-4">Checkout: {{item}}</h1>
            <p >
              On checkout you agree to our <a href="/shop/terms" class="text-blue-500">Terms of Service</a> and Privacy Policy. You will be charged {{price}}$. You will recive a recipt via email. 
            </p>
        </header>
        
        <div class="space-y-12 mt-2">
          <!-- Author Information -->
          <div class="px-4">
            <Title :padding="false">Contact Data</Title>

            <div class="mt-1 grid gap-3 grid-cols-2 <md:grid-cols-1">
              <input
                v-model="firstname"
                class="input"
                placeholder="First Name"
              />

              <input
                v-model="lastname"
                class="input"
                placeholder="Last Name"
              />
              <input v-model="email" class="input col-span-2 <md:col-span-1" type="email" placeholder="Email address" />
            </div>
          </div>

          <!-- Payment Information -->
          <div class="px-4">
            <Title :padding="false">Payment Data</Title>
            <div class="mt-1 grid gap-3 grid-cols-3 <md:grid-cols-1">
              <div class="col-span-3 input space-x-3 flex">
                <IconCreditcard class="text-black dark:text-white w-6 float-left flex " />
                <input class="h-full bg-transparent w-full" placeholder="Card Number" v-model="creditCardNumber" maxlength="19"
                  pattern="[0-9]*" inputmode="numeric" type="text" />
              </div>
            
              <input class="input" v-model="cvv" placeholder="CVV"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number" maxlength="3" />
            
              <select class="select" v-model="expireMonth">
                <option value="" disabled selected>Month</option>
                <option v-for="n in 12" :value="n < 10 ? '0' + n : n" :key="n">
                  {{ 10 > n ? "0" + n : n }}
                </option>
              </select>
            
              <select class="select" v-model="expireYear">
                <option value="" disabled selected>Year</option>
                <option v-for="(n, $index) in 12" :value="$index + currentYear" :key="n">
                  {{ $index + currentYear }}
                </option>
              </select>
            </div>
            <div class="mt-4">
              <BlogNotification v-if="signed_in2">
                <input type="checkbox" class="align-middle checkbox" id="save" v-model="saveinfo" Checked />
                <label for="save" class="ml-2 align-middle">Allow Stripe to store your Payment Information</label>
              </BlogNotification>
            </div>
            
          </div>
          <div class="px-4" v-if="signed_in2">
            <Title :padding="false" class="pb-2">Saved Payment Methods</Title>
            <div>
              <BlogNotification type="cards">
                <div v-if="!signed_in2 || savedmethods.length === 0 && !loading" >
                  There are no saved Payment Methods
                </div>
                <div class="space-y-4">
                <div v-if="signed_in2 && !loading" v-for="(id, index)  in savedmethods" :key="`id-${index}`" @click="paywithsavedcard(String(id.id))" class="group rounded-md bg-neutral-700 border-neutral-800 hover:(border-neutral-400 bg-neutral-600) border-2 px-6 py-5 sm:flex sm:items-start sm:justify-between">
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
                  <span class="text-neutral-400 text-md font-bold">Click to Pay {{ price }}$ </span>
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
              <div class="mt-4">
                  <Button variant="github" href="/shop"><template #icon>
                  <IconCog class="h-6 text-black dark:text-white w-6 " />
                </template>Edit Saved Payment Methods</Button>
              </div>
            </div>

          </div>
          <div class="px-4 w-full">
            <Title :padding="false" class="pb-4" >Complete Purchase</Title>
            <div class="space-y-4 items-center sm:(flex space-x-2 space-y-0)">
              <Button variant="github" type="button" href="/shop/shop">
                <template #icon>
                  <IconX class="h-6 text-black dark:text-white w-6 " />
                </template>
              
                Cancel Payment
              </Button>
              
              <Button variant="github" type="button" @click.native="pay">
                <template #icon>
                  <IconCash class="h-6 text-black dark:text-white w-6 " />
                </template>
              
                {{loading ? "Loading..." : "Pay " + price + "$ with Stripe"}}
              </Button>
            </div>
            <div class="pt-10 flex">
            <a>
              By clicking the button above, you agree to our <SmartLink href="/terms" class="text-blue-500 hover:text-blue-600">Terms of Service</SmartLink>.
            </a>
            </div>
          </div>
        </div>
      </div>
      <ShopPopup v-if="showpopup2" name="1" :text="String(this.text)" :icon="String(this.icon)"/>
    </div>
    </Transition>
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

