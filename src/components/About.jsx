import { Link } from "react-router-dom";
function About() {
    return (

        <div className="min-h-screen bg-[#000000] py-16 px-6 md:px-10">

            <Link
            to="/"
            className="absolute top-4 left-4 bg-[#8B0000] hover:bg-[#6B0000] text-white font-bold py-2 px-6 rounded"
           >
            Back to Homepage
           </Link>

            <h1 className="text-[#8B0000] text-3xl md:text-4xl font-bold mb-12 font-anton text-center">About Afterdark</h1>
            <p className="text-[#FFFFFF] text-lg md:text-xl max-w-5xl mx-auto text-center leading-8">
                Afterdark Hospitality was founded by Jommar Roc with one goal: to change the way people experience nightlife.<br/>
                After years of going out, Jommar noticed the same problem everywhere he went, every club sounded the same.<br/>
                The same playlists, same transitions, same energy. No matter where you were, the experience felt rarely unique.<br/>
                Instead of accepting it, he decided to build something different. Afterdark was created to bring together DJs<br/>
                with their own identities, styles, and sounds. Rather than forcing everyone into the same formula, Afterdark is<br/>
                building a collective of talented DJs who each bring something unique to the booth. From house and Afro house to<br/>
                open format, latin, hip-hop, brazilian funk, and everything in between, every event is designed to feel fresh,<br/>
                exciting, and unforgettable. Our mission goes beyond throwing parties. We're changing the energy of nightlife<br/>
                by creating experiences where music leads the night, every DJ tells a story, and every event has it's own identity.<br/>
                Today, Afterdark produces events across Connecticut and New York City, while continuing to grow a community of<br/>
                artists, creators, and partygoers who want more than another night out, they want an experience they'll remember.<br/>
                This is more than nightlife. This is the future of partying. Welcome to Afterdark.
            </p>

        </div>
    );
}

export default About;