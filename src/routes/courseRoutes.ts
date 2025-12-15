import { Router } from "express";
import { getCourses, getCourse, createCourse, updateCourse, deleteCourse } from "../controllers/courseController";

const router = Router();

router.get("/", getCourses);
router.get("/:code", getCourse);
router.post("/", createCourse);
router.put("/:code", updateCourse);
router.delete("/:code", deleteCourse);

export default router;