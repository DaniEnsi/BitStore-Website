<script lang="ts">
import LastFM from "lastfm-typed"
import Vue from "vue"
// Netlify function return type
interface LastFmUser {
  name: string
  registered: number
  totalPlays: number
  image: string
  url: string
}

interface LastFmSong {
  name: string
  artist: string
  image: string
  url: string
  date: string
  plays?: number
  nowPlaying: boolean
}


interface LastFmArtist {
  name: string
  plays: number
  image: string
  url: string
}

interface LastFmResponse {
  user: LastFmUser
  topTracks: LastFmSong[]
  recentTracks: LastFmSong[]
  topArtists: LastFmArtist[]
}

export default Vue.extend({
  data() {
    return {
      lastFm: {} as LastFmResponse,
    }
  },
  fetchOnServer: false,
  async fetch() {
    const url =
      process.env.NODE_ENV === "production"
        ? "https://bitstore.dev/.netlify/functions/getLastFmSongs"
        : "http://localhost:8888/.netlify/functions/getLastFmSongs"

    const { data: songs }: { data: LastFmResponse } = await this.$axios(url)

    this.lastFm = songs
  },
  head() {
    const title = "Song Recommendations"
    const description =
      "Looking for someone else's song recommendations? Here it is! I built a system just for you: Fresh, new songs every day!"
    const image = "https://bitstore.dev/assets/meta/images/daily.jpg"

    return {
      title,
      meta: this.$prepareMeta({
        title,
        description,
        image,
        keywords: "daily, song, recommendation",
        url: "https://bitstore.dev/daily-song",
      }),
      link: [
        {
          rel: "canonical",
          href: "https://bitstore.dev/daily-song",
        },
      ],
    }
  }
})
</script>

<template>
  <div class="space-y-4 my-10">

    <div class="space-y-12">
      <div class="space-y-6 px-4 gap-6 grid-cols-2 md:space-y-0 md:grid">
        <div class="space-y-4">
          <SkeletonLoader v-if="$fetchState.pending || $fetchState.error" class="h-[30vh] w-full md:h-full" />

          <SmartImage v-else class="h-[27.5vh] w-full md:h-66.8 rounded" :src=lastFm.recentTracks[0].image />
        </div>

        <div class="space-y-2 w-full">
          <div class="rounded-md bg-gray-200/40 p-4 truncate dark:bg-neutral-800/40">
            <Title :padding="false"> Title </Title>

            <SkeletonLoader v-if="$fetchState.pending || $fetchState.error"
              class="bg-gray-300 h-6 w-2/4 dark:bg-neutral-700" />

            <span v-else class="text-gray-700 truncate dark:text-gray-300"> {{
            lastFm.recentTracks[0].name
            }}</span>
          </div>

          <div class="rounded-md bg-gray-200/40 p-4 truncate dark:bg-neutral-800/40">
            <Title :padding="false"> Artist </Title>

            <SkeletonLoader v-if="$fetchState.pending || $fetchState.error"
              class="bg-gray-300 h-6 w-1/4 dark:bg-neutral-700" />

            <span v-else class="text-gray-700 truncate dark:text-gray-300">{{ "by " + lastFm.recentTracks[0].artist
            }}</span>
          </div>

          <div class="rounded-md bg-gray-200/40 p-4 truncate dark:bg-neutral-800/40">
            <Title :padding="false"> Date </Title>

            <SkeletonLoader v-if="$fetchState.pending || $fetchState.error"
              class="bg-gray-300 h-6 w-2/4 dark:bg-neutral-700" />

            <span v-else class="text-gray-700 truncate dark:text-gray-300">{{
            new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear()
            }}</span>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <Title>Older Songs</Title>

        <div class="grid px-2 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <template v-if="$fetchState.pending === true">
            <SkeletonLoader v-for="item in 15" :key="`skeleton-song-${item}`" type="song" />
          </template>

          <CardLastFm
            v-for="song of lastFm.recentTracks"
            :key="song.name"
            :name="song.name"
            :artist="song.artist"
            :image="song.image"
            :now-playing="song.nowPlaying"
            :plays="song.plays"
            :url="song.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>
