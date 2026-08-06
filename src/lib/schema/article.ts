import type { CollectionEntry } from "astro:content";
import slugify from "slugify";
import { siteConfig } from "~/site.config";
import { getCommonStructuredData } from "~/lib/schema/common";

export function createArticle(
  metadata: {
    type: string;
    url: URL;
    title: string;
    description: string;
  },
  entry: CollectionEntry<"posts">,
) {
  const { ids: commonIds, nodes: commonNodes } = getCommonStructuredData();

  const canonicalUrl = metadata.url;

  const ids = {
    webpage: `${canonicalUrl}#webpage`,
    article: `${canonicalUrl}#article`,
    /* breadcrumb: `${canonicalUrl}#breadcrumb`, */
    primaryImage: `${canonicalUrl}#primaryimage`,
    person: `${siteConfig.url}#author-${slugify(entry.data.author ?? "unknown")}`,
  };

  const articleImage = entry.data.image
    ? {
        "@type": "ImageObject",
        "@id": ids.primaryImage,
        inLanguage: siteConfig.locale,
        url: entry.data.image.src.src,
        contentUrl: entry.data.image.src.src,
        width: entry.data.image.src.width,
        height: entry.data.image.src.height,
        caption: entry.data.image.alt,
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...commonNodes,

      {
        "@type": "Person",
        "@id": ids.person,
        name: entry.data.author ?? "Unknown author",
      },

      {
        "@type": "WebPage",
        "@id": ids.webpage,
        inLanguage: siteConfig.locale,
        url: canonicalUrl,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { "@id": commonIds.website },
        /* breadcrumb: { "@id": ids.breadcrumb }, */
        primaryImageOfPage: articleImage
          ? { "@id": ids.primaryImage }
          : { "@id": commonIds.ogImage },
      },

      // TODO
      /* {
        "@type": "BreadcrumbList",
        "@id": ids.breadcrumb,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: entry.data.title, item: canonicalUrl },
        ],
      }, */

      {
        "@type": ["Article", "BlogPosting"],
        "@id": ids.article,
        inLanguage: siteConfig.locale,
        url: canonicalUrl,
        headline: metadata.title,
        description: metadata.description,
        articleSection: entry.data.category,
        keywords: entry.data.tags.length ? entry.data.tags.join(", ") : undefined,
        datePublished: entry.data.pubDate.toISOString(),
        dateModified: entry.data.updatedDate?.toISOString() ?? entry.data.pubDate.toISOString(),
        author: { "@id": ids.person },
        publisher: { "@id": commonIds.organization },
        mainEntityOfPage: { "@id": ids.webpage },
        image: articleImage ? { "@id": ids.primaryImage } : { "@id": commonIds.ogImage },
      },

      ...(articleImage ? [articleImage] : []),
    ],
  };
}

export default { createArticle };
