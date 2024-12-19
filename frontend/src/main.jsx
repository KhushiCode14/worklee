import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
     */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
