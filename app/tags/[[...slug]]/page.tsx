import { getBlogs } from "@/app/api/blog";
import { getProjects } from "@/app/api/project";
import BlogLayoutThree from "@/components/BlogComponents/BlogLayoutThree";
import CategoriesList from "@/components/CategoryComponents/CategoriesList";
import ProjectLayout from "@/components/PorjectComponents/ProjectLayout";
import ProjectsList from "@/components/PorjectComponents/ProjectsList";
import TagsList from "@/components/TagComponents/TagsList";
import { pageLimit } from "@/utils";
import React from "react";

const TagBySlug = async ({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { proPage: string };
}) => {
  const page = parseInt(searchParams.proPage) || 1;

  const slugs = params.slug?.length === 0 ? [] : params.slug;
  const { data, meta } = await getProjects({
    start: (page - 1) * Number(pageLimit),
    tags: slugs?.length === 0 ? [] : slugs,
  });
  const projects = data;
  return (
    <>
      <ProjectsList
        projects={projects}
        page={page}
        limit={Number(pageLimit)}
        total={meta.pagination.total}
      />
    </>
  );
};

export default TagBySlug;
