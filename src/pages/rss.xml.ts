import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { collectionsConfig, generalConfig } from "../site.config";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");

  return rss({
    title: generalConfig.name,
    description: generalConfig.description,
    site: context.site ?? generalConfig.url.toString(),
    trailingSlash: true,
    stylesheet: "/rss/pretty-feed-v3.xsl",
    customData: `<language>en-GB</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${generalConfig.url.toString().replace(/\/+$/, "")}${collectionsConfig.permalink_posts_entry}${post.data.slug}`,
    })),
  });
}
