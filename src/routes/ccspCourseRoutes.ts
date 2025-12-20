import { Router } from "express";
import { getCcspCourses } from "../controllers/ccspCourseController";

const router = Router();

router.get("/", getCcspCourses);

export default router;