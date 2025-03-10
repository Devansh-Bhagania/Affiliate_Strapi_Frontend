"use client"
import React, { useEffect, useState } from 'react'


import Deals from './Deals'
import BannerBox from './BannerBox'

const SideBannerA = (props:any) => {
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
    <div className='md:w-[70%] flex flex-row gap-7 justify-between flex-wrap md:flex-no-wrap'>
           {
                articles ?
                articles?.filter(
                    (article:any) => article?.category?.name.toLowerCase() === props.title.toLowerCase()
                ).map((article:any) => {
                     return (
                          <BannerBox key={article.id} date={article.publishedAt} category={article?.category?.name} title={article.title} imgurl={article.imgurl}
                          description={article.blocks[0].body} />
                     )
                })
                :
                <div className='w-[100%] h-[500px] flex justify-center items-center'>
                <h1>
                    Loading...
                </h1>
                </div>
           }
        </div>   
        <div className='md:w-[300px] h-[500px] mt-10 md:block hidden'>
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

export default SideBannerA