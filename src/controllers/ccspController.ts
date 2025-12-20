import { Request, Response } from "express";
import { ccspService } from "../services/ccspService";

export const getCcsps = async (req: Request, res: Response) => {
    const ccsps = await ccspService.getCcsps();
    res.json(ccsps);
}

export const getCcspByCode = async (req: Request, res: Response) => {
    const ccsp = await ccspService.getCcspByCode(parseInt(req.params.code));
    if(!ccsp) return res.status(404).json({message: "ccsp not found"});
    res.json(ccsp);
}

export const createCcsp = async (req: Request, res: Response) => {
    const ccsp = await ccspService.createCcsp(req.body);
    res.status(201).json(ccsp);
}

export const updateCcsp = async (req: Request, res: Response) => {
    const ccsp = await ccspService.updateCcsp(parseInt(req.params.code), req.body);
    if(!ccsp) return res.status(404).json({message: "ccsp not found"});
    res.json(ccsp);
}

export const deleteCcsp = async (req: Request, res: Response) => {
    const ccsp = await ccspService.deleteCcsp(parseInt(req.params.code));
    if(!ccsp) return res.status(404).json({message: "ccsp not found"});
    res.json({message: "ccsp deleted successfully"});
}