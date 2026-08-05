import type { Page } from "astro";
import type { CollectionEntry, DataEntryMap } from "astro:content";
import { createWebpage } from "~/lib/schema/webpage";
import { createCollectionPage } from "~/lib/schema/collectionPage";
import { createSearchResultPage } from "~/lib/schema/searchResultsPage";
import { createArticle } from "~/lib/schema/article";

export function createSchema(
  metadata: {
    type: string;
    url: URL;
    title: string;
    description: string;
  },
  entry?: DataEntryMap[keyof DataEntryMap][string],
  page?: Page,
) {
  let schema;
  switch (metadata.type) {
    case "webpage":
      schema = createWebpage(metadata);
      break;
    case "collectionPage":
      schema = createCollectionPage(metadata, page);
      break;
    case "searchResultsPage":
      schema = createSearchResultPage(metadata);
      break;
    case "article":
      schema = createArticle(metadata, entry as CollectionEntry<"posts">);
      break;
    default:
      break;
  }
  return schema;
}

export default { createSchema };
