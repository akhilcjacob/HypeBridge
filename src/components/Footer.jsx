import { HypeBridgeLogo } from "../assets/logos/HypeBridgeLogo";

const footerData = [

  {
    title: "Important Links",
    items: [
      {
        title: "Terms & Conditions", href: "/privacy_policy.html"
      },
      {
        title: "Privacy Policy", href: "/terms_of_service.html"
      },
    ],
  },
  {
    title: "Company",
    items: [
      
      {
        title: "About Us", href: "/about-us"
      },
      {
        title: "Careers", href: "/careers"
      },
    ]
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer"
      id="footer"
    >
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <HypeBridgeLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  HypeBridge
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16  lg:flex flex-wrap justify-between ">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  Important Links
                </h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item.title}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.title}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Company</h3>
                <ul>
                  {footerData[1].items.map((item, index) => (
                      <li key={`${item.title}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.title}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
