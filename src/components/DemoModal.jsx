import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const DemoModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-4/5 lg:w-[1000px] lg:h-[500px] xl:w-[1300px] sm:rounded-2xl bg-bgDarkTransparentLighter shadow-xl py-12 px-20 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col lg:flex-row relative h-full align-middle">
            {/* YouTube video */}
            <div className="w-full lg:w-1/2 lg:inline mb-8 lg:mb-0">
              <iframe
                className="video w-full h-60 lg:h-full items-center justify-center align-bottom rounded-lg"
                title="Youtube player"
                sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                src={`https://youtube.com/embed/i7b40NSj62s?autoplay=0`}
              ></iframe>
            </div>

            {/* Form section */}
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-4 sm:pt-0">
              {/* <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <HypeBridgeLogo />
                </div>
              </div> */}

              <h3 className="mb-7 ml-3 text-2xl text-primaryText font-bold leading-snug text-center">
                Join the community and get access to exclusive content
              </h3>
              <form
                action="https://formspree.io/f/xovqqvra"
                method="POST"
                enctype="multipart/form-data"
                className="w-4/5"
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

            {/* Close button */}
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
