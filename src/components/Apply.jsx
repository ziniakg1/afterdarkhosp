import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Apply() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const job = state?.job;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null
    });

    if (!job) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        Job Not Found
                    </h1>

                    <p className="text-gray-600">
                        Please return to the Careers page and select a job.
                    </p>
                </div>
            </main>
        );
    }

    function handleChange(e) {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();

        data.append("jobTitle", job.title);
        data.append("firstName", formData.firstName);
        data.append("lastName", formData.lastName);
        data.append("email", formData.email);
        data.append("phone", formData.phone);

        if (formData.resume) {
            data.append("resume", formData.resume);
        }

        try {
            const response = await fetch("http://localhost:5000/api/apply", {
                method: "POST",
                body: data
            });

            if (!response.ok) {
                throw new Error("Application failed.");
            }

            navigate("/success");

        } catch (error) {
            alert("There was an error submitting your application.");
            console.error(error);
        }
    }

    return (
        <main className="relative min-h-screen bg-[#000000] py-16 px-6 md:px-10">

            <Link
                to="/"
                className="absolute top-4 left-4 bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-2 px-6 rounded"
            >
                Back to Homepage
            </Link>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-4xl font-bold mb-2">
                    Apply for {job.title}
                </h1>

                <p className="text-gray-600 mb-8">
                    {job.location} • {job.type}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full"
                        />

                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border rounded-lg p-3 w-full"
                        />

                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded-lg p-3 w-full"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border rounded-lg p-3 w-full"
                    />

                    <div>
                        {/*Make the upload resume a button that opens the file dialog when clicked*/}
                        <label htmlFor="resume-upload" className="block font-semibold mb-2 cursor-pointer bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                            Upload Resume
                        </label>

                        <input
                            id="resume-upload"
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleChange}
                            className="hidden"
                        />

                        {formData.resume && (
                            <p className="mt-2 text-gray-600">File uploaded: {formData.resume.name}</p>
                        )}

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition"
                    >
                        Submit
                    </button>

                </form>

            </div>

        </main>
    );
}

export default Apply;