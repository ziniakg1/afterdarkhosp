import { Link } from "react-router-dom";

function Careers() {
    const jobs = [
        {
            id: 1,
            title: "DJ",
            location: "CT/NY Area",
            type: "Part-Time",
            description:
                "We are looking for a DJ to join our team. Showcase your skills and bring the best music experience to our events."
        },
        {
            id: 2,
            title: "Videographers & Photographers",
            location: "CT/NY Area",
            type: "Part-Time",
            description:
                "Capture and edit video/photo content for our events and marketing materials."
        },
        {
            id: 3,
            title: "Content Creators",
            location: "CT/NY Area",
            type: "Part-Time",
            description:
                "Showcase our events and brand through engaging content creation for social media and marketing campaigns."
        },
        {
            id: 4,
            title: "Event Check-In Staff",
            location: "CT/NY Area",
            type: "Part-Time",
            description: 
                "Welcome guests, verify tickets, check IDs, issuewristbands, assist with guest questions, and ensure a smooth, professional check-in experience at AfterDark events"
        },
        {
            id: 5,
            title: "Promoter",
            location: "CT/NY Area",
            type: "Part-Time",
            description:
                "Promote our events and brand through social media, networking, and other marketing channels"
        },
    ];

    return (
        <main className="min-h-screen bg-[#000000] py-16 px-6 md:px-10">

            <Link
                to="/"
                className="absolute top-4 left-4 bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-2 px-6 rounded"
            >
                Back to Homepage
            </Link>
            
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-14">
                    <h1 className="text-5xl font-bold mb-4">
                        Careers
                    </h1>

                    <p className="text-lg text-gray-600">
                        Join our team!
                    </p>
                </div>

                <div className="space-y-8">
                    {jobs.map((job) => (
                        <section
                            key={job.id}
                            className="bg-white rounded-xl shadow-lg p-8 border"
                        >
                            <h2 className="text-3xl font-bold">
                                {job.title}
                            </h2>

                            <div className="flex gap-6 mt-3 text-gray-600">
                                <p>{job.location}</p>
                                <p>{job.type}</p>
                            </div>

                            <p className="mt-6 leading-7 text-gray-700">
                                {job.description}
                            </p>

                            <Link
                                to={`/apply/${job.id}`}
                                state={{ job }}
                                className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                            >
                                Apply Now
                            </Link>
                        </section>
                    ))}
                </div>

            </div>
        </main>
    );
}

export default Careers;