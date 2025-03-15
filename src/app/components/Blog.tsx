import Link from 'next/link'
import React from 'react'

const Blog = (props:any) => {
  return (
    <Link href={`/articles/${props.slug || `buy_boat_headphones`}`}>
    <div className='w-[100%]  py-3 border-b-2 border-gray-200'>
        <div className='flex text-sm flex-row gap-2 justify-start items-center'>
            <p className='font-[500]'>
                {props.date}
            </p>
            <p>
                |
            </p>
            <p className='font-[500]'>
                {props.category}
            </p>

           
        </div>
         <h2 className='text-[1.2rem] font-semibold'>
            {props.title}
            </h2>
    </div>
    </Link>
  )
}

export default Blog