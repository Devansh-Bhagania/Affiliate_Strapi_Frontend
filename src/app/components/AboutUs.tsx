import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-col bg-[#040f3d] text-white  items-center justify-start min-h-screen overflow-x-hidden'>
            <div className='lg:w-[80%] mx-auto flex flex-col items-center justify-center p-10 gap-10'>
                    <h1 className='text-[2rem] font-[500]'>
                    What is Botanic Reviews?
                    </h1>
                    <p className='lg:text-[1.8rem] lg:w-[50%]  text-center'>
                    Our team of <span className='text-amber-300'>experts</span> and <span className='text-amber-300'>testers</span> review and recommend the best products so you can easily find the right ones for your needs and budget.
                    </p>

                    <div>
                        <Image src='https://cdn19.bestreviews.com/images/v4/our-mission/who-is-br-image.png?p=w950' width={800} height={500} alt='hero'/>
                    </div>

                    <p className='lg:text-[1.5rem] text-xl lg:w-[80%] mt-10  text-center'>
                    At Botanic Reviews we do our own <span className='text-amber-300'>testing</span>. Each product that comes through our Testing Lab receives a hands-on evaluation by one of our skilled testers.
                    </p>


                    <div className='flex flex-row flex-wrap lg:flex-nowrap mx-auto justify-between items-center gap-20'>
                            <div className='lg:w-1/3 flex flex-col items-center gap-4'>
                                <div className='rounded-full bg-[#151f4a] p-6 w-fit'>
                                    <Image src='https://cdn30.bestreviews.com/images/v4/our-mission/team.png' width={80} height={100} alt='hero'/>
                                </div>
                                
                                <p className='w-fit flex-wrap text-center'>
                                We are the ultimate product review site with over 40,000 reviews across 27 categories and 435 subcategories, ranging from electronics to home to lawn & garden to camping & outdoors and everything in between.
                                </p>
                            </div>

                            <div className='lg:w-1/3 flex flex-col items-center gap-4'>
                                <div className='rounded-full bg-[#151f4a] p-6 w-fit'>
                                    <Image src='https://cdn30.bestreviews.com/images/v4/our-mission/test.png' width={80} height={100} alt='hero'/>
                                </div>
                                
                                <p className='w-fit flex-wrap text-center'>
                                We are the ultimate product review site with over 40,000 reviews across 27 categories and 435 subcategories, ranging from electronics to home to lawn & garden to camping & outdoors and everything in between.
                                </p>
                            </div>

                            <div className='lg:w-1/3 flex flex-col items-center gap-4'>
                                <div className='rounded-full bg-[#151f4a] p-6 w-fit'>
                                    <Image src='https://cdn20.bestreviews.com/images/v4/our-mission/process.png' width={80} height={100} alt='hero'/>
                                </div>
                                
                                <p className='w-fit flex-wrap text-center'>
                                We are the ultimate product review site with over 40,000 reviews across 27 categories and 435 subcategories, ranging from electronics to home to lawn & garden to camping & outdoors and everything in between.
                                </p>
                            </div>
                    </div>
                    <h1 className='text-[1.8rem] font-[500] mt-10'>
                  Reviews you can trust
                    </h1>
                    <p className=' flex-wrap max-w-[600px] text-center'>
                                We are the ultimate product review site with over <span className='text-amber-300 font-bold'>40,000</span> reviews across 27 categories and 435 subcategories, ranging from electronics to home to lawn & garden to camping & outdoors and everything in between.
                                </p>
            </div>
    </div>
  )
}

export default AboutUs