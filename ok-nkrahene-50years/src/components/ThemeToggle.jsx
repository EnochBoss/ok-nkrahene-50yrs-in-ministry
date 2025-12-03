import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        px-5 py-2 rounded-full
        border-2 border-[var(--accent)]
        bg-[var(--surface)] dark:bg-[var(--surface)]
        text-[var(--accent)] dark:text-[var(--accent)]
        font-semibold
        shadow-md hover:shadow-lg
        hover:bg-[var(--accent)] hover:text-black
        transition-all duration-300
      "
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
