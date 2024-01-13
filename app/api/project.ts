import { pageLimit } from "@/utils";
import { fetchAPI } from "../[lang]/utils/fetch-api";

export const getProjects = async ({
  start,
  limit,
  tags,
}: {
  start: number;
  limit?: number;
  tags?: string[];
}) => {
  const options: any = {};
  if (tags && tags.length > 0) {
    options.filters = {
      tags: {
        slug: {
          $in: `${tags}`,
        },
      },
    };
  }
  const data = {
    ...options,
    // sort: { createdAt: "desc" },
    populate: {
      cover: {
        populate: true,
        fields: ["width", "height", "name", "url", "formats"],
      },
      tags: {
        populate: true,
      },
    },
    pagination: {
      start: start,
      limit: limit ? limit : pageLimit,
    },
  };

  return await fetchAPI("/projects", data);
};

export const getProjectOne = async ({ slug }: { slug: string }) => {
  const data = {
    filters: {
      slug: {
        $eq: `${slug}`,
      },
    },
    populate: {
      cover: {
        populate: true,
        fields: ["width", "height", "name", "url", "formats"],
      },
      tags: {
        populate: true,
      },
      images:{
        populate: true,
        fields: ["width", "height", "name", "url"],
      }
    },
  };
  return await fetchAPI("/projects", data);
};
