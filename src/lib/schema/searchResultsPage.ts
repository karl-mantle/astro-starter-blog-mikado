import { siteConfig } from "~/site.config";
import { getCommonStructuredData } from "~/lib/schema/common";

export function createSearchResultPage(metadata: {
  type: string;
  url: URL;
  title: string;
  description: string;
}) {
  const { ids: commonIds, nodes: commonNodes } = getCommonStructuredData();
  const canonicalUrl = metadata.url;

  const webpageId = `${canonicalUrl}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...commonNodes,

      {
        "@type": "SearchResultsPage",
        "@id": webpageId,
        inLanguage: siteConfig.locale,
        url: canonicalUrl,
        name: "Search results",
        isPartOf: { "@id": commonIds.website },
        primaryImageOfPage: { "@id": commonIds.ogImage },
        about: { "@id": commonIds.website },
      },
    ],
  };
}

export default { createSearchResultPage };
