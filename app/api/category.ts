import { fetchAPI } from "../[lang]/utils/fetch-api";

export const getCategories = async () => {
  const data = {
    populate: true,
  };
  return await fetchAPI("/categories/", data);
};