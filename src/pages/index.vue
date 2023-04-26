<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  icon?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
  isHidden?: boolean
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      showModal: false,
      showExtraExperience: false,
      repos: [] as Repository[],
      projects: [
        {
          title: "WebStax.io",
          to: "/projects/webstax",
          description:
            "A Webapp that allows you to create your own custom website from templates.",
          icon: "webstax",
        },
        {
          title: "BitStore.dev",
          to: "/projects/bitstore",
          description:
            "Online Shop where I sell my paid and free discord tools.",
          icon: "bitstore",
        },
        {
          title: "This Website",
          to: "#top",
          description:
            "My personal website, blog, goals, daily songs and much more!",
          icon: "VS Code",
        },
        {
          title: "Discord Bot",
          to: "/projects/discord-bot",
          description:
            "A new generation ticket bot for discord with various purchaseing options.",
          icon: "discordbot",
        },
      ] as Project[],
      experiences: {
        jobs: [
          
          {
            title: "WebStax",
            url: "https://webstax.io",
            position: "Web Developer & Founder",
            date: "2021-Now",
          },
          {
            title: "BitStore",
            url: "https://bitstore.dev",
            position: "Founder & Developer",
            date: "2020-Now",
          },
          {
            title: "Wix/EditorX",
            url: "https://editorx.com",
            position: "Intern - Frontend Developer",
            date: "2021",
            isHidden: true,
          },
          {
            title: "Synthesia",
            url: "https://synthesia.io",
            position: "Intern - AI Developer",
            date: "2020",
            isHidden: true,
          },
          {
            title: "Helmholz Institute",
            url: "https://www.helmholtz.de",
            position: "Intern - 3D Printing Technology",
            date: "2019",
          },
        ],
        education: [
          {
            title: "Haileybury College UK",
            url: "http://haileybury.com",
            position: "International Baccalaureate Diploma",
            date: "2022-2024",
          },
          {
            title: "Haileybury College UK",
            url: "http://haileybury.com",
            position: "IGCSE's",
            date: "2020-2022",
          },
          {
            title: "Ostsee-Gymnasium",
            url: "https://www.ostsee-gymnasium.de",
            position: "Abitur",
            date: "2018-2020",
            isHidden: true,
          },
          {
            title: "Emil-von-Behring-Gymnasium",
            url: "http://www.evbg.de",
            position: "Abitur",
            date: "2014-2018",
          },
        ],
      } as ExperienceObject,
      cards: {
        me: [
          {
            title: "Repositories",
            description:
              "Want to see and/or contribute to my code and public repositories?",
            href: "/me/repos",
          },
          {
            title: "Hire Me", //done
            description:
              "Want to hire me? Check out my skills and contact me!",
            href: "/me/hireme",
          },
          {
            title: "Contact",
            description:
              "Need help with anything? Want to get in touch? Send me a message!",
            href: "/me/contact",
          },
          {
            title: "Donate",
            description:
              "Want to support me and my projects so that I can create better stuff in the future?",
            href: "/me/donate",
          },
        ],
        pages: [
          {
            title: "Blog",
            description:
              "Read my blogs about real-life, programming, development and more!",
            href: "/blog",
          },
          {
            title: "Portfolio", //currently in progress
            description:
              "My projects, experiences, skills and more!",
            href: "/portfolio",
          },
          {
            title: "Daily Songs",
            description:
              "Want to see what I'm listening to every day? Check out my daily songs!",
            href: "/daily-song",
          },
          {
            title: "Songs",
            description:
              "Trust your taste? Compare your favourite songs and artists with mine!",
            href: "/songs",
          },
        ],
      },
      skills: [
        {
          title: " Web Development",
          items: [
            { title: "TypeScript", color: "#3178c620" },
            { title: "Vue.js", color: "#42b88320" },
            { title: "React.js", color: "#61dafb20" },
            { title: "HTML", color: "#e34c2610" },
            { title: "Tailwind CSS", color: "#38b2ac20" },
            { title: "Node.js", color: "#33993320" },
            { title: "PHP", color: "#777bb320" },
            { title: "Sass", color: "#CF649A10" },

          ],
        },
        {
          title: "Programming",
          items: [
            {
              title: "Python",
              color: "#0165A920",
              image: "https://i.imgur.com/kbCKt7o.png",
            },
            {
              title: "Golang",
              color: "#0165A920",
              image: "https://i.imgur.com/fk7wJYu.png",
            },
            {
              title: "C++",
              color: "#0165A920",
              image: "https://i.imgur.com/ThA4xi5.png",
            },
            {
              title: "C#",
              color: "#777bb320",
              image: "https://i.imgur.com/5nz6tGc.png",
            },
          ],
        },
        {
          title: "Apps",
          items: [
            {
              title: "VS Code",
              iconPack: "IconBrand",
              color: "#0165A920",
            },
            {
              title: "Raycast",
              color: "#FF515A20",
              image: "https://i.imgur.com/NBc0C4j.png",
            },
            {
              title: "Blender",
              color: "#e34c2610",
              image: "https://i.imgur.com/956ZGwS.png",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              title: "GitHub",
              color: "#e8eaea10",
              iconPack: "IconBrand",
            },
            {
              title: "Netlify",
              iconPack: "IconBrand",
              color: "#00C7B720",
            },
            {
              title: "Supabase",
              color: "#5CB07F20",
              image: "https://i.vgy.me/1E5xj5.png",
            },
            {
              title: "Flowbite",
              color: "#3178c620",
              image: "https://i.vgy.me/FfX9Ip.png",
            },
            {
              title: "Firebase",
              color: "#FFCA2820",
            },
            {
              title: "Cloudflare",
              color: "#FFCA1120",
              image: "https://i.imgur.com/KDxtmTP.png",
            },
          ],
        },
      ],
    }
  },
  head: {
    title: "Home",
  },
})
</script>

