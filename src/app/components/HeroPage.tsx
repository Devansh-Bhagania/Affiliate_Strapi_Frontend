
import React from 'react'
import Header from './Header'
import Categories from './Categories'
import BlogFlex from './BlogFlex'
import SideBanner from './SideBanner'

import AboutUs from './AboutUs'
import Footer from './Footer'

import SideBannerA from './SideBanner2'
import Landing from './Landing'

const HeroPage = () => {
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