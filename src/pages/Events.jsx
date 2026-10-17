import { Link } from "react-router-dom";
function Events() {
    return (
        
        <div className="min-h-screen bg-[#000000] py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-[#ffffff] md:text-5xl font-bold mb-10 font-roboto-mono text-center">
                    Events
                </h1>

                <div className="bg-transparent rounded-none shadow-none border-0 p-0">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-semibold text-white font-bebas-neue">
                            Pass the Aux
                        </h2>
                        <div className="space-y-2 text-[#838383]">
                            <p>Saturday, November 7th</p>
                            <p>The  Lady</p>
                            <p>191 Ann Uccello St, Hartford, CT 06103</p>
                            <img src="public/passtheaux.jpeg" alt="Pass the Aux" className="w-96 h-auto rounded-lg"/>
                        </div>

                    </div>

                    <div className="mt-8">
                        <a
                            href="https://posh.vip/e/pass-the-aux-19?fbclid=PAVERFWAU_zHRleHRuA2FlbQIxMABwZG9mAmZkaWQWUQdLtLJW_UnO3UUEL5_I17H8EVATc3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3C1IhuRnvbqkuDDgvWvJmJ4isJjru4LTkqwy0aZASLw3D2TllLtElqC_TIw_aem_DrxvGU18BbIgTEa2qOQGnA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#ffffff] hover:bg-[#5f5f5f] text-black font-thin py-2 px-6 rounded"
                        >
                            Get Tickets
                        </a>

                        {/* Make the homepage button at the top left of the screen */}
                        <Link
                            to="/"
                            className="absolute top-4 left-4 bg-[#ffffff] hover:bg-[#5f5f5f] text-black font-thin py-2 px-6 rounded"
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