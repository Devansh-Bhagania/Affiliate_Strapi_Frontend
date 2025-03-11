"use client"
import AboutUs from '@/app/components/AboutUs'
import BlogFlex from '@/app/components/BlogFlex'
import Categories from '@/app/components/Categories'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Landing from '@/app/components/Landing'
import Landing2 from '@/app/components/Landing2'
import SideBanner from '@/app/components/SideBanner'
import SideBanner2 from '@/app/components/SideBanner2'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Page = () => {
    const { category ,slug} = useParams()
    console.log(category,slug)


    const [articles, setArticles] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useDispatch()
    // Fetch data
    async function fetchdata() {
      setLoading(true)
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate[0]=blocks&filters[slug][$eq]=${slug}`)
        const data = await res.json()
        console.log(data)
        setArticles(data.data[0])
        
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    
    
    useEffect(() => {
      fetchdata()
    }, [])
    
    console.log(articles)

  return (
    <>
<Header/>
<Categories/>

    <Landing2 data={slug}/>

    <BlogFlex title="ELECTRONICS"/>
    {/* <SideBanner title="BEAUTY PRODUCTS"/> */}
    <BlogFlex title="ELECTRONICS" article={6} />
    <BlogFlex title="ELECTRONICS" article={6} />
    <BlogFlex title="MOBILE PHONES" article={6} />
    {/* <SideBanner2 title="BEAUTY PRODUCTS"/>
    <BlogFlex title="ELECTRONICS"/> */}
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default Page