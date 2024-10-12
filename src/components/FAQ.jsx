import { motion } from "framer-motion";
import { useState } from "react";

const FAQData = [
  {
    question: "How does HypeBridge find the perfect influencer for my brand?",
    answer:
      "HypeBridge uses cutting-edge AI to analyze your brand’s style, audience, and goals, matching you with influencers who align seamlessly. No more manual searching—our system sifts through thousands of niche creators to deliver those with the highest engagement potential, ensuring every partnership feels natural and impactful.",
  },
  {
    question: "What makes HypeBridge’s AI-driven matching so powerful?",
    answer:
      "Our AI doesn’t just look at follower count. It analyzes influencer content, engagement patterns, audience demographics, and brand affinity to recommend creators who resonate with your target market. This means more authentic connections, higher engagement rates, and a streamlined process that gets results faster.",
  },
  {
    question: "Can I track campaign performance in real time?",
    answer:
      "Yes! With HypeBridge, you get access to live analytics dashboards that track everything from reach and impressions to engagement rates and ROI. See which influencers are driving the best results and adjust your strategy on the fly to maximize your impact.",
  },
  {
    question: "How does the bidding system benefit my campaign?",
    answer:
      "Our bid-based platform lets you set your budget and bid on the influencers who match your brand best. This ensures you only pay for creators that align perfectly with your goals, helping you control costs while securing top talent that delivers the highest return on investment.",
  },
  {
    question: "Is HypeBridge suitable for small businesses or only large brands?",
    answer:
      "HypeBridge is built for businesses of all sizes! Whether you're a startup looking to work with micro-influencers or an established brand targeting larger creators, our platform scales to fit your needs. With access to influencers across all tiers, you can find the perfect match for your budget and campaign goals.",
  },
  {
    question: "What kind of insights can I expect from the platform?",
    answer:
      "Beyond basic metrics, HypeBridge provides in-depth insights on audience sentiment, influencer effectiveness, and content performance. Our advanced analytics help you understand what’s working, what’s not, and how to optimize your campaigns for maximum impact. Make every decision with confidence, backed by data.",
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
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
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
