import { Link } from "react-router-dom";

function Success() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

            <div className="bg-white shadow-xl rounded-xl max-w-xl w-full p-10 text-center">

                <div className="text-6xl mb-6">
                    ✅
                </div>

                <h1 className="text-4xl font-bold mb-6">
                    Thank You!
                </h1>

                <p className="text-gray-700 text-lg leading-8">
                    Thank you for submitting your application.
                </p>

                <p className="text-gray-700 text-lg leading-8 mt-4">
                    Our team will review your application and contact you if
                    we would like to move forward with the hiring process.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-10 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Back to Homepage
                </Link>

            </div>

        </main>
    );
}

export default Success;