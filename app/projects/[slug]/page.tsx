import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import { getProjectOne } from "@/app/api/project";
import MarkdownTocHtml from "@/components/BlogComponents/BlogMarkdownToc";
import MotionImg from "@/components/Elements/MotionImg";
import SwiperImg from "@/components/Elements/MotionImg";
import Tag from "@/components/Elements/Tag";
import ProjectDetails from "@/components/PorjectComponents/ProjectDetails";
import Image from "next/image";

const PorjectBySlug = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getProjectOne({ slug: params.slug });
  if (data.length == 0) {
    return;
  }
  const project = data[0];
  const {
    name,
    description,
    github,
    website,
    publishedAt,
    slug,
    images,
    cover,
    tags,
    body,
  } = project.attributes;
  // const authorName = author.data?.attributes.name;
  const coverUrl = getStrapiMedia(cover.data?.attributes.url);
  const formats = cover?.data?.attributes?.formats;
  const tagsArr = tags.data;
  const imagesArr = images.data;
  const imagesUrl = imagesArr.map((image: any) =>
    getStrapiMedia(image.attributes.url)
  );
  return (
    <>
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {tagsArr?.length > 0 &&
              tagsArr.map((tag: any, index: number) => (
                <Tag
                  icon="@"
                  key={index}
                  name={tag?.attributes.name}
                  link={`/tags/${tag?.attributes.slug}`}
                  className="px-6 text-sm py-2"
                />
              ))}

            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {name}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          {coverUrl && (
            <Image
              src={getStrapiMedia(coverUrl)}
              placeholder={formats ? "blur" : "empty"}
              blurDataURL={getStrapiMedia(formats?.thumbnail?.url)}
              alt={cover.data?.attributes?.name}
              width={cover?.data?.attributes?.width}
              height={cover?.data?.attributes?.height}
              className=" w-full h-full  object-center"
              priority
              sizes="100vw"
            />
          )}
        </div>
        <ProjectDetails
          publishedAt={publishedAt}
          website={website}
          github={github}
        />
        {imagesUrl && <MotionImg urls={imagesUrl} />}
        {body && (
          <article className=" prose max-w-full w-full my-4 px-12 relative">
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: MarkdownTocHtml({ markdown: body }),
              }}
            ></div>
          </article>
        )}
      </article>
    </>
  );
};

export default PorjectBySlug;
