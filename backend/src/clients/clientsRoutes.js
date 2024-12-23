import express from "express";
import { GetSingleClient } from "./clientController.js";

const ClientRoutes = express.Router();
// get single route of client
// if role is client then show this route
ClientRoutes.get("/:id", GetSingleClient);
export default ClientRoutes;
