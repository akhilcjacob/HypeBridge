import { motion } from "framer-motion";
import { useState } from "react";

import { HypeBridgeLogo } from "../assets/logos/HypeBridgeLogo";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "Pricing", href: "/#pricing", ariaLabel: "Pricing" },
  { label: "Feedback", href: "/#feedback", ariaLabel: "Feedback" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex items-center relative">

        {/* Center Logo */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/#home" aria-label="Home">
            <div className="flex justify-center items-center">
              <div className="text-white mr-2 text-6xl">
                <HypeBridgeLogo />
              </div>
            </div>
          </a>
        </motion.div>


        {/* Right Links */}
        <motion.div
          className="hidden lg:flex grow justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-full pl-12 pb-2 flex">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white lg:text-base text-2xl leading-6  ml-4 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>
      {/* Mobile navbar */}
    </nav>
  );
};
