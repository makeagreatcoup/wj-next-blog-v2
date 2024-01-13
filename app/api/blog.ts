import { pageLimit, strapiUrl } from "@/utils";
import { fetchAPI } from "../[lang]/utils/fetch-api";

export const getBlogs = async ({
  start,
  limit,
  category,

}: {
  start: number;
  limit?: number;
  category?: string;
}) => {
  const options:any = {}
  if(category){
    options.filters = {
      category: {
        slug:{
          $eq: `${category}`
        }
      },
    }
  }

  const data = {
    ...options,
    sort: { createdAt: "desc" },
    populate: {
      cover: {
        populate: true,
        fields: ["width","height","name","url", "formats"],
      },
      category: true,
      author: true,

    },
    fields:['title','summary','publishedAt','slug','readingTime'],
    pagination: {
      start: start,
      limit: limit ? limit : pageLimit,
    },
  };
  return await fetchAPI("/blogs", data);
};

export const getBlogOne = async ({
  slug
}: {
  slug:string
}) => {
  const data = {
    filters: {
      slug: {
        $eq: `${slug}`,
      },
    },
    populate: {
      cover: {
        populate: true,
        fields: ["width","height","name","url", "formats"],
      },
      category: true,
      author: true,
    },
  };
  return await fetchAPI("/blogs/", data);
};