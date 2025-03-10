"use client"
import React, { useEffect, useState } from 'react'
import BannerBox from './BannerBox'
import Deals from './Deals'


const SkeletonBannerBox = () => {
    return (
      <div className="md:w-1/3 flex flex-col gap-2 py-3 border-b-2 border-gray-200 animate-pulse">
        <div className="flex text-sm flex-row gap-2 justify-start items-center">
          <div className="bg-gray-300 h-4 w-24 rounded"></div>
          <div className="bg-gray-300 h-4 w-4 rounded"></div>
          <div className="bg-gray-300 h-4 w-16 rounded"></div>
        </div>
        <div className="bg-gray-300 w-full h-40 rounded mb-4"></div>
        <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
        <div className="bg-gray-300 h-4 w-full rounded"></div>
      </div>
    )
  }

const SideBanner = (props: any) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      setArticles(data.data)
    } catch (err: any) {
      console.error("Error fetching articles:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredArticles = articles.filter((article: any) =>
    article?.category?.name.toLowerCase() === props.title.toLowerCase()
  )

  return (
    <div className="w-[80%] mx-auto my-10 flex flex-col justify-start">
      <div className="h-[2px] w-[50px] bg-amber-400"></div>
      <h1 className="text-[1.5rem] font-semibold">THE {props.title}</h1>

      <div className="mx-auto w-full flex flex-row justify-between gap-10">
        <div className="md:w-full flex flex-row gap-7 justify-between md:flex-no-wrap">
          {loading ? (
            // Render skeletons while loading
            [1, 2, 3].map((n) => <SkeletonBannerBox key={n} />)
          ) : error ? (
            <div className="w-full h-[500px] flex justify-center items-center">
              <p className="text-lg text-red-500">Error: {error}</p>
            </div>
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article: any) => (
              <BannerBox
                key={article.id}
                date={article.publishedAt}
                category={article.category.name}
                title={article.title}
                imgurl={article.imgurl}
                description={article.blocks[0].body}
              />
            ))
          ) : (
            <div className="w-full h-[500px] flex justify-center items-center">
              <p className="text-lg text-gray-500">No articles found.</p>
            </div>
          )}
        </div>

        <div className="w-[50%] h-[500px] mt-10 hidden md:block">
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

export default SideBanner
