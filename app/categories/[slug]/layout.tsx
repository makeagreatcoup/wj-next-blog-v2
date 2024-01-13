import CategoriesList from '@/components/CategoryComponents/CategoriesList';
import React from 'react'

const layout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { slug: string }
}) => {

  return (
    <>
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          发现更多分类!
        </span>
      </div>
      <CategoriesList currentSlug={params.slug} />
      {children}

      
    </article>
    </>
  )
}

export default layout