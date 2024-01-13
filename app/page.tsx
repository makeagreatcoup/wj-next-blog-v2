import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPosts";
import { getBlogs } from "./api/blog";

export default async function Home() {
  const { data, meta } = await getBlogs({ start: 0 ,limit:7});
  const recentPosts = data?.slice(4, 7);
  return (
    <main className="flex flex-col items-center justify-center">
      {data && (
        <>
          <HomeCoverSection blogs={data} />
          <FeaturedPosts blogs={data} />
          <RecentPosts blogs={recentPosts} />
        </>
      )}
    </main>
  );
}
