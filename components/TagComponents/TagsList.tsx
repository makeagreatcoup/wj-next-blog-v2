import { getTags } from "@/app/api/tag";
import React from "react";
import TagItem from "./TagItem";

const TagsList = async ({ currentSlugs }: { currentSlugs: string[] }) => {
  const { data } = await getTags();
  const tags = data;
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      <TagItem key={"0"} link={`/tags`} name={"All"} active={!currentSlugs} icon="@"/>
      {tags?.map((category: any) => (
        <TagItem
          icon="@"
          key={category.attributes.slug}
          link={`/tags/${category.attributes.slug}`}
          name={category.attributes.name}
          active={
            currentSlugs && currentSlugs.includes(category.attributes.slug)
          }
        />
      ))}
    </div>
  );
};

export default TagsList;
