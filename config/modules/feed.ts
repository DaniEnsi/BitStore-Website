const Feed = () => {
  const baseUrlArticles = "https://bitstore.dev/blog"

  const feedFormats = {
    rss: { type: "rss2", file: "rss.xml" },
    json: { type: "json1", file: "feed.json" },
  }

  const { $content } = require("@nuxt/content")

  const createFeedArticles = async function (feed: any) {
    feed.options = {
      title: "Dani's Blog",
      description:
        "Dani's blog page in which he talks about daily life, experience, holds what he wants to show or tell what he wants to show in a more organized and professional way.",
      link: baseUrlArticles,
    }

    const articles = await $content("blog").fetch()

    articles.forEach((article: any) => {
      const url = `${baseUrlArticles}/${article.slug}`

      const hostName =
        process.env.NODE_ENV === "production"
          ? "https://bitstore.dev"
          : "http://localhost:3000"

      const postImagesPath = `${hostName}/assets/images/posts`

      feed.addItem({
        title: article.title,
        slug: article.slug,
        link: url,
        image: article.image
          ? `${hostName}${article.image}`
          : `${postImagesPath}/${url?.split("/")?.at(-1)}.jpg`,
        date: new Date(article.createdAt),
        description: article.description,
        content: article.summary,
      })
    })
  }

  return Object.values(feedFormats).map(({ file, type }) => ({
    path: `${file}`,
    create: createFeedArticles,
    type,
  }))
}

export default Feed
