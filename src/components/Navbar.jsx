import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HypeBridgeLogo } from "../assets/logos/HypeBridgeLogo";

const navbarLinks = [
  { label: "Features", href: "/#features", ariaLabel: "Features" },
  { label: "FAQ", href: "/#FAQ", ariaLabel: "FAQ" },
  { label: "About", href: "/#footer", ariaLabel: "About" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
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
    <nav className="w-4/5 h-50 p-4 flex flex-col justify-center items-center fixed top-5 left-1/2 transform -translate-x-1/2 z-40 rounded-full bg-bgDarkTransparentLighter backdrop-blur-xl shadow-2xl">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 z-[-1] rounded-full"></div>

      <div className="flex items-center justify-between w-full">
        {/* Center Logo */}
        <motion.div
          className="mr-8"
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
          className="hidden lg:flex grow justify-end items-center pr-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-full pl-12 pb-2 flex items-center">
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
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="ml-8 px-6 py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-bold rounded-lg hover:scale-105 transition"
              aria-label="Get Early Access"
            >
              Get Early Access
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div
          ref={toggleButtonRef}
          className="lg:hidden flex flex-col px-2 py-3 rounded-md cursor-pointer hover:bg-bgDark2"
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
          ref={mobileMenuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden absolute top-full left-0 w-full mt-4 py-4 bg-bgDarkTransparentLighter backdrop-blur-xl rounded-3xl shadow-xl"
        >
          <div className="flex flex-col items-center space-y-4">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                key={label}
                href={href}
                aria-label={ariaLabel}
                className="text-white text-lg font-medium hover:text-primaryColor transition"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsDemoModalOpen(true);
                setIsOpen(false);
              }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-bold rounded-lg hover:scale-105 transition"
              aria-label="Get Early Access"
            >
              Get Early Access
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
