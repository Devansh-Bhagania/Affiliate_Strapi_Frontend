"use client"
import React, { useEffect, useState } from 'react'
import Product from './Product'
import ProductBox from './ProductBox'
import BannerBox from './BannerBox'
import Deals from './Deals'

const SideBanner = (props:any) => {
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
  return (
    <div className='w-[80%] mx-auto  my-10 flex flex-col justify-start'>
        <div className='h-[2px] w-[50px] bg-amber-400'>
            </div>
            <h1 className='text-[1.5rem] font-semibold'>THE {props.title}</h1>
    
  <div className=' mx-auto  flex flex-row justify-between gap-10'>
           {
                articles &&
                articles?.slice(0,1).map((article:any) => {
                     return (
                          <BannerBox key={article.id} date={article.publishedAt} category={article.category.name} title={article.title} imgurl={article.imgurl}
                          description={article.blocks[0].body} />
                     )
                })
           }
           
        <div className='w-[300px] h-[500px] mt-10 hidden md:block'>
            <div className='h-[2px] w-[50px] bg-amber-400'>
            </div>
            <h1 className='text-[1.5rem] font-semibold'>THE DEALS</h1>
            <Deals category='Electronics' date='3 March, 2025' title='The Best Samsung Smart TV Deals' img='1'/>
            <Deals category='Electronics' date='3 March, 2025' title='The Best Samsung Smart TV Deals' img='2'/>
            <Deals category='Electronics' date='3 March, 2025' title='The Best Samsung Smart TV Deals' img='3'/>
      
        </div>
  </div>
  </div>
  )
}

export default SideBanner