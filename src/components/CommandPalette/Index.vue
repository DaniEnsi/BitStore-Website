<script lang="ts">
import Vue from "vue"
import { supabase } from '../../supabase/supabaseClient'

interface ICategory {
  id: string
  title: string
}

interface IPage {
  title: string
  href: string
  icon: string
  iconProps?: {
    [key: string]: string
  }
  category: string
}

export default Vue.extend({
  data() {
    return {
      signedin: false,
      username: "",
      search: "",
      categories: [
        { id: "pages", title: "Pages" },
        { id: "me", title: "Me" },
        { id: "ql", title: "Quick Links" },
      ] as ICategory[],
      pages: [
        /* Pages */
        {
          title: "Home",
          href: "/",
          icon: "IconHome",
          category: "pages",
        },
        {
          title: "Shop",
          href: "/shop",
          icon: "IconShoppingCart",
          category: "pages",
        },
        {
          title: "Blog",
          href: "/blog",
          icon: "IconSun",
          category: "pages",
        },
        {
          title: "Portfolio",
          href: "/portfolio",
          icon: "IconDocument",
          category: "pages",
        },
        {
          title: "Daily Song",
          href: "/daily-song",
          icon: "IconFire",
          category: "pages",
        },
        {
          title: "Songs",
          href: "/songs",
          icon: "IconMusicNote",
          category: "pages",
        },


        /* Me */
        {
          title: "Repositories",
          href: "/me/repos",
          icon: "IconBranch",
          category: "me",
        },
        {
          title: "Hire Me",
          href: "/me/hireme",
          icon: "IconStar",
          category: "me",
        },
        {
          title: "Contact",
          href: "/me/contact",
          icon: "IconInbox",
          category: "me",
        },
        {
          title: "Donate",
          href: "/me/donate",
          icon: "IconDollar",
          category: "me",
        },

        /* Quick Links */
        {
          title: "GitHub",
          href: "https://github.com/daniensi",
          icon: "IconBrand",
          iconProps: {
            brand: "github",
          },
          category: "ql",
        },
        {
          title: "Twitter",
          href: "https://twitter.com/dani_duese",
          icon: "IconBrand",
          iconProps: {
            brand: "twitter",
          },
          category: "ql",
        },
      ] as IPage[],
    }
  },

  computed: {
    isPaletteVisible() {
      return this.$store.state?.palette?.visible || false
    },

    getCategoriesFiltered(): { category: ICategory; pages: IPage[] }[] {
      const categories = this.categories
      const items: { category: ICategory; pages: IPage[] }[] = []

      for (const category of categories) {
        const categoryItems = this.pages.filter(
          (page) =>
            page.category === category.id &&
            (this.search
              ? page.title?.toLowerCase().includes(this.search?.toLowerCase())
              : true)
        )

        if (categoryItems.length > 0) {
          items.push({ category, pages: categoryItems })
        }
      }

      return items
    },
  },

  /*
      Watch for changes to the isVisible and disable scrolling
      when the palette is visible.
    */
  watch: {
    "$route.fullPath"() {
      if (this.isPaletteVisible) {
        this.$store.commit("palette/toggleVisibility", false)
      }
    },

    isPaletteVisible(isVisible: boolean) {
      const keys = ["overflow-y-hidden"]

      if (isVisible) document.body.classList.add(...keys)
      else document.body.classList.remove(...keys)
    },
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeyDown)
    setTimeout (() => {
      this.signedin = this.$store.state?.shop?.signedin
      this.username = this.$store.state?.shop?.username || "Error"
    }, 20)
  },

  updated() {
    this.signedin = this.$store.state?.shop?.signedin
    this.username = this.$store.state?.shop?.username || "Error"
  },

  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown)
  },

  methods: {
    toggleVisibility(value?: boolean) {
      this.$store.commit("palette/toggleVisibility", value)
    },

    async LogOut() {
      const { error } = await supabase.auth.signOut()
      console.log(error)
      this.$store.commit("shop/setSignedIn" , false)
      this.$store.commit("shop/setUserid", "undefined")
      this.toggleVisibility(false)
      setTimeout(() => {
        this.$router.push("/shop")
      }, 500)
    },

    Login() {
      this.$router.push("/shop/login")
    },

    handleKeyDown(event: KeyboardEvent) {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key === "k" &&
        !event.shiftKey &&
        !event.altKey
      ) {
        event.preventDefault()
        this.toggleVisibility()
      } else if (event.key === "Escape") {
        this.toggleVisibility(false)
      } else {
        this.$refs.searchInput?.focus()
      }
    },

    changeColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value === "dark" ? "light" : "dark"
    },
  },
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-show="isPaletteVisible"
      class="bg-black/70 fixed inset-0 flex min-h-screen min-w-screen z-50 justify-center"
      @click="() => toggleVisibility(false)"
    >
      <div
        class="lg:h-1/2 lg:w-1/2 w-full h-full overflow-hidden scrollbar relative lg:rounded-lg lg:mt-24 ring-1 ring-white/10 dark:bg-neutral-900 bg-gray-200 text-neutral-900 dark:text-white"
        @click="(e) => e.stopPropagation()"
      >
        <!-- Search bar -->
        <div class="absolute inset-x-0 top-0 h-10">
          <div
            class="absolute pl-3 pointer-events-none inset-0 flex items-center"
          >
            <IconSearch class="h-5 w-5 text-neutral-500" />
          </div>

          <input
            ref="searchInput"
            v-model="search"
            class="appearance-none pl-10 text-neutral-600 dark:text-white/60 pr-4 placeholder-neutral-500 text-sm focus:outline-none lg:rounded-t-lg w-full h-full bg-gray-300 dark:bg-neutral-800"
            placeholder="Search"
          />
        </div>

        <!-- Content -->
        <div
          class="pt-13 space-y-4 pb-3.5 px-1.5 overflow-y-auto h-full text-neutral-600 space-y-1"
        >
          <div class="" v-if="search.length == 0">
            <span class="text-xs px-2 font-semibold">
              User
            </span>
            <div class="" v-if="signedin === true">
              <CommandPaletteItem :title="'Welcome ' + this.username" icon="IconAccount" description="Jump to Account Page" class=""/>
              <CommandPaletteItem title="Sign Out" icon="IconSignOut" description="Click to Logout" class="" @click.native="LogOut" />
            </div>
            <div class="" v-else>
              <CommandPaletteItem title="Login" icon="IconSignIn" description="Click to Login" @click.native="Login"/>
            </div>
          </div>
          <div
            v-for="(item, index) in getCategoriesFiltered"
            :key="`command-palette-category-${index}`"
          >
            <span class="text-xs px-2 font-semibold">
              {{ item.category.title }}
            </span>

            <div>
              <CommandPaletteItem
                v-for="(page, idx) in item.pages"
                :key="`command-palette-page-${idx}`"
                :title="page.title"
                :icon="page.icon"
                :icon-props="page.iconProps"
                :href="page.href"
              />
            </div>
          </div>

          <!-- Controls -->
          <div>
            <span class="text-xs px-2 font-semibold">Controls</span>

            <div>
              <CommandPaletteItem
                title="Toggle Color Mode"
                icon="IconSun"
                @click.native="changeColorMode"
              />

              <CommandPaletteItem
                title="Close Palette"
                icon="IconX"
                @click.native="() => toggleVisibility(false)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
