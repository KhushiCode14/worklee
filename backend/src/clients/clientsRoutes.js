import express from "express";
import { CreateClient, GetSingleClient } from "./clientController.js";

const ClientRoutes = express.Router();
// get single route of client
// if role is client then show this route
ClientRoutes.get("/:id", GetSingleClient);
ClientRoutes.post("/:id", CreateClient);
export default ClientRoutes;
