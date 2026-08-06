import { siteConfig } from "~/site.config";
import { getCommonStructuredData } from "~/lib/schema/common";

export function createWebpage(metadata: {
  type: string;
  url: URL;
  title: string;
  description: string;
}) {
  const { ids: commonIds, nodes: commonNodes } = getCommonStructuredData();
  const canonicalUrl = metadata.url;

  const ids = {
    webpage: `${canonicalUrl}#webpage`,
    /* breadcrumb: `${canonicalUrl}#breadcrumb`, */
    primaryImage: `${canonicalUrl}#primary-image`,
  };

  /* const pageImage = entry.data.image
    ? {
        "@type": "ImageObject",
        "@id": ids.primaryImage,
        inLanguage: siteConfig.locale,
        url: entry.data.image.src.src,
        contentUrl: entry.data.image.src.src,
        caption: entry.data.image.alt,
        width: entry.data.image.src.width,
        height: entry.data.image.src.height,
      }
    : undefined; */

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...commonNodes,

      {
        "@type": "WebPage",
        "@id": ids.webpage,
        inLanguage: siteConfig.locale,
        url: canonicalUrl,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { "@id": commonIds.website },
        /* breadcrumb: { "@id": ids.breadcrumb }, */
        /* primaryImageOfPage: pageImage ? { "@id": ids.primaryImage } : { "@id": commonIds.ogImage }, */
        primaryImageOfPage: { "@id": commonIds.ogImage },
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

      /* ...(pageImage ? [pageImage] : []), */
    ],
  };
}

export default { createWebpage };
