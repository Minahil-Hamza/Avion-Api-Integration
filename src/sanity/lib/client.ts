import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'ycebhpvs',
  dataset:'production',
  apiVersion:'skGtc8hreKC6GOCsJLCqYxHtvnbHO2nKP7E7fh3dcL9AudD4W3RlimybwlID8VrjT2HIerR0zuuH3cEw3srmA3C0ZzKaawfoM51tAQ0OiodZJdKHd4cQl5ZzDW8RyRdXwsm1HE6s69c44YbXjKSn5Zcaw8FmpHOSTnqEgsPOSGwl27hCwUNw',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})