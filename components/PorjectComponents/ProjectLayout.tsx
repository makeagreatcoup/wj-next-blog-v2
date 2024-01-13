import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { getStrapiMedia } from '@/app/[lang]/utils/api-helpers';

const ProjectLayout = ({project}:{project:any}) => {
  const tags = project.attributes?.tags?.data?.map((tag:any)=>tag.attributes.name)
  const imageUrl = project.attributes?.cover.data;
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={`/projects/${project.attributes?.slug}`} className="h-full rounded-xl overflow-hidden">
        {
          imageUrl && (
            <Image
            src={getStrapiMedia(imageUrl?.attributes?.url)}
            placeholder={imageUrl?.attributes?.formats?'blur':'empty'}
            blurDataURL={getStrapiMedia(imageUrl?.attributes?.formats?.thumbnail?.url)}
            alt={imageUrl?.attributes?.name}
            // fill
            width={imageUrl?.attributes?.width}
            height={0}
            className="  object-center  group-hover:scale-105 transition-all ease duration-300 "
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
          )
        }

      </Link>

      <div className="flex flex-col w-full mt-4">
        {tags.map(((tag:string,index:number)=>
            <span key={index} className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
            {tag}
          </span>
        ))}

        <Link href={`/projects/${project.attributes?.slug}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {project.attributes?.name}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {format(new Date(project.attributes?.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}

export default ProjectLayout