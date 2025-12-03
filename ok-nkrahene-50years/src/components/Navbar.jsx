import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[var(--surface)] dark:bg-[var(--surface)] shadow-md z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo / Brand */}
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
          <Link
            to="/"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/programme"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Programme
          </Link>
          <Link
            to="/venue"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Venue
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Testimonials
          </Link>
          <Link
            to="/gallery"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Photo Gallery
          </Link>
          <Link
            to="/book-launch"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Book
          </Link>
          <Link
            to="/wishes"
            className="hover:text-[var(--accent)] transition-colors duration-300"
          >
            Wishes
          </Link>

          {/* Dark/Light Mode Toggle */}
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <div className="ml-2">
            <details className="relative">
              <summary className="cursor-pointer text-[var(--text)] dark:text-[var(--text)] transition-colors duration-300">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-48 bg-[var(--surface)] dark:bg-[var(--surface)] shadow rounded p-2 flex flex-col gap-2 transition-colors duration-300">
                <Link to="/" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Home
                </Link>
                <Link to="/programme" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Programme
                </Link>
                <Link to="/venue" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Venue
                </Link>
                <Link to="/testimonials" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Testimonials
                </Link>
                <Link to="/gallery" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Photo Gallery
                </Link>
                <Link to="/book-launch" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Book
                </Link>
                <Link to="/wishes" className="hover:text-[var(--accent)] transition-colors duration-300">
                  Wishes
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
