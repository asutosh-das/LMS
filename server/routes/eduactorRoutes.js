import express from "express";
import { updateRoleToEducator } from "../controllers/educatorController.js";

const educatorRouter = express.Router();

//Add Eduactor Role
educatorRouter.get("/update-role", updateRoleToEducator);

export default educatorRouter;
