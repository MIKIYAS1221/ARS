// add visitor to apartment
//rondom code for visitor library

import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";
import { IApartment } from "./apartment";

export interface IVisitor extends Document {
  user: IUser['_id'];
  apartment: IApartment['_id'];
  status: string;
  number: string;
  createdAt: Date;
  visitorName: string;
  code: string; // generated code for the visitor
}

const VisitorSchema = new Schema({
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
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  code: {
    type: String,
    required: true,
  },
  visitorName: {
    type: String,
    required: true,
  },
});

const Visitor = model<IVisitor>("Visitor", VisitorSchema);

export default Visitor;