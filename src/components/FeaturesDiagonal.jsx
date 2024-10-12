import { motion } from "framer-motion";
import { useState } from "react";

import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import { InvitationModal } from "./InvitationModal";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col align-middle">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="block-subtitle">Accelerate Your Success</span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title">
              Create &amp; track campaigns
            </h2>
            <p className="mb-16 text-secondaryText leading-loose">
              Our platform enables you to monitor your campaigns with
              ease. Boost productivity and achieve better results. Empower your
              decision-making with advanced analytics
            </p>
            <button
              className="w-[210px] h-12 contained-button mr-10 "
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
          </div>
          <div className="w-4/5 h-4/5 lg:w-1/2  lg:h-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0 align-middle mt-20">
            <img
              src={featuresdiagonal.src}
              alt="Feature image"
              className="rounded-xl  shadow-xl"
            />
          </div>
        </div>
      </motion.div>
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
