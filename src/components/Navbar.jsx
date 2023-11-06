import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // create a dynamic template string className and render styles to add padding.
  <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
  >

    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0)
        }}
      >
       {/* Link to the logo in the assets file  */}
        <img
        src={logo}
        alt="logo"
        className="w-13 h-11 object-contain rounded-full" />
        <p className="text-white text-[18px] font-bold cursor-pointer"><span className="sm:block hidden">Michael Okoro | Portfolio</span>

        </p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {/* .map iterates through an array of navLinks stored in the index.js file*/}
        {navLinks.map((Link) => (
          <li
             key={Link.id}
            //  Checks if link is currently "active" by turning it grey when not active and white when active or hovering the text
             className={`${
              active === Link.title
                ?"text-white"
                :"text-secondary"
             }  hover:text-white text-[18px] font-medium cursor-pointer`}
            //  changes the url after clicking the Links on the Navbar
             onClick={() => setActive(Link.title)}
          >
           {/* This creates a href link to the array called navLinks in the constants/index.js path which connects to about, work, and contact on on the navbar*/}
            <a href={`#${Link.id}`}>{Link.title}
            </a>
          </li>
        ))} 
      </ul>
      {/* This div creates a hamburger menu icon when the screen gets smaller which allows us to open and close the menue on smaller screens*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px]
        object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
        />
        {/* Adds a black gradient menu you can toggle throuh when the hamburger menu is clicked on */}
        <div className={`${toggle ? 'hidden': 'flex' } [p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {/* .map iterates through an array of navLinks stored in the index.js file*/}
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                //  Checks if link is currently "active" by turning it grey when not active and white when active or hovering the text
                className={`${
                  active === Link.title
                    ?"text-white"
                    :"text-secondary"
                }  font-poppins font-medium cursor-pointer text-[16px]`}
                //  onClick arrow function that  changes the url after clicking the Links on the Navbar
                onClick={() => {
                  setToggle(!toggle); 
                  setActive(Link.title);
                }}
              >
              {/* This creates a href link to the array called navLinks in the constants/index.js path which connects to about, work, and contact on on the navbar*/}
                <a href={`#${Link.id}`}>{Link.title}
                </a>
              </li>
            ))} 
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar