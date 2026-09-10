import { Link } from "react-router-dom";
function Events() {
    return (
        <div className="min-h-screen bg-[#000000] py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-[#8B0000] md:text-4xl font-bold mb-10 font-anton text-center">
                    Events
                </h1>

                <div className="bg-zinc-700 rounded-lg shadow-lg p-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">
                            Sidekicks & MySpace
                        </h2>

                        <p>Club Vandome // 102 Hamilton St, New Haven, CT 06511</p>
                        <p>Saturday, August 1st, 2026</p>
                        <p>10pm-2am</p>
                    </div>

                    <div className="mt-8">
                        <a
                            href="https://www.eventbrite.com/e/myspace-sidekicks-tickets-1998160291220?aff=ebdsoporgprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-2 px-6 rounded"
                        >
                            Get Tickets
                        </a>

                        {/* Make the homepage button at the top left of the screen */}
                        <Link
                            to="/"
                            className="absolute top-4 left-4 bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-2 px-6 rounded"
                        >
                            Back to Homepage
                        </Link>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;