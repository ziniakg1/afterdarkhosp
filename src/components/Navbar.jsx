import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="bg-black text-white font-thin py-4 px-6 flex justify-between items-center">
            <div className="text-2xl font-bold">AFTERDARK</div>

            <div className="flex items-center">
                <Link to="/Events" className="mr-8 hover:text-[#5f5f5f] transition duration-300">Events</Link>
                <Link to="/About" className="mr-8 hover:text-[#5f5f5f] transition duration-300">About</Link>
                <Link to="/Careers" className="mr-8 hover:text-[#5f5f5f] transition duration-300">Careers</Link>
            </div>
        </nav>
    );
}
export default Navbar;