const Careers = () => {
    return (
      <section className="w-full bg-bgDark2 pt-24 pb-24">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Careers at HypeBridge
          </h1>
          <p className="text-xl text-secondaryText mb-10 max-w-2xl mx-auto">
            We’re always looking for talented, driven individuals who share our vision of revolutionizing influencer marketing through innovative technology. While we currently don’t have any open positions, we’d love to hear from you if you think you’d be a great fit.
          </p>
        </div>
  
        {/* No Jobs Section */}
        <div className="container mx-auto px-6 lg:px-16 w-3/4">
          <div className="bg-bgDark1 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h2 className="text-2xl font-semibold text-primaryText mb-4">
              No Open Positions Right Now
            </h2>
            <p className="text-lg text-secondaryText mb-4">
              We don't have any job openings at the moment, but that doesn’t mean you can’t be a part of HypeBridge. If you’re passionate about technology, AI, and influencer marketing, let’s talk!
            </p>
            <p className="text-lg text-secondaryText">
              Send your resume or portfolio to{" "}
              <a
                href="mailto:akhil@thehypebridge.com"
                className="text-primaryText underline hover:text-primary hover:underline transition"
              >
                akhil@thehypebridge.com
              </a>{" "}
              and tell us how you can contribute to our team.
            </p>
          </div>
        </div>
  
        {/* Call to Action Section */}
        <div className="mt-16 bg-primary py-16">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Think You’d Be a Great Fit?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              Even though we don’t have any openings right now, we’re always eager to connect with individuals who are passionate about innovation, technology, and influencer marketing. If you think you'd be a great fit for HypeBridge, reach out to us.
            </p>
            <a
              href="mailto:akhil@thehypebridge.com"
              className="inline-block text-primary bg-bgDark1 px-8 py-4 rounded-full font-semibold text-lg hover:bg-bgDark3 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Careers;
  