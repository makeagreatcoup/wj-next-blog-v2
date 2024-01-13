import React from 'react'
import CategoryItem from './CategoryItem';
import { getCategories } from '@/app/api/category';

const CategoriesList = async ({  currentSlug }:{ currentSlug:string }) => {
  const {data} = await getCategories();
  const categories = data
    return (
      <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
        <CategoryItem
            key={'0'}
            link={`/categories/All`}
            name={'All'}
            active={currentSlug === ''||currentSlug === 'All'}
          />
        {categories.map((category:any) => (
          <CategoryItem
            key={category.attributes.slug}
            link={`/categories/${category.attributes.slug}`}
            name={category.attributes.name}
            active={currentSlug === category.attributes.slug}
          />
        ))}
      </div>
    );
}

export default CategoriesList