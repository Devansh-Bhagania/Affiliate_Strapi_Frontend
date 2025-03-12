import React from 'react'
import { Bell, Menu, Search, ShoppingBagIcon } from 'lucide-react'

const Header = () => {
  // State to track mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="lg:w-[80%] w-[100%] mx-auto px-2 lg:px-0">
      <div className="flex w-full items-center justify-between p-4 px-0">
        {/* Left section: Logo + Hamburger (Mobile) */}
        <div className="flex w-full flex-row justify-between items-center gap-2">
          {/* Hamburger Menu Icon (only visible on small screens) */}
          <a href="/" className="">
            <h1 className="md:text-[2rem] text-[1.2rem] font-bold text-gray-800">
              LabelPadhegaIndia
            </h1>
          </a>
          <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
            <Menu size={20} />
          </div>
         
        </div>

        {/* Center section: Search bar (only visible on large screens) */}
        <div className="hidden lg:flex items-center p-3 justify-around gap-2 border-2 border-black px-2">
          <div className="px-2">
            <Search />
          </div>
          <input
            type="text"
            className="text-md w-[270px] outline-none"
            placeholder="Search whats Trending..."
          />
        </div>

        {/* Right section: Icons (Bell + Shopping Bag) */}
        {/* <div className="items-center gap-2 flex lg:hidden">
          <Bell size={20} />
          <ShoppingBagIcon size={20} />
        </div> */}
      </div>

      {/* MOBILE MENU (only visible when isMenuOpen is true and on smaller screens) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 mt-2 bg-white shadow-md p-4 border-t border-gray-300">
          {/* You can replace these links with actual routes/navigation items */}
          <a href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/articles/electronics/buy_boat_headphones" className="text-gray-700 hover:text-gray-900">
            Electronics
          </a>
          <a href="/articles/computers/tuf_gamimg_laptop" className="text-gray-700 hover:text-gray-900">
            Computers
          </a>
          <a href="/articles/homedecor/franc_case" className="text-gray-700 hover:text-gray-900">
            Home Decor
          </a>
          {/* Optionally include a search bar here for mobile */}
          <div className="flex items-center p-2 border-2 border-black gap-2">
            <Search />
            <input
              type="text"
              className="text-md w-full outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
