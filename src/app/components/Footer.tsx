import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#040f3d] text-white w-full'>
        <footer className='lg:w-[80%] mx-auto  flex flex-row flex-wrap items-start justify-between px-5  lg:p-10'>
                    <div className='lg:w-[30%] min-w-[310px] flex flex-col gap-5'>
                          <h1 className='text-[2rem] font-semibold'>
                                LabelPadhegaIndia
                            </h1>
                        <div>
                            
                            <p>
                                LabelPadhegaIndia is a product review site that reviews and recommends the best products so you can easily find the right ones for your needs and budget.
                            </p>
                        </div>
                        <div>
                            <p>
                                Get exclusive deals and the latest news from LabelPadhegaIndia
                            </p>
                          
                                <form action="">
                                <div className='py-5 flex flex-row gap-5 flex-wrap'>
                                <input type='email' placeholder='Enter your email address' className='w-[80%] bg-white text-black px-3 py-2 outline-none'/>
                                <button type='submit' className='bg-amber-400 text-green-900 font-bold px-3 py-2'>
                                    Subscribe
                                </button>
                                </div>
                                </form>
                    
                        </div>
                    </div>

                    <div className='flex flex-row flex-wrap lg:justify-end gap-15 items-start lg:w-[70%]'>
                            <div className='flex flex-col gap-5'>
                                    <h2 className='text-[1.2rem] font-semibold'>
                                        Categories
                                    </h2>

                                    <div className='flex flex-col gap-2 cursor-pointer'>
                                        <p>
                                            Electronics
                                        </p>
                                        <p>
                                            Kitchen
                                        </p>
                                        <p>
                                            Lawn & garden
                                        </p>
                                        <p>
                                            Home
                                         </p>
                                        <p>
                                            Computer
                                        </p>       
                                    </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                    <h2 className='text-[1.2rem] font-semibold'>
                                        Links
                                    </h2>

                                    <div className='flex flex-col gap-2 cursor-pointer'>
                                        <p>
                                        FAQ
                                        </p>
                                        <p>
                                        About
                                        </p>
                                        <p>
                                        Contact
                                        </p>
                                        <p>
                                        Privacy Policy
                                         </p>
                                        <p>
                                        Terms of Service
                                        </p>       
                                    </div>
                            </div>


                            
                    </div>
                    
        </footer>
        <div className='w-[75%] py-5 mx-auto flex flex-col justify-between items-center gap-10'>
                          <h1 className='lg:text-[2rem] text-xl font-semibold'>
                          LABELPADHEGAINDIA
                          </h1>
                          <div className='flex flex-row gap-10 justify-center items-center'>
                            <div>
                            <img width="17" height="14" alt="Facebook Icon" data-src="//cdn.bestreviews.com/images/v4/social/facebook.svg" className="footer-social lazy lazy-loaded lazy-loaded" src="//cdn.bestreviews.com/images/v4/social/facebook.svg"></img>
                            </div>
                            <div>
                        
            <img width="30" height="14" alt="Twitter Icon" data-src="//cdn.bestreviews.com/images/v4/social/twitter.svg" className="footer-social lazy lazy-loaded lazy-loaded" src="//cdn.bestreviews.com/images/v4/social/twitter.svg">
                </img>
        
                            </div>

                            <div>
                            <img width="30" height="14" alt="Instagram Icon" data-src="//cdn.bestreviews.com/images/v4/social/instagram.svg" className="footer-social lazy lazy-loaded lazy-loaded" src="//cdn.bestreviews.com/images/v4/social/instagram.svg"></img>
                            </div>

                            <div>
                            <img width="30" height="14" alt="Linkedin Icon" data-src="//cdn.bestreviews.com/images/v4/social/linkedin.svg" className="footer-social lazy lazy-loaded lazy-loaded" src="//cdn.bestreviews.com/images/v4/social/linkedin.svg"></img>
                            </div>

                            <div>
                            <img width="30" height="14" alt="Pinterest Icon" data-src="//cdn.bestreviews.com/images/v4/social/pinterest.svg" className="footer-social lazy lazy-loaded lazy-loaded" src="//cdn.bestreviews.com/images/v4/social/pinterest.svg"></img>
                            </div>
                          </div>
                    </div>
    </div>
  )
}

export default Footer