import AkhilProfile from '../assets/headshots/akhil-profile.jpg';
import DamiProfile from '../assets/headshots/dami-profile.jpg';

const AboutUs = () => {
    return (
        <section className="w-full bg-bgDark2 pt-24 pb-24">
            {/* Hero Section */}
            <div className="text-center py-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    About Us
                </h1>
                <p className="text-lg lg:text-xl text-secondaryText mb-10">
                    The Minds Behind HypeBridge
                </p>
            </div>

            {/* Founders Section */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 px-8 lg:px-16">
                {/* Akhil's Profile */}
                <div className="bg-bgDark1 p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-center">
                        <img
                            src={AkhilProfile.src}
                            alt="Akhil Profile"
                            className="rounded-full w-40 h-40 mb-6 shadow-md"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-primaryText text-center mb-2">
                        Akhil
                    </h2>
                    <p className="text-center text-gray-400 text-lg mb-6">
                        Co-Founder & Engineer
                    </p>
                    <p className="text-secondaryText leading-relaxed text-left mb-6">
                        Akhil is a skilled engineer with a background in AI and cloud technologies from Microsoft.
                        He is passionate about building scalable tech solutions and has created systems that leverage
                        advanced algorithms and AI to solve complex business problems.
                    </p>
                    {/* Social Links & Email */}

                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.akhilcjacob.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primaryText hover:text-primary transition-all"
                            aria-label="Personal Website"
                        >
                            <svg class="bg-white rounded-xl" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#ffffff' opacity='0' />
                                <g transform="matrix(0.83 0 0 0.83 12 12)" >
                                    <path transform=" translate(-15, -15)" d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 15.393114 5 15.800441 5.1628391 16.265625 5.5957031 C 16.730809 6.0285672 17.212234 6.7266811 17.625 7.6347656 C 17.931695 8.3094955 18.181967 9.1269971 18.398438 10 L 11.601562 10 C 11.818033 9.1269971 12.068305 8.3094955 12.375 7.6347656 C 12.787766 6.7266811 13.269191 6.0285672 13.734375 5.5957031 C 14.199559 5.1628391 14.606886 5 15 5 z M 11.087891 5.7929688 C 10.899683 6.1138664 10.718756 6.447642 10.554688 6.8085938 C 10.127113 7.7492563 9.783958 8.8280519 9.5253906 10 L 6.34375 10 C 7.4232731 8.1311295 9.0834141 6.6430191 11.087891 5.7929688 z M 18.912109 5.7929688 C 20.916586 6.6430191 22.576727 8.1311295 23.65625 10 L 20.474609 10 C 20.216042 8.8280519 19.872887 7.7492563 19.445312 6.8085938 C 19.281244 6.447642 19.100317 6.1138664 18.912109 5.7929688 z M 5.4570312 12 L 9.1855469 12 C 9.0679958 12.960136 9 13.961929 9 15 C 9 16.038071 9.0679958 17.039864 9.1855469 18 L 5.4570312 18 C 5.161063 17.053436 5 16.045845 5 15 C 5 13.954155 5.161063 12.946564 5.4570312 12 z M 11.222656 12 L 18.777344 12 C 18.907769 12.954082 19 13.947466 19 15 C 19 16.052534 18.907769 17.045919 18.777344 18 L 11.222656 18 C 11.092231 17.045919 11 16.052534 11 15 C 11 13.947466 11.092231 12.954082 11.222656 12 z M 20.814453 12 L 24.542969 12 C 24.838937 12.946564 25 13.954155 25 15 C 25 16.045845 24.838937 17.053436 24.542969 18 L 20.814453 18 C 20.932004 17.039864 21 16.038071 21 15 C 21 13.961929 20.932004 12.960136 20.814453 12 z M 6.34375 20 L 9.5253906 20 C 9.783958 21.171948 10.127113 22.250744 10.554688 23.191406 C 10.718756 23.552358 10.899683 23.886134 11.087891 24.207031 C 9.0834141 23.356981 7.4232731 21.868871 6.34375 20 z M 11.601562 20 L 18.398438 20 C 18.181967 20.873003 17.931695 21.690505 17.625 22.365234 C 17.212234 23.273319 16.730809 23.971433 16.265625 24.404297 C 15.800441 24.837161 15.393114 25 15 25 C 14.606886 25 14.199559 24.837161 13.734375 24.404297 C 13.269191 23.971433 12.787766 23.273319 12.375 22.365234 C 12.068305 21.690505 11.818033 20.873003 11.601562 20 z M 20.474609 20 L 23.65625 20 C 22.576727 21.868871 20.916586 23.356981 18.912109 24.207031 C 19.100317 23.886134 19.281244 23.552358 19.445312 23.191406 C 19.872887 22.250744 20.216042 21.171948 20.474609 20 z" stroke-linecap="round" />
                                </g>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/akhilcjacob"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primaryText hover:text-primary transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.485c-.966 0-1.5-.721-1.5-1.515 0-.804.546-1.515 1.527-1.515.983 0 1.5.711 1.5 1.515-.001.794-.518 1.515-1.527 1.515zm13.5 11.485h-3v-5.422c0-1.293-.026-2.955-1.797-2.955-1.798 0-2.073 1.404-2.073 2.855v5.522h-3v-10h2.873v1.367h.041c.399-.757 1.373-1.555 2.83-1.555 3.026 0 3.584 1.991 3.584 4.58v5.608z" />
                            </svg>
                        </a>

                        <a
                            href="mailto:akhil@thehypebridge.com"
                            className="text-primaryText hover:text-primary transition-all"
                            aria-label="Email Akhil"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12.713l-11.714-7.713h23.428l-11.714 7.713zm11.714-8.713h-23.428c-.318 0-.614.074-.883.201l12.597 8.306 12.597-8.306c-.269-.127-.565-.201-.883-.201zm-11.714 9.287l-12-7.916v11.629c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-11.629l-12 7.916z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Dami's Profile */}
                <div className="bg-bgDark1 p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-center">
                        <img
                            src={DamiProfile.src}
                            alt="Dami Profile"
                            className="rounded-full w-40 h-40 mb-6 shadow-md"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-primaryText text-center mb-2">
                        Dami
                    </h2>
                    <p className="text-center text-gray-400 text-lg mb-6">
                        Co-Founder & Engineer
                    </p>
                    <p className="text-secondaryText leading-relaxed text-left mb-6">
                        Dami brings extensive experience from his product management role at Microsoft, where he led teams
                        to build and scale enterprise solutions. His expertise lies in aligning product vision with business
                        goals and creating seamless user experiences that drive growth.
                    </p>
                    {/* Social Links & Email */}
                    <div className="flex justify-center space-x-4">
                    <a
                            href="https://daredammy.github.io/damidare/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primaryText hover:text-primary transition-all"
                            aria-label="Personal Website"
                        >
                            <svg class="bg-white rounded-xl" width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#ffffff' opacity='0' />
                                <g transform="matrix(0.83 0 0 0.83 12 12)" >
                                    <path transform=" translate(-15, -15)" d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 15.393114 5 15.800441 5.1628391 16.265625 5.5957031 C 16.730809 6.0285672 17.212234 6.7266811 17.625 7.6347656 C 17.931695 8.3094955 18.181967 9.1269971 18.398438 10 L 11.601562 10 C 11.818033 9.1269971 12.068305 8.3094955 12.375 7.6347656 C 12.787766 6.7266811 13.269191 6.0285672 13.734375 5.5957031 C 14.199559 5.1628391 14.606886 5 15 5 z M 11.087891 5.7929688 C 10.899683 6.1138664 10.718756 6.447642 10.554688 6.8085938 C 10.127113 7.7492563 9.783958 8.8280519 9.5253906 10 L 6.34375 10 C 7.4232731 8.1311295 9.0834141 6.6430191 11.087891 5.7929688 z M 18.912109 5.7929688 C 20.916586 6.6430191 22.576727 8.1311295 23.65625 10 L 20.474609 10 C 20.216042 8.8280519 19.872887 7.7492563 19.445312 6.8085938 C 19.281244 6.447642 19.100317 6.1138664 18.912109 5.7929688 z M 5.4570312 12 L 9.1855469 12 C 9.0679958 12.960136 9 13.961929 9 15 C 9 16.038071 9.0679958 17.039864 9.1855469 18 L 5.4570312 18 C 5.161063 17.053436 5 16.045845 5 15 C 5 13.954155 5.161063 12.946564 5.4570312 12 z M 11.222656 12 L 18.777344 12 C 18.907769 12.954082 19 13.947466 19 15 C 19 16.052534 18.907769 17.045919 18.777344 18 L 11.222656 18 C 11.092231 17.045919 11 16.052534 11 15 C 11 13.947466 11.092231 12.954082 11.222656 12 z M 20.814453 12 L 24.542969 12 C 24.838937 12.946564 25 13.954155 25 15 C 25 16.045845 24.838937 17.053436 24.542969 18 L 20.814453 18 C 20.932004 17.039864 21 16.038071 21 15 C 21 13.961929 20.932004 12.960136 20.814453 12 z M 6.34375 20 L 9.5253906 20 C 9.783958 21.171948 10.127113 22.250744 10.554688 23.191406 C 10.718756 23.552358 10.899683 23.886134 11.087891 24.207031 C 9.0834141 23.356981 7.4232731 21.868871 6.34375 20 z M 11.601562 20 L 18.398438 20 C 18.181967 20.873003 17.931695 21.690505 17.625 22.365234 C 17.212234 23.273319 16.730809 23.971433 16.265625 24.404297 C 15.800441 24.837161 15.393114 25 15 25 C 14.606886 25 14.199559 24.837161 13.734375 24.404297 C 13.269191 23.971433 12.787766 23.273319 12.375 22.365234 C 12.068305 21.690505 11.818033 20.873003 11.601562 20 z M 20.474609 20 L 23.65625 20 C 22.576727 21.868871 20.916586 23.356981 18.912109 24.207031 C 19.100317 23.886134 19.281244 23.552358 19.445312 23.191406 C 19.872887 22.250744 20.216042 21.171948 20.474609 20 z" stroke-linecap="round" />
                                </g>
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/in/damidare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primaryText hover:text-primary transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.485c-.966 0-1.5-.721-1.5-1.515 0-.804.546-1.515 1.527-1.515.983 0 1.5.711 1.5 1.515-.001.794-.518 1.515-1.527 1.515zm13.5 11.485h-3v-5.422c0-1.293-.026-2.955-1.797-2.955-1.798 0-2.073 1.404-2.073 2.855v5.522h-3v-10h2.873v1.367h.041c.399-.757 1.373-1.555 2.83-1.555 3.026 0 3.584 1.991 3.584 4.58v5.608z" />
                            </svg>
                        </a>

                        <a
                            href="mailto:dami@thehypebridge.com"
                            className="text-primaryText hover:text-primary transition-all"
                            aria-label="Email Dami"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12.713l-11.714-7.713h23.428l-11.714 7.713zm11.714-8.713h-23.428c-.318 0-.614.074-.883.201l12.597 8.306 12.597-8.306c-.269-.127-.565-.201-.883-.201zm-11.714 9.287l-12-7.916v11.629c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-11.629l-12 7.916z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mt-24 bg-primary py-16 text-center text-white">
                <div className="container mx-auto max-w-4xl px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg leading-relaxed">
                    We're on a mission to empower brands to tell their full story through the perfect channels, unhindered and with minimal friction. By connecting businesses with ideal influencers, we're amplifying the voices of social media's hidden gems. Our AI-driven platform isn't just about matchmaking—it's about unleashing the potential of authentic partnerships, allowing even the smallest brands to resonate with their ideal audience through the passionate voices of niche creators.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
