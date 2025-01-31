import { createClient } from "next-sanity";
import slugify from "slugify"; // Ensure this is installed

const client = createClient({
  projectId: "ycebhpvs",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token:"skGtc8hreKC6GOCsJLCqYxHtvnbHO2nKP7E7fh3dcL9AudD4W3RlimybwlID8VrjT2HIerR0zuuH3cEw3srmA3C0ZzKaawfoM51tAQ0OiodZJdKHd4cQl5ZzDW8RyRdXwsm1HE6s69c44YbXjKSn5Zcaw8FmpHOSTnqEgsPOSGwl27hCwUNw",

// Use an environment variable instead!
});

async function importData() {
  try {
    const doc = {
      _type: "post",
      title: "Example Post",
      slug: { current: slugify("Example Post") },
    };

    await client.create(doc);
    console.log("✅ Data imported successfully!");
  } catch (error) {
    console.error("❌ Import failed:", error);
  }
}

importData();
