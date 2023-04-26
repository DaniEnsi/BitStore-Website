<script lang="ts">
import Vue from "vue"
import { supabase } from '../../supabase/supabaseClient'
import { convertPatternsToTasks } from "fast-glob/out/managers/tasks"

export default Vue.extend({
  data() {
    return {
      SignedIn: false,
      isHolding: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.checkSignedIn()
    }, 10);
  },
  methods: {
    checkSignedIn() {
      if (this.$store.state.shop.admin === true) {
        console.log("User is an admin")
      } else {
        this.$router.push("/shop")
      }
    }
  }
})
</script>
<template>
    <div>
      // shows a table with all the past purchases caught from supabase "purchases" table

    </div>
</template>