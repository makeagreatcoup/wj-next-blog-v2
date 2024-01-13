'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NextButton = ({page}:{page:number}) => {
  const router = useRouter()
  return (
    <button 
    className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal" 
    onClick={() => router.push(`?page=${page - 1}`)}>
    </button>
  )
}

export default NextButton