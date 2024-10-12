import { motion } from "framer-motion";

import { DepartureRisk } from "../assets/logos/DepartureRisk";
import { NooklyLogo } from "../assets/logos/NooklyLogo";
import { SaltedShores } from "../assets/logos/SaltedShores";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full  lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
                Trusted by brands
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
                all over the world
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4">

            <div className="w-1/2 sm:w-1/3 py-6 flex flex-col justify-center items-center hover:shadow-2xl">
                <NooklyLogo />
                <span className="mt-2 text-lg font-bold text-[rgb(174,178,183)]">
                  Nookly
                </span>
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex flex-col justify-center items-center hover:shadow-2xl">
                <DepartureRisk />
                <span className="mt-2 text-lg font-bold text-[rgb(174,178,183)]">
                  Departure Risk
                </span>
              </div>
              <div className="w-1/2 sm:w-1/3 py-6 flex flex-col justify-center items-center hover:shadow-2xl">
                <SaltedShores />
                <span className="mt-2 text-lg font-bold text-[rgb(174,178,183)]">
                  Salted Shores Co.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
