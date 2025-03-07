import { Bell, Menu, Search, ShoppingBagIcon } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
   <header className='lg:w-[80%] w-[100%] mx-auto px-2 lg:px-0'>
    
        <div className="flex w-full items-center justify-between p-4 px-0"> 
            <div className='flex flex-row items-center gap-2'>
            <div className=' lg:hidden'>
                <Menu size={20} />
            </div>
            <h1 className='md:text-[2rem] text-[1rem] font-bold text-gray-800'>
                LabelPadhegaIndia
            </h1>
            </div>

            <div className=' hidden lg:flex items-center p-3 justify-around gap-2 border-2 border-black px-2'>
                <div className='px-2 '>
                    <Search />
                </div>
                <input type="text" className='text-md  w-[270px] outline-none' placeholder='Search whats Trending...' />
            </div>
            <div className=' items-center gap-2  flex lg:hidden'>
                <Bell size={20} />
                <ShoppingBagIcon size={20} />
            </div>
        </div>
        
   </header>
  )
}

export default Header