<script lang="ts">
import Vue from "vue"

// Import type
import type { Repository } from "~/src/types/Response/GitHub"

export default Vue.extend({
  data() {
    return {
      repos: [] as Repository[],
      repos2: [] as Repository[],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const filter = [
      "DaniEnsi"
    ]
    const filter2 = [
      "BitStore"
    ]

    const repos: Repository[] = (
      await this.$axios.get(
        "https://api.github.com/users/DaniEnsi/repos?per_page=100"
      )
    ).data
    
    const repos2: Repository[] = (
      await this.$axios.get(
        "https://api.github.com/orgs/BitStore-Community/repos?per_page=100"
      )
    ).data

    this.repos = repos
      ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)

    this.repos2 = repos2
      ?.filter((repo) => repo.fork === false && !filter2.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)

  },
  head() {
    const title = "GitHub Repositories"
    const description = "My public projects hosted on GitHub."

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
  <div class="text-gray-500 dark:text-neutral-600">
    <header class="space-y-2 my-12 px-4">
      <h1 class="text-gray-900 text-4xl dark:text-neutral-300">Repositories</h1>
      <p>My public projects on GitHub.</p>
    </header>

    <main>
      <Title :padding="false" class="pb-2 pl-2" >@DaniEnsi</Title>
      <div
        v-if="$fetchState.pending === true"
        class="grid gap-4 md:grid-cols-2"
      >
        <SkeletonLoader
          v-for="i in 9"
          :key="`skeleton-${i}`"
          type="repository"
        />
      </div>

      <div v-else class="grid gap-4 md:grid-cols-2">
        <SmartLink
          v-for="(repo, index) in repos"
          :key="`repo-${index}`"
          :href="repo.html_url"
          blank
        >
          <CardRepository
            :name="repo.name"
            :language="repo.language"
            :stars="repo.stargazers_count"
            :description="repo.description"
            :license="repo.license && repo.license.spdx_id"
            :top="index === 0"
            class="h-full"
          />
        </SmartLink>
      </div>
      <Title :padding="false" class="pb-2 pt-6 pl-2" >@BitStore-Community</Title>
      <div
        v-if="$fetchState.pending === true"
        class="grid gap-4 md:grid-cols-2"
      >
        <SkeletonLoader
          v-for="i in 9"
          :key="`skeleton-${i}`"
          type="repository"
        />
      </div>

      <div v-else class="grid gap-4 md:grid-cols-2">
        <SmartLink
          v-for="(repo, index) in repos2"
          :key="`repo-${index}`"
          :href="repo.html_url"
          blank
        >
          <CardRepository2
            :name="repo.name"
            :language="repo.language"
            :stars="repo.stargazers_count"
            :description="repo.description"
            :license="repo.license && repo.license.spdx_id"
            :top="index === 0"
            class="h-full"
          />
        </SmartLink>
      </div>
    </main>
  </div>
</template>
