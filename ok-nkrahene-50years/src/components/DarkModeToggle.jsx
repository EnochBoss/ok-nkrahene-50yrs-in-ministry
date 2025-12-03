import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-2 py-1 rounded border bg-gray-100 dark:bg-gray-700 text-sm"
      title="Toggle theme"
    >
      {dark ? "dark" : "Dark"}
    </button>
  );
}
