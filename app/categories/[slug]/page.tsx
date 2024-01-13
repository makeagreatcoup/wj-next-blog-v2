import { getBlogs } from "@/app/api/blog";
import BlogsList from "@/components/BlogComponents/BlogsList";
import CategoriesList from "@/components/CategoryComponents/CategoriesList";
import { pageLimit } from "@/utils";

const CategoryBySlug = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: string };
}) => {
  const page = parseInt(searchParams.page) || 1;

  const { data, meta } = await getBlogs({
    start: (page - 1) * Number(pageLimit),
    category: params.slug === "All" ? "" : params.slug,
  });
  const blogs = data;

  return (
    <>
        <BlogsList
          blogs={blogs}
          page={page}
          limit={Number(pageLimit)}
          total={meta.pagination.total}
        />
    </>
  );
};

export default CategoryBySlug;
