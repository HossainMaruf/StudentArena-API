import { Router } from "express";
import { getDepartments, getDeparment, createDeparment, updateDeparment, deleteDeparment } from "../controllers/departmentController";

const router = Router();

router.get("/", getDepartments);
router.get("/:code", getDeparment);
router.post("/", createDeparment);
router.put("/:code", updateDeparment);
router.delete("/:code", deleteDeparment);

export default router;