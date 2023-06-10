// add visitor to apartment
//rondom code for visitor library

import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";
import { IApartment } from "./apartment";

export interface IPayment extends Document {
  user: IUser["_id"];
  apartment: IApartment["_id"];
  account_Number: string;
  transaction_Id: string;
  createdAt: Date;
  BankName: string;
}

const PaymentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  apartment: {
    type: Schema.Types.ObjectId,
    ref: "Apartment",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
    account_Number: {
    type: String,
    required: true,
    },
    transaction_Id: {
    type: String,
    required: true,
    },
    BankName: {
    type: String,
    enum:["Commerical Bank of Ethiopia","Dashen Bank","Awash Bank","Abssinia Bank","Wegagen Bank"],
    required: true,
    }
});

const Payment = model<IPayment>("Payment", PaymentSchema);

export default Payment;
