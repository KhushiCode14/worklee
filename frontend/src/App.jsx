import { RouterProvider } from "react-router-dom";
import router from "./routes/MainRoute";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className={theme}>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
