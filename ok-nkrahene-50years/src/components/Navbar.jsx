import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Programme", path: "/programme" },
    { name: "Venue", path: "/venue" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Photo Gallery", path: "/gallery" },
    { name: "Book", path: "/book-launch" },
    { name: "Wishes", path: "/wishes" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[var(--surface)] dark:bg-[var(--surface)] shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-extrabold text-[var(--link)] dark:text-[var(--link)] transition-colors duration-300"
        >
          <img
            src="ok-nkrahene-logo.png"
            alt="O.K. Nkrahene Logo"
            className="w-22 ml-6"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-[var(--accent)] transition-colors duration-300 ${
                location.pathname === link.path
                  ? "font-bold text-[var(--accent)]"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 relative">
          <button
            className="text-[var(--text)] dark:text-[var(--text)] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>

          {/* Animated mobile menu */}
          <div
            className={`absolute top-full right-0 mt-1 w-48 bg-[var(--surface)] dark:bg-[var(--surface)] shadow rounded p-2 flex flex-col gap-2 transition-all duration-300 origin-top ${
              isOpen
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0 pointer-events-none"
            }`}
          >
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`hover:text-[var(--accent)] transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "font-bold text-[var(--accent)]"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
