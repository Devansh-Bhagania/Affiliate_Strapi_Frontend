"use client"
import React, { useEffect, useState } from 'react'
import Product from './Product'
import ProductBox from './ProductBox'

const BlogFlex = (props:any) => {
       const [articles, setArticles] = useState([])
        async function fetchdata() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
            const data = await res.json()
            setArticles(data.data)
            console.log(data)
        }
    
        useEffect(() => {
         fetchdata()
        }, [])
          const num = props.article
  return (
    <div className='md:w-[80%]  px-3 md:px-0  mx-auto   my-10 flex flex-col justify-start'>
        <div className='h-[2px] w-[50px] bg-amber-400'>
            </div>
            <h1 className='text-[1.5rem] font-semibold'>THE {props.title}</h1>
    
  <div className=' mx-auto  flex flex-row justify-center flex-wrap md:flex-nowrap gap-10 grid-cols-1 md:grid-cols-3 '>
           {
                articles &&
                articles?.slice(0,3).map((article:any) => {
                     return (
                          <ProductBox key={article.id} date={article.publishedAt} category={article.category.name} title={article.title} imgurl={article.imgurl}
                          description={article.blocks[0].body} />
                     )
                })
           }
  </div>
  </div>
  )
}

export default BlogFlex