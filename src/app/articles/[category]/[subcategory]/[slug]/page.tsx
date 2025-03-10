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
import React from 'react'

const Page = () => {
    const { category, subcategory ,slug} = useParams()
    console.log(category, subcategory)
  return (
    <>
<Header/>
<Categories/>
{slug}
    <Landing2/>
    <BlogFlex title="ELECTRONICS"/>
    {/* <SideBanner title="BEAUTY PRODUCTS"/> */}
    <BlogFlex title="ELECTRONICS" article={6} />
    <BlogFlex title="LED" article={6} />
    <BlogFlex title="MOBILE PHONES" article={6} />
    {/* <SideBanner2 title="BEAUTY PRODUCTS"/>
    <BlogFlex title="ELECTRONICS"/> */}
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default Page