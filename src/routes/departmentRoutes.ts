import { Router } from "express";
import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment, getDepartmentWithCcsps } from "../controllers/departmentController";

const router = Router();

router.get("/", getDepartments);
router.get("/:code", getDepartment);
router.post("/", createDepartment);
router.put("/:code", updateDepartment);
router.delete("/:code", deleteDepartment);
router.get("/:code/ccsps", getDepartmentWithCcsps);

export default router;