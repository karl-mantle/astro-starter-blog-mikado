import type { Page } from "astro";
import { getCommonStructuredData } from "~/lib/schema/common";
import { collectionsConfig, siteConfig } from "~/site.config";

export function createCollectionPage(
  metadata: {
    type: string;
    url: URL;
    title: string;
    description: string;
  },
  page?: Page,
) {
  const { ids: commonIds, nodes: commonNodes } = getCommonStructuredData();
  const canonicalUrl = metadata.url;

  const ids = {
    webpage: `${canonicalUrl}#webpage`,
    /* breadcrumb: `${canonicalUrl}#breadcrumb`, */
    itemList: `${canonicalUrl}#item-list`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...commonNodes,

      {
        "@type": "CollectionPage",
        "@id": ids.webpage,
        inLanguage: siteConfig.locale,
        url: canonicalUrl,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { "@id": commonIds.website },
        /* breadcrumb: { "@id": ids.breadcrumb }, */
        primaryImageOfPage: { "@id": commonIds.ogImage },
        mainEntity: { "@id": ids.itemList },
      },

      // TODO
      /* {
        "@type": "BreadcrumbList",
        "@id": ids.breadcrumb,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: metadata.title, item: canonicalUrl },
        ],
      }, */

      {
        "@type": "ItemList",
        "@id": ids.itemList,
        name: `${metadata.title} page ${page?.currentPage}`,
        numberOfItems: page ? page.data.length : undefined,
        itemListElement: page
          ? page.data.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${siteConfig.url}${collectionsConfig.permalink_posts_entry}${p.data.slug}`,
              name: p.data.title,
            }))
          : undefined,
      },
    ],
  };
}

export default { createCollectionPage };
