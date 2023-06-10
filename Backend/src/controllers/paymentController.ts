import { Request,Response } from "express";
import { RequestWithUser } from "../authentication/auth";

import Payment,{IPayment} from "../models/payment";
import Apartment from '../models/apartment';

//create payment
export const createPayment = async (req:RequestWithUser,res:Response) => {
    try {
        const apartment = await Apartment.findOne({occupants:req.user?._id})
        const payment = {
            user:req.user?._id,
            apartment:apartment?._id,
            account_Number:req.body.account_Number,
            transaction_Id:req.body.transaction_Id,
            BankName:req.body.BankName
        }
        const newPayment = await Payment.create(payment);
        res.status(201).json({
            success:true,
            data:newPayment
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            data:(error as any).message
        })
 
   }
}

//get all payments
export const getAllPayments = async (req:Request,res:Response) => {
    try {
        const payments = await Payment.find().populate('user').populate('apartment');
        res.status(200).json({
            success:true,
            data:payments
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:(error as any).message
        })
 
   }
}

// get payment by user id
export const getPaymentByUserId = async (req:RequestWithUser,res:Response) => {
    try {
        const payment = await Payment.findOne({user:req.user?.id}).populate('user').populate('apartment');
        res.status(200).json({
            success:true,
            data:payment
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:(error as any).message
        })
 
   }
}

// get payment by _id
export const getPaymentById = async (req:Request,res:Response) => {
    try {
        const payment = await Payment.findById(req.params.id).populate('user').populate('apartment');
        res.status(200).json({
            success:true,
            data:payment
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:(error as any).message
        })
 
   }
}