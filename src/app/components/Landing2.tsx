"use client"
import React, { useEffect, useState } from 'react'

import Deals from './Deals'

import Image from 'next/image'
import ProductArticle from './ProductArticle'
import { useSelector } from 'react-redux'

const Landing2 = (props) => {
    const [articles, setArticles] = useState([])
    async function fetchdata() {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
        const data = await res.json()
        // setArticles(data.data)
        console.log(data)
    }

    const reduxarticle = useSelector((state:any) => state.articles.data)

    useEffect(() => {
        if (reduxarticle.length > 0) {
            setArticles(reduxarticle.filter((article) => article.slug === props.data))
        }
    }, [reduxarticle])




   

  return (
    <div>
       
       <div className=' w-[100%] flex md:hidden flex-col -mb-10'>
            <Image src='https://www.sunshineboulevard.in/cdn/shop/files/Diwali_banner_copy_ab3fc216-58a3-4787-82c3-d734a85fd834_1344x608.jpg?v=1727081281' className='w-[100%]  object-cover  h-[40vh]' width={6540} height={500}
              alt='hero'
            />
                 <div className='w-[300px] text-center mt-5 mx-auto flex flex-col items-center justify-center gap-2'>
             <h1>
                    FLAT 20% OFF ON ALL BEAUTY PRODUCTS
                </h1>
                <button className='
                bg-amber-400
                text-white
                px-5
                py-2
                '>
                    SHOP NOW
                </button>
            
                </div>
            </div>
           
        
    <div className='px-2 md:px-0 flex flex-row justify-between pt-10 grid-cols-2 md:grid-cols-2  lg:w-[80%] mx-auto md:gap-10 gap-5 md:flex-nowrap flex-wrap'>

  
        {/* <div className='min-w-[300px] h-[500px] md:mt-0 mt-10 '>
            <div className='h-[2px] w-[50px] bg-amber-400'>
            </div>
            <h1 className='text-[1.5rem] font-semibold'>THE LATEST</h1>
            <Blog category='Electronics' date='3 March, 2025' title='The Best Samsung Smart TV Deals'/>
            <Blog category='Category' date='3 March, 2025' title='Amazon Big Spring Deals Coming this week!'/>
            <Blog category='Electronics' date='3 March, 2025' title='Amazon Popular Basics lugggage Now available'/>
            <Blog category='Electronics' date='3 March, 2025' title='BestReviews Epic Discounts: Cleaning Essentials'/>
            <Blog category='Electronics' date='3 March, 2025' title='BestReviews Epic Discounts: Cleaning Essentials'/>
        </div> */}
        <div className='grow max-w-[700px]  '>
           {/* { articles &&
                articles?.slice(0,1).map((article:any) => {
                     return (
                          <ProductArticle key={article.id} date={article.publishedAt} category={article.category.name} title={article.title} imgurl={article.imgurl}
                          description={article.blocks[0].body} />
                     )
                })
           } */}
            {
                articles &&
                articles?.map((article: any) => {
                    return (
                        <ProductArticle key={article.id} date={article.publishedAt} category={article.category.name} title={article.title} imgurl={article.imgurl}
                            description={article.blocks[0].body} />
                    )
                })
            }
        </div>

        <div className='min-w-[300px] h-[500px] mt-10 md:mt-0'>
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

export default Landing2