import {Router} from 'express';
import { createCcsp, getCcspByCode, deleteCcsp, getCcsps, updateCcsp } from '../controllers/ccspController';

const router = Router();

router.get("/", getCcsps);
router.get("/:code", getCcspByCode);
router.post("/", createCcsp);
router.put("/:code", updateCcsp);
router.delete("/:code", deleteCcsp);

export default router;