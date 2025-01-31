import { defineLive } from "next-sanity/preview";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: "2024-01-01" // Use the correct Sanity API version
  }) 
});
