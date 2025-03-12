import React from "react";
import Link from "next/link";

const categoriesData = [
    {
      name: "Electronics",
      subcategories: [
        {
          title: "Mobile Devices",
          items: ["Smartphones", "Tablets", "Smartwatches", "E-Readers"],
        },
        {
          title: "TV & Video",
          items: ["Televisions", "Streaming Devices", "Projectors"],
        },
        {
          title: "Audio",
          items: ["Headphones", "Speakers", "Soundbars"],
        },
      ],
    },
    {
      name: "Computers",
      subcategories: [
        {
          title: "Bakeware & Baking Tools",
          items: ["Baking Sheets", "Mixing Bowls", "Measuring Cups", "Pastry Tools"],
        },
        {
          title: "Cookware & Cooking Tools",
          items: [
            "Pots & Pans",
            "Utensils & Gadgets",
            "Cutlery & Knife Accessories",
          ],
        },
        {
          title: "Appliances",
          items: ["Air Fryers", "Toasters", "Blenders & Food Processors"],
        },
      ],
    },
    {
      name: "Home Decor",
      subcategories: [
        {
          title: "Outdoor Tools",
          items: ["Lawnmowers", "Leaf Blowers", "Trimmers"],
        },
        {
          title: "Gardening",
          items: ["Planters", "Gardening Tools", "Fertilizers"],
        },
      ],
    },
    {
      name: "Fashion",
      subcategories: [
        {
          title: "Outdoor Tools",
          items: ["Lawnmowers", "Leaf Blowers", "Trimmers"],
        },
        {
          title: "Gardening",
          items: ["Planters", "Gardening Tools", "Fertilizers"],
        },
      ],
    },
    // ...more categories if needed
  ];
const Categories = () => {
  return (
    <div className="w-full bg-[#040f3d] text-white hidden lg:block">
      {/* Main container for the nav bar */}
      <div className="md:w-[80%] mx-auto flex items-center justify-between p-3 px-5 text-lg font-medium">
        
        {/* Left side: Top-level categories */}
        <div className="flex items-center gap-7">
          {categoriesData.map((category, idx) => (
            <div key={idx} className="relative group">
              {/* Category name (hover over this) */}
              <span className="cursor-pointer hover:text-gray-300">
                {category.name}
              </span>

              {/* Mega menu (hidden by default, shown on hover) */}
              <div className="pt-0 absolute">
              <div
                className="
                  absolute 
                  left-0 
                  top-full 
                  pt-4 
                
                  hidden 
                  group-hover:block 
           
                  text-black 
                  shadow-lg 
                  min-w-[600px] 
                  z-50
                "
              >
                <div className="p-6 grid grid-cols-3 gap-6        bg-white ">
                  {/* Map each subcategory to a column */}
                  {category.subcategories.map((subcat, subIdx) => (
                    <div key={subIdx}>
                      {/* <h3 className="font-semibold mb-2">{subcat.title}</h3> */}
                      <ul className="space-y-2 mt-3">
                        {subcat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            {/* Example Next.js Link to a dynamic route */}
                            <Link
                              href={`/articles/computers/tuf_gamimg_laptop`}
                            >
                              <span className="cursor-pointer font-normal text-md hover:text-blue-600">
                                {item}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Deals, Trending, Gifts */}
        <div className="flex items-center text-amber-400 gap-7">
          <div className="cursor-pointer hover:text-amber-300">Deals</div>
          <div className="cursor-pointer hover:text-amber-300">Trending</div>
          <div className="cursor-pointer hover:text-amber-300">Gifts</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
