import { RouterProvider } from "react-router-dom";
// import MainRoute from "./routes/MainRoute";
import router from "./routes/MainRoute";
// import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
