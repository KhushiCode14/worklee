import express from "express";
import AuthRoutes from "./authentication/AuthRoutes.js";
import JobRoutes from "./jobs/JobsRoutes.js";
import cors from "cors";
import ClientRoutes from "./clients/clientsRoutes.js";
import FreelancerRoutes from "./freelancer/freelancerRoutes.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://www.localhost:5173"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
console.log("app run");
app.use("/auth", AuthRoutes);
app.use("/client", ClientRoutes);
app.use("/freelancer", FreelancerRoutes);
app.use("/job", JobRoutes);

export default app;
