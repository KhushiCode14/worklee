import dotenv from "dotenv";
import ConnectDb from "./src/config/db.js";
import app from "./src/app.js";
import config from "./src/config/config.js";
dotenv.config();

const createServer = () => {
  console.log("Initializing server...");
  ConnectDb();
  const { port } = config;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};
createServer();
