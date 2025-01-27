import { motion } from "framer-motion";
import { useState } from "react";

const FAQData = [
  {
    question: "How does your AI actually find influencers?",
    answer:
      "Our AI analyzes millions of creators in seconds to find your perfect matches. No BS filters - we look at content style, audience engagement, and brand fit to find influencers who'll actually move the needle for you.",
  },
  {
    question: "What makes your AI better than manual search?",
    answer:
      "Speed and accuracy. While you're reading this, our AI has already analyzed thousands of influencers' content, engagement rates, and audience data. Try doing that with a spreadsheet.",
  },
  {
    question: "Can I see results in real-time?",
    answer:
      "Every click, view, and conversion - tracked instantly. Our dashboard shows you exactly what's working, who's delivering, and where your money's best spent. No more end-of-campaign surprises.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "You only pay for what works. Our platform lets you set your budget and bid on influencers who match your brand. No wasted spend on creators who don't deliver.",
  },
  {
    question: "Is this only for big brands?",
    answer:
      "Whether you're dropping your first product or running a Fortune 500 brand, we scale with you. From micro-influencers to mega-stars, find the perfect fit for your budget.",
  },
  {
    question: "What kind of stats do I get?",
    answer:
      "Everything that matters. Engagement rates, audience sentiment, ROI metrics - all in real-time. No vanity metrics, just data that helps you make money.",
  },
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Have any questions?</p>
          <h2 className="mb-16 block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 shadow-xl mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
