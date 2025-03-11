import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductBox = ({ date, category, imgurl, title, description,slug }: any) => {
  // If any key data is missing, you could render a simple skeleton fallback.
  if (!date || !category || !title || !description) {
    return (
      <div className="w-full max-w-sm p-4 border border-gray-200 rounded-md animate-pulse">
        <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-6 w-full mb-2"></div>
        <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
        <div className="bg-gray-300 h-4 w-5/6"></div>
      </div>
    )
  }
const router = useRouter()
  return (
    <div onClick={
      ()=>{
        router.push(`/articles/${category}/${slug}`)
      }
    } className="md:w-1/3 flex cursor-pointer flex-col gap-2 py-3 border-b-2 border-gray-200">
      <div 
       
      className="flex text-sm hover:cursor-pointer flex-row gap-2 justify-start items-center">
        <p className="font-medium">
          {new Date(date).toDateString()}
        </p>
        <p>|</p>
        <p className="font-medium">{category}</p>
      </div>
      <div   className=" hover:cursor-pointer">
        {imgurl ? (
          <Image
            src={imgurl}
            alt={title}
            className="w-full"
            objectFit="contain"
            layout="responsive"
            width={310}
            height={310}
          />
        ) : (
          // Placeholder for missing image
          <div className="bg-gray-300 w-full h-40 rounded mb-4"></div>
        )}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: description.slice(0, 150) }}
        className="text-gray-700 text-sm"
      />
    </div>
  )
}

export default ProductBox
