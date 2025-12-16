import {Router} from 'express';
import { createCcsp, getCcspById, deleteCcsp, getCcsps, updateCcsp } from '../controllers/ccspController';

const router = Router();

router.get("/", getCcsps);
router.get("/:id", getCcspById);
router.post("/", createCcsp);
router.put("/:id", updateCcsp);
router.delete("/:id", deleteCcsp);

export default router;