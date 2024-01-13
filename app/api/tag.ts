import { fetchAPI } from "../[lang]/utils/fetch-api";

export const getTags = async () => {
  const data = {
    populate: true,
  };
  return await fetchAPI("/tags", data);
};