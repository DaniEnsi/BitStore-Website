import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://i.vgy.me/phIXHz.png"
const description =
  "Young Web developer from Germany, interested in languages, gaming, and programming, trying to improve his JavaScript skills!"

const Head: NuxtOptionsHead = {
  title: "DaniDuese",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@dani_duese",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@dani_duese",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "bitstore.dev",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "bitstore.dev",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      src: "src/static/assets/icons/icon.ico",
    },
  ],
}

export default Head
