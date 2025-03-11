"use client"
import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox'
import { useSelector } from 'react-redux'

// Skeleton card component for loading state
const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-md p-4 animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  )
}

const BlogFlex = (props: any) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const reduxarticles = useSelector((state: any) => state.articles.data)

  useEffect(() => {
    if (reduxarticles.length > 0) {
      setArticles(reduxarticles)
      setLoading(false)
    }
  }, [reduxarticles])
 


  const filteredArticles = reduxarticles?.filter((article: any) =>
    article?.category?.name.toLowerCase() === props.title.toLowerCase()
  )

  return (
    <div className="md:w-[80%] px-3 md:px-0 mx-auto my-10 flex flex-col justify-start">
      <div className="h-[2px] w-[50px] bg-amber-400 mb-4"></div>
      <h1 className="text-2xl font-semibold mb-6">THE {props.title}</h1>

      {loading ? (
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-10 grid-cols-1 md:grid-cols-3">
          {/* Render three skeleton card boxes */}
          {[1, 2, 3].map((n) => (
            <SkeletonCard key={n} />
          ))}
        </div>
      ) : error ? (
        <div className="w-full h-64 flex justify-center items-center">
          <p className="text-lg text-red-500">Error: {error}</p>
        </div>
      ) : filteredArticles.length > 0 ? (
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-10 grid-cols-1 md:grid-cols-3">
          {filteredArticles?.map((article: any) => (
            <ProductBox
              key={article.id}
              date={article.publishedAt}
              category={article?.category?.name}
              title={article.title}
              imgurl={article.imgurl}
              description={article.blocks[0].body}
              slug={article.slug}
    
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-64 flex justify-center items-center">
          <p className="text-lg text-gray-500">No articles found.</p>
        </div>
      )}
    </div>
  )
}

export default BlogFlex
