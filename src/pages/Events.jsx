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
                            All Roads Leads To The Homecoming
                        </h2>
                        <div className="space-y-2 text-[#838383]">
                            <p>Friday, November 27th</p>
                            <p>Club Vandome</p>
                            <p>102 Hamilton St, New Haven, CT 06103</p>
                            <img src="/homecoming.jpeg" alt="Homecoming" className="w-96 h-auto rounded-lg"/>
                        </div>

                    </div>

                    <div className="mt-8">
                        <a
                            href="https://posh.vip/e/the-homecoming-5?fbclid=PAVERFWAVqAYxleHRuA2FlbQIxMABwZG9mAmZkaWQWUScM-AOUC5HucPQRDI_EQszUBFHrvHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp_-gWxJ0KzYWj3jMS6jifquYaZhkcnCBoAIxBcC2pKpZwCivTfY_fJrrQVnp_aem_g-_DdXcTMNf12jmJNw8_sg"
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