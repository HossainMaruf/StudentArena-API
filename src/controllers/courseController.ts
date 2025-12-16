import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const getCourses = async (req: Request, res: Response) => {
    const courses = await courseService.getCourses();
    res.json(courses);
}

export const getCourse = async (req: Request, res: Response) => {
    const course = await courseService.getCourseByCode(req.params.code);
    if(!course) return res.status(404).json({message: "Course not found"});
    res.json(course);
}

export const createCourse = async (req: Request, res: Response) => {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
}

export const updateCourse = async (req: Request, res: Response) => {
    const course = await courseService.updateCourse(req.params.code, req.body);
    if(!course) return res.status(404).json({message: "Course not found"});
    res.json(course);
}

export const deleteCourse = async (req: Request, res: Response) => {
    const deleted = await courseService.deleteCourse(req.params.code);
    if(!deleted) return res.status(404).json({message: "Course not found"});
    res.json({message: "Course deleted successfully"});
}