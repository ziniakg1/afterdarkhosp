function Photos () {
    return (
        <div className="min-h-screen bg-[#000000] py-16 px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-semibold text-white text-center mb-8">Photo Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img src="public/pic1.jpeg" alt="Photo 1" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic2.jpeg" alt="Photo 2" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic3.jpeg" alt="Photo 3" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic4.jpeg" alt="Photo 4" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic5.jpeg" alt="Photo 5" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic6.jpeg" alt="Photo 6" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic7.jpeg" alt="Photo 7" className="w-full h-auto object-cover rounded-lg" />
                    <img src="public/pic8.jpeg" alt="Photo 8" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Photos;


