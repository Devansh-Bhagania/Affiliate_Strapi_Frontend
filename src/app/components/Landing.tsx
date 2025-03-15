"use client"
import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import Deals from './Deals'
import Product from './Product'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { fetchArticles } from '../../../redux/articleSlice'
import { useRouter } from 'next/navigation'
import data from '../../../data.json'

/* ======================
   SKELETON COMPONENT
   ====================== */
const SkeletonProduct = () => {
  return (
    <div className="w-[100%] md:min-w-[520px] border flex flex-col gap-3 border-gray-300 rounded-md p-4 animate-pulse">
      {/* Image Placeholder */}
      <div className="w-[100%] h-64 bg-gray-300 rounded" />
      {/* Title Placeholder */}
      <div className="h-6 bg-gray-300 rounded w-3/4" />
      {/* Description Placeholder */}
      <div className="h-4 bg-gray-300 rounded w-full" />
      <div className="h-4 bg-gray-300 rounded w-5/6" />
      <div className="h-4 bg-gray-300 rounded w-2/3" />
    </div>
  )
}

const Landing = () => {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  // Fetch data
  async function fetchdata() {
    setLoading(true)
    setArticles(data.data)
    
    // try {
    //   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
    //   const data = await res.json()
    //   setArticles(data.data)

    // } catch (error) {
    //   console.error(error)
    // } finally {
      setLoading(false)
    // }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  // Filter for the main article
  const mainArticle = articles.find((article) => article.slug === 'home_makeover_days')
const router = useRouter()
  return (
    <div>
      {/* Mobile Hero Banner */}
      <div className="w-[100%] flex md:hidden flex-col -mb-10">
        <Image
          src="https://www.sunshineboulevard.in/cdn/shop/files/Diwali_banner_copy_ab3fc216-58a3-4787-82c3-d734a85fd834_1344x608.jpg?v=1727081281"
          className="w-[100%] object-cover h-[40vh]"
          width={6540}
          height={500}
          alt="hero"
        />
        <div className="w-[300px] text-center mt-5 mx-auto flex flex-col items-center justify-center gap-2">
          <h1>FLAT 20% OFF ON ALL BEAUTY PRODUCTS</h1>
          <button
            onClick={
              () => {
               router.push('https://www.amazon.in/s?k=bed+sheets&crid=2JCL3SAYIAT3M&sprefix=bed+sheets%2Caps%2C258&ref=nb_sb_noss_1')
              }
            }
          className="bg-amber-400 text-white px-5 py-2">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="px-2 md:px-0 flex flex-row justify-between pt-10 grid-cols-2 md:grid-cols-2 lg:w-[80%] mx-auto md:gap-10 gap-5  md:flex-nowrap flex-wrap">

        {/* Left Column: THE LATEST */}
        <div className="min-w-[280px] h-[500px] md:mt-0 mt-10">
          <div className="h-[2px] w-[50px] bg-amber-400"></div>
          <h1 className="text-[1.5rem] font-semibold">THE LATEST</h1>
          <Blog category="Electronics" date="3 March, 2025" title="The Best Samsung Smart TV Deals" />
          <Blog category="Category" date="3 March, 2025" title="Amazon Big Spring Deals Coming this week!" 
            slug="buy_boat_headphones"
          />
          <Blog category="Electronics" date="3 March, 2025" title="Amazon Popular Basics lugggage Now available" />
          <Blog category="Electronics" date="3 March, 2025" title="BestReviews Epic Discounts: Cleaning Essentials" />
          <Blog category="Electronics" date="3 March, 2025" title="BestReviews Epic Discounts: Cleaning Essentials" />
        </div>

        {/* Center Column: Main Article / Product */}
        <div className="grow max-w-[700px] ">
          {loading ? (
            // Skeleton ONLY in the article part
            <SkeletonProduct />
          ) : (
            // Once loaded, filter for home_makeover_days
            articles?.filter((article: any) => article.slug === 'home_makeover_days')
              .map((article: any) => (
                <Product
                  key={article.id}
                  date={article.publishedAt}
                  category={article.category.name}
                  title={article.title}
                  imgurl={article.imgurl}
                  description={article.blocks[0].body}
                  slug={article.slug}
                />
              ))
          )}
        </div>

        {/* Right Column: THE DEALS */}
        <div className="min-w-[300px] h-[500px] mt-10 md:mt-0">
          <div className="h-[2px] w-[50px] bg-amber-400"></div>
          <h1 className="text-[1.5rem] font-semibold">THE DEALS</h1>
          <Deals category="Electronics" date="3 March, 2025" title="The Best Samsung Smart TV Deals" img="1" />
          <Deals category="Electronics" date="3 March, 2025" title="The Best Samsung Smart TV Deals" img="2" />
          <Deals category="Electronics" date="3 March, 2025" title="The Best Samsung Smart TV Deals" img="3" />
        </div>
      </div>
    </div>
  )
}

export default Landing
