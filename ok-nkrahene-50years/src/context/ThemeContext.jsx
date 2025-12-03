import React, { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Force dark mode permanently
  document.documentElement.classList.add("dark");

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}


// import React, { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext(null);

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//     if (theme === "dark") document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [theme]);

//   const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

//   return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
// }
