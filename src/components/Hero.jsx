import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
    const [showHiring, setShowHiring] = useState(false);

    return (
        <section className="min-h-screen bg-[#000000] flex items-center justify-center px-6 py-8">
            <div className="text-center max-w-2xl fade-in flex flex-col items-center gap-2">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="hero-logo w-96 sm:w-[28rem] md:w-[36rem] lg:w-[44rem]"
                />

                <h1 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-semibold fade-in">
                    Creating unforgettable nightlife experiences
                </h1>

                <Link
                    to="/Events"
                    className="mt-8 inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-3 px-6 text-lg rounded"
                >
                    View Events
                </Link>

                <Link
                    to="/About"
                    className="mt-8 inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-3 px-6 text-lg rounded"
                >
                    About AfterDark
                </Link>

                <Link
                    to="/Careers"
                    className="mt-8 inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-3 px-6 text-lg rounded"
                >
                    Careers
                </Link>

                <div className="mt-4 flex items-center justify-center gap-3">
                    <button
                        onClick={() => setShowHiring(true)}
                        className="bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-3 px-6 text-lg rounded"
                    >
                        Join the Team
                    </button>

                    <a
                        href="https://www.instagram.com/afterdarkhosp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-3 px-6 text-lg rounded-full transition duration-300"
                    >
                        Instagram
                    </a>
                </div>
            </div>

            {showHiring && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
                        <h1 className="text-3xl font-bold mb-3">
                            JOIN THE AFTERDARK TEAM!
                        </h1>

                        <h2 className="text-xl font-semibold mb-4">
                            We're building the next generation of nightlife.
                        </h2>

                        <p className="text-lg mb-4">
                            AfterDark is expanding, and we're looking for passionate creatives who want to help redefine the party experience.
                        </p>

                        <h3 className="text-lg font-bold mb-2">
                            Now hiring:
                        </h3>

                        <ul className="list-disc list-inside text-left mx-auto mb-6">
                            <li>DJs</li>
                            <li>Videographers</li>
                            <li>Cameramen &amp; Content Creators</li>
                            <li>Event Promoters</li>
                        </ul>

                        <p className="text-lg mb-4">
                            Whether you're behind the decks, behind the camera,
                            or bringing the crowd, we want to work with people
                            who bring energy, creativity, and ambition.
                        </p>

                        <h3 className="text-lg font-bold mb-2">
                            Why join AfterDark?
                        </h3>

                        <ul className="list-disc list-inside text-left mx-auto mb-6">
                            <li>Paid opportunities</li>
                            <li>Build your portfolio &amp; network</li>
                            <li>Exclusive event access</li>
                            <li>Be part of one of NYC &amp; CT's fastest-growing nightlife brands</li>
                        </ul>

                        <p className="text-lg mb-6">
                            Think you've got what it takes?
                            <br />
                            Apply now and become part of the movement.
                        </p>

                        <button
                            onClick={() => setShowHiring(false)}
                            className="bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Hero;

