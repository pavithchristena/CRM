import express from "express";
import { addNew, getClientData } from "../controllers/SalesPipeline_controller.js";


const router = express.Router();


router.post("/addnew", addNew)
router.get("/getclientdata", getClientData)

export default router;