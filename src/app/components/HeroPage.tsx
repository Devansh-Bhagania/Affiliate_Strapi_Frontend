"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Categories from './Categories'
import BlogFlex from './BlogFlex'
import SideBanner from './SideBanner'

import AboutUs from './AboutUs'
import Footer from './Footer'

import SideBannerA from './SideBanner2'

import Landing from './Landing'
import { useDispatch } from 'react-redux'
import { addCase } from '../../../redux/articleSlice'
import data from '../../../data.json'

const HeroPage = () => {

  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  // Fetch data
  async function fetchdata() {
    setLoading(true)
    setArticles(data.data)
    dispatch(addCase(data.data))
    // try {
    //   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles?populate=*`)
    //   const data = await res.json()
    //   setArticles(data.data)
    //   dispatch(addCase(data.data))
    // } catch (error) {
    //   console.error(error)
    // } finally {
      setLoading(false)
    // }
  }

  useEffect(() => {
    fetchdata()
  }, [])


  return (
    <div className='flex flex-col items-center justify-start min-h-screen max-w-[1540px] overflow-x-hidden mx-auto relative'>
      {/* <Marquee/> */}
      <Header/>
      <Categories/>
            <Landing/>
            <BlogFlex title="ELECTRONICS"/>
            <SideBanner title="BEAUTY"/>
            <BlogFlex title="COMPUTERS"/>
            <BlogFlex title="HOMEDECOR"/>
            <SideBanner title="BEAUTY"/>
            <BlogFlex title="ELECTRONICS"/>
            <AboutUs/>
            <Footer/>
    </div>
  )
}

export default HeroPage