<template>
  <div class="space-y-14 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 mx-4 py-10 justify-between md:flex-row md:items-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-2">
          <div
            class="font-semibold text-xl text-neutral-700 md:text-3xl dark:text-neutral-200"
          >
            <h1>Self taught</h1>
            <h1>
              <SmartLink
                href="https://www.w3schools.com/whatis/whatis_fullstack_js.asp"
                class="cursor-help border-b-2 border-neutral-500 text-neutral-500 dark:border-neutral-500 dark:text-neutral-500"
                blank
                >Full-stack</SmartLink
              >
              web developer
            </h1>
          </div>

          <p class="text-neutral-500">
            Hi there, my name is Daniel and I am a passionate Web-developer from Germany 🇩🇪. I build complex web apps using frameworks such
            as
            <SmartLink href="https://vuejs.org/" class="description-link" blank
              >Vue.js</SmartLink
            >,
            <SmartLink
              href="https://reactjs.org/"
              class="description-link"
              blank
              >React.js</SmartLink
            >
            {{ "" }} and
            <SmartLink
              href="https://tailwindcss.com/"
              class="description-link"
              blank
              >Tailwind CSS</SmartLink
            >.
          </p>
        </div>

        <Status class="mt-4" />
      </div>

      <div class="rounded-full mb-4 md:mb-0">
        <SmartImage
          src="/assets/images/memoji.png"
          class="rounded-full h-30 w-30 md:h-45 md:w-45"
        />
      </div>
    </header>

    <section id="pages" class="my-16">
      <Title class=" dark:text-neutral-500">Pages</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.pages"
          :key="`card-p-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="me" class="my-16">
      <Title class=" dark:text-neutral-500">Me</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="projects">
      <Title class=" dark:text-neutral-500">Projects I currently work on</Title>

      <div class="mt-4 grid gap-2 md:(gap-4 grid-cols-2)">
        <Card
          v-for="(project, index) in projects"
          :key="`project-${index}`"
          :href="project.to || project.href"
          :title="project.title"
          :description="project.description"
          :blank="!!project.href"
          class="h-full"
        >
          {{ project.description }}

          <template v-if="project.icon" #icon>
            <IconDev
              :brand="project.icon"
              class="rounded-full bg-gray-100 h-14 p-2 text-neutral-500 w-14 dark:(bg-neutral-800 text-white)"
            />
          </template>
        </Card>
      </div>
    </section>

    <section
      id="experiences"
      class="mt-4 grid gap-6 sm:mt-6 md:(md:mt-10 gap-8 grid-cols-2)"
    >
      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title class=" dark:text-neutral-500">Experience</Title>
          <button
            class="text-gray-400 mr-4 text-sm hover:underline dark:text-neutral-700"
            @click="showExtraExperience = !showExtraExperience"
          >
            {{ showExtraExperience ? "show less" : "show more" }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            v-show="experience.isHidden ? showExtraExperience : true"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title class=" dark:text-neutral-500">Education</Title>
          <button
            class="text-gray-400 mr-4 text-sm hover:underline dark:text-neutral-700"
            @click="showExtraExperience = !showExtraExperience"
          >
            {{ showExtraExperience ? "show less" : "show more" }}
          </button>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            v-show="experience.isHidden ? showExtraExperience : true"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies" class="mt-6">
      <Title class=" dark:text-neutral-500">Technologies I use</Title>

      <div class="flex flex-col space-y-6 mt-8">
        <section v-for="category in skills" :key="category.title">
          <h5
            class="border-b border-gray-400/10 dark:border-neutral-600/10 text-gray-400 dark:text-neutral-600/70 text-lg mx-4 mb-4 pb-2 font-medium"
          >
            {{ category.title }}
          </h5>

          <div
            class="grid px-4 md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            <CardSkill
              v-for="(skill, index) in category.items"
              :key="`skill-${index}`"
              v-bind="skill"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.description-link {
  @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
