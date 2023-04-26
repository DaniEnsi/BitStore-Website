<script lang="ts">
import Vue from "vue"
import { supabase } from '../../supabase/supabaseClient'

export default Vue.extend({
  data() {
    return {
      SignedIn: false,
      isHolding: false,
      user_id: "",
      admin: false,
    }
  },
  async created() {
    const { data, error } = await supabase.auth.getSession()
    if (data["session"] === null) {
      this.SignedIn = false
      this.$store.commit("shop/setSignedIn" , false)
      this.$store.commit("shop/setUserid" , "undefined")
    }
    else if (data["session"] === undefined) {
      console.log("undefined")
    } else {
      this.SignedIn = true
      this.$store.commit("shop/setSignedIn" , true)
      this.user_id = data["session"]["user"]["id"]
      this.$store.commit("shop/setUserid" , data["session"]["user"]["id"])
      this.$store.commit("shop/setUsername" , data["session"]["user"]["user_metadata"]["first_name"])
      this.checkAdmin()
    }
  },
  watch: {
    async '$route'(to, from) {
      const { data } = await supabase.auth.getSession()
      if (data["session"] === null) {
        this.SignedIn = false
        this.$store.commit("shop/setSignedIn" , false)
        this.$store.commit("shop/setUserid" , "undefined")
      }
      else {
        this.SignedIn = true
        this.$store.commit("shop/setSignedIn" , true)
        this.user_id = data["session"]["user"]["id"]
        this.$store.commit("shop/setUserid" , data["session"]["user"]["id"])
        this.$store.commit("shop/setUsername" , data["session"]["user"]["user_metadata"]["first_name"])
        this.checkAdmin()
      }
    },
  },
  methods: {
    async LogOut() {
      
      const { error } = await supabase.auth.signOut()
      console.log(error)
      this.SignedIn = false
      this.$store.commit("shop/setSignedIn" , false)
      this.$store.commit("shop/setUserid" , "undefined")
    },
    async checkAdmin() {
      const { data, error } = await supabase
          .from('userdata')
          .select('admin')
          .eq('user_id', this.user_id)
        // if user_id is "undefined" or "error", route to the shop. Otherwise check if the user is an admin.
        if (data[0].admin === false) {
            this.$store.commit("shop/setAdmin", false)
            this.admin = false
        } else {
            this.$store.commit("shop/setAdmin", true)
            this.admin = true
        }
    }
  },
  computed: {
    /**
     * Return target url.
     */
    getTargetLink(): string {
      const path = this.$route.path

      if (path !== "/projects/webstax" && path.startsWith("/projects/webstax"))
        return "/projects/webstax"
      if (path !== "/shop" && path.startsWith("/shop"))
        return "/shop"
      if (path !== "/portfolio" && path.startsWith("/portfolio"))
        return "/portfolio"
      else return "/"
    },
  },
})
</script>

<template>
  <nav class="w-full">
    <div class="container mx-auto px-4 w-11/12 relative sm:w-9/12 md:w-7/12">
      <div class="flex items-center justify-between">
        <SmartLink :href="getTargetLink" class="flex-shrink-0 h-10 w-10">
          <SmartImage src="/assets/icons/icon.svg"
            class="rounded-md bg-gray-100 ring-black transition-transform ring-2 ring-opacity-5 sm:transform hover:-rotate-6"
            width="100" height="100" title="Dani's Website" />
        </SmartLink>

        <div class="flex space-x-2 items-center">
          <CommandPaletteButton />
          <ColorSwitcher />
          <Button v-if="SignedIn === false" icon="SignIn" class="focus:outline-none px-4" href="/shop/login" rounded elevated >Login</Button>
          <Button v-if="admin === true" icon="Inbox" class="focus:outline-none h-36px" href="/shop/dashboard" :padding="false" rounded elevated/>
          <Button v-if="SignedIn === true" icon="SignOut" class="focus:outline-none <md:hidden" rounded elevated  @click.native="LogOut" href="/shop" />
          <Button v-if="SignedIn === true" icon="Account" class="focus:outline-none px-4 h-36px <sm:hidden" href="/shop/account" :padding="false" rounded elevated>Account</Button>
          <Button v-if="SignedIn === true" icon="Account" class="focus:outline-none h-36px sm:hidden" href="/shop/account"
            :padding="false" rounded elevated/>

        </div>
      </div>
    </div>
  </nav>
</template>