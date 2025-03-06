import React from 'react'
import Header from './Header'
import Categories from './Categories'
import Landing from './Landing'
import BlogFlex from './BlogFlex'
import SideBanner from './SideBanner'
import SideBanner2 from './SideBanner2'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Marquee from './Marquee'

const HeroPage = () => {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen max-w-[1540px] overflow-x-hidden mx-auto relative'>
      {/* <Marquee/> */}
         
            <Landing/>
            <BlogFlex title="ELECTRONICS"/>
            <SideBanner title="BEAUTY PRODUCTS"/>
            <BlogFlex title="ELECTRONICS"/>
            <SideBanner2 title="BEAUTY PRODUCTS"/>
            <BlogFlex title="ELECTRONICS"/>
            <AboutUs/>
            <Footer/>
    </div>
  )
}

export default HeroPage