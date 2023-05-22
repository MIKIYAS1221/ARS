import { Request,Response } from "express";
import Visitor,{IVisitor} from '../models/addVisitor';
// accept visitor request
export const acceptVisitor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const visitor = await Visitor.findByIdAndUpdate(id, { status: "accepted" });
        if (!visitor) {
        return res.status(404).json({ data: "Visitor not found" });
        }
        return res.status(200).json({ data: "Visitor accepted" });
    } catch (error) {
        return res.status(500).json({ data: (error as Error).message });
    }
    }
// reject visitor request
export const rejectVisitor = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const visitor = await Visitor.findByIdAndUpdate(id, { status: "rejected" });
        if (!visitor) {
        return res.status(404).json({ data: "Visitor not found" });
        }
        return res.status(200).json({ data: "Visitor rejected" });
    } catch (error) {
        return res.status(500).json({ data: (error as Error).message });
    }
    }
export const allVisitors = async (req:Request, res:Response) => {
    try {
        const visitors = await Visitor.find({status:"pending"}).populate('user').populate('apartment');
        return res.status(200).json({ data:visitors });
    } catch (error) {
        return res.status(500).json({ data: (error as Error).message });
    }
    }
export const allAcceptedVisitors = async (req:Request, res:Response) => {
    try {
        const visitors = await Visitor.find({status:"accepted"}).populate('user').populate('apartment');
        return res.status(200).json({ data:visitors });
    } catch (error) {
        return res.status(500).json({ data: (error as Error).message });
    }
    }
export const allRejectedVisitors = async (req:Request, res:Response) => {
    try {
        const visitors = await Visitor.find({status:"rejected"}).populate('user').populate('apartment');
        return res.status(200).json({ data:visitors });
    } catch (error) {
        return res.status(500).json({ data: (error as Error).message });
    }
    }
