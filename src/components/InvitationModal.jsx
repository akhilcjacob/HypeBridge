import { AnimatePresence, motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { HypeBridgeLogo } from "../assets/logos/HypeBridgeLogo";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100]"
    >
      <div
        className="w-full h-full bg-bgDarkTransparentDarker backdrop-blur-sm flex justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter backdrop-blur-xl py-12 px-8 sm:px-16 relative sm:mb-8 mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">
              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText">
                Subscribe Now
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-secondaryColor">
                Launch is coming!
              </h2>

              <ul className="mb-6 text-primaryText mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Be in the know</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Exclusive Updates</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Potential Beta Tester</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <HypeBridgeLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  HypeBridge
                </div>
              </div>

              <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                Join the community and get access to exclusive content
              </h3>
              <div className="flex flex-wrap -m-2">
                <div className="w-full sm:w-4/5 p-2 mx-auto">

                </div>
                <form
                  action="https://formspree.io/f/xovqqvra"
                  method="POST"
                  enctype="multipart/form-data"
                  class="w-4/5"
                >
                  <label>
                    <input
                      className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      id="newsletterInput3-1"
                      placeholder="Your email address"
                      type="email"
                      name="email"
                    />
                  </label>
                  <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                    <button
                      className="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                      type="submit"
                      aria-label="Join now"
                    >
                      Join Now
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
