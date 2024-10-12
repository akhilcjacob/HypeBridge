import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HypeBridgeLogo } from "../assets/logos/HypeBridgeLogo";

const navbarLinks = [
  { label: "Home", href: "/#home", ariaLabel: "Home" },
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
  { label: "About", href: "/#footer", ariaLabel: "About" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Ref for the mobile menu
  const toggleButtonRef = useRef(null); // Ref for the toggle button

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the mobile menu and toggle button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Attach the event listener only if the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed z-40">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 bg-bgDarkTransparent backdrop-blur-xl z-[-1]"></div>

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
            <div className="flex justify-center items-center ml-5">
              <div className="text-white mr-2 text-6xl">
                <HypeBridgeLogo />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Right Links (Desktop) */}
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
                className="text-white lg:text-base text-2xl leading-6 ml-4 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
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
          ref={toggleButtonRef}
          className="lg:hidden flex flex-col px-2 py-3  rounded-md cursor-pointer hover:bg-bgDark2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>

      {/* Mobile Navbar with Blur */}
      {isOpen && (
        <motion.div
          ref={mobileMenuRef} // Attach the ref to the mobile menu
          className="lg:hidden w-full bg-bgDark2/80 flex flex-col items-center py-6 space-y-4 absolute top-20 left-0 z-30 backdrop-blur-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navbarLinks.map(({ href, label, ariaLabel }) => (
            <a
              className="text-white text-xl font-medium hover:scale-110 transition"
              href={href}
              aria-label={ariaLabel}
              key={label}
              onClick={() => setIsOpen(false)} // Close the menu on link click
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
