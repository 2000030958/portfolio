import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-black bg-opacity-40">
      <div className="flex items-center justify-between h-full px-10 lg:px-20">
        {/* Logo */}
        <h1 className="text-white text-lg font-semibold">PORTFOLIO</h1>

        {/* Navigation Links */}
        <div className="flex space-x-6 ">
          {[ "EDUCATION", "PROJECTS", "SKILLS", "CERTIFICATIONS", "ACHIEVEMENTS", "CONTACT"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-white hover:text-gray-300 transition"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
