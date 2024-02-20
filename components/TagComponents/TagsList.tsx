import { getTags } from "@/app/api/tag";
import React from "react";
import TagItem from "./TagItem";

const TagsList = async ({ currentSlugs }: { currentSlugs: string[] }) => {
  const { data } = await getTags();
  const tags = data;
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      <TagItem key={"0"} link={`/tags`} name={"All"} active={!currentSlugs} icon="@"/>
      {tags?.map((tag: any) => (
        <TagItem
          icon="@"
          key={tag.attributes.slug}
          link={`/tags/${tag.attributes.slug}`}
          name={tag.attributes.name}
          number={tag.attributes.projects.data.length}
          active={
            currentSlugs && currentSlugs.includes(tag.attributes.slug)
          }
        />
      ))}
    </div>
  );
};

export default TagsList;
