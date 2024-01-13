import CategoriesList from '@/components/CategoryComponents/CategoriesList';
import TagsList from '@/components/TagComponents/TagsList';
import React from 'react'

const layout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { slug: string[] }
}) => {
  const slugs = params.slug?.length === 0 ? [] : params.slug
  return (
    <>
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">@{!slugs?'All':slugs}</h1>
        <span className="mt-2 inline-block">
          发现更多标签!
        </span>
      </div>
      <TagsList currentSlugs={slugs} />
      {children}

    </article>
    </>
  )
}

export default layout