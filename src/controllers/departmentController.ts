import { Request, Response } from "express";
import { departmentService } from "../services/departmentService";

export const getDepartments = async (req: Request, res: Response) => {
    const departments = await departmentService.getDepartments();
    res.json(departments);
}

export const getDeparment = async (req: Request, res: Response) => {
    const department = await departmentService.getDepartmentByCode(req.params.code);
    if(!department) return res.status(404).json({message: "Deparment not found"});
    res.json(department);
}

export const createDeparment = async (req: Request, res: Response) => {
    const department = await departmentService.createDepartment(req.body);
    res.status(201).json(department);
}

export const updateDeparment = async (req: Request, res: Response) => {
    const department = await departmentService.updateDepartment(req.params.code, req.body);
    if(!department) return res.status(404).json({message: "Deparment not found"});
    res.json(department);
}

export const deleteDeparment = async (req: Request, res: Response) => {
    const deleted = await departmentService.deleteDepartment(req.params.code);
    if(!deleted) return res.status(404).json({message: "Deparment not found"});
    res.json({message: "Deparment deleted successfully"});
}