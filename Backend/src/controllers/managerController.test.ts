// import { Request, Response } from "express";
import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from "../app";



dotenv.config();

import {
  deleteUser,
  getAllSecurityGuards,
  getAllTenants,
  getSingleUser,
} from "./managerController";

// import { dropCollections, dropDatabase, setUp } from "../utils/db";
import User from "../models/User";

describe('Manager controller testing', () => {
    // beforeAll(async () => {
    //     await setUp()
    //   });
    //   afterEach(async () => {
    //     await dropCollections()
    //   });
    //   afterAll(async () => {
    //     await dropDatabase()
    //   });


    describe("getAllTenants", () => {
      it("should return all tenants", async () => {
        const user = await User.create({
            name: 'BrookZ',
            fatherName: 'Zewdu',
            grandFatherName: 'Bayle',
            phoneNumber: '0912345678',
            email: 'bwwwwwdsu09@gmail.com',
            password: 'hell',
            isVerified: true,
            role: 'manager',
            avatar: {
              url: 'hello',
              public_id: 'hello'
            }
            
          });
          
          const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET || 'hello');
          const response = await supertest(app)
          
          .get(`/api/manager/getAllTenants`)
          .set('Authorization', `Bearer ${token}`)
          
          expect(response.status).toBe(200);
          await user.deleteOne({ _id: user._id });
        
        
      }, 30000);
    });

});