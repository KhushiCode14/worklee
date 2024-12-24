import express from "express";
import {
  CreateClient,
  GetSingleClient,
  UpdateClientProfile,
  DeleteClientProfile,
} from "./clientController.js";

const ClientRoutes = express.Router();
// get single route of client
// if role is client then show this route
ClientRoutes.get("/:id", GetSingleClient);
ClientRoutes.post("/:id", CreateClient);
ClientRoutes.patch("/:id", UpdateClientProfile);
ClientRoutes.delete("/:id", DeleteClientProfile);
export default ClientRoutes;
