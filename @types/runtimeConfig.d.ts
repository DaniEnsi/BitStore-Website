/* Interfaces */
export interface SponsorLinks {
  github: string
  patreon: string
}

export interface Social {
  discord: string
  twitter: string
  github: string
  instagram: string
  trello: string
  email: string
}

export interface discordbot {
  website: string
  faq: string
}

export interface bitstore {
  github: string
  shop: string
}

export interface webstax {
  website: string
}

export interface Links {
  bitstore: bitstore
  discordbot: discordbot
  webstax: webstax
}
declare module "@nuxt/types/config/runtime" {
  interface NuxtRuntimeConfig {
    social: Social
    sponsor: SponsorLinks
    links: Links
  }
}
