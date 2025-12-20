import {Request, Response} from 'express';
import { ccspCourseService } from '../services/ccspCourseService';

export const getCcspCourses = async (req: Request, res: Response) => {
    const ccspCourses = await ccspCourseService.getCcspCourses();
    res.json(ccspCourses);
}