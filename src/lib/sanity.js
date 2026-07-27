import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production';
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION || '2024-01-01';

export const getSanityClient = () => {
  if (!projectId || !dataset) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
  });
};

export const getSanityImageUrlBuilder = (client) => imageUrlBuilder(client);
