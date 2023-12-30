import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2021-10-21",
  dataset: "production",
  projectId: "lqvu19sc",
  useCdn: false,
});
