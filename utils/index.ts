import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: any[]) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: any[]) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
export const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "zh-CN";
export const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";
export const pageLimit = process.env.NEXT_PUBLIC_PAGE_LIMIT || 6;