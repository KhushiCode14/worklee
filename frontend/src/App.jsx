import { RouterProvider } from "react-router-dom";
import router from "./routes/MainRoute";
import "./App.css";
import { useEffect, useState } from "react";
const App = () => {
  const [theme, setTheme] = useState("light");

  // Set the initial theme based on saved preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme); // Apply to the root element
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark"); // Remove the previous theme
    document.documentElement.classList.add(newTheme); // Apply the new theme
    localStorage.setItem("theme", newTheme); // Save the theme preference
  };

  return (
    <div className="min-h-screen">
      <button
        onClick={toggleTheme}
        className="font-semibold text-black rounded-full dark:bg-gray-300"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
