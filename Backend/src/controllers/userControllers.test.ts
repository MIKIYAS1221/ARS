import { makeApartmentRequest } from './userControllers';
import { Request, Response, NextFunction } from 'express';
import User, { IUser} from '../models/User';
import Apartment, { IApartment } from '../models/apartment';
import {IApartmentRequest } from '../models/registerRequest'; // Assuming you have defined the types

import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from "../app";

dotenv.config();

describe('makeApartmentRequest', () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

    
  it('should return a status of 200 if given a valid request', async() => {
    const user = await User.create({
        name: 'BrookZ',
        fatherName: 'Zewdu',
        grandFatherName: 'Bayle',
        phoneNumber: '0912345678',
        email: 'brookzewddu0999@gmail.com',
        password: 'hell',
        isVerified: true,
        role: 'tenant',
        avatar: {
            url: 'hello',
            public_id: 'hello'
        }

    });


    const apartment = await Apartment.create({
        name: 'Junior suite with 2 bedrooms',
        price: 1000,
        description: 'Lorem ipsum dolor sit ame',
        ratings: 4.5,
        apartmentFloor: 1,
        apartmentNumber: 105
    });

    const token = JWT.sign({id: user._id}, process.env.JWT_SECRET!);
    // req.body = {
        
    // };

    const result = await supertest(app).post('/api/users/makeApartmentRequest').send({
        id: apartment._id,
        meetingDate: '2021-05-05'
  }).set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(200);

    await User.deleteOne({ _id: user._id });
    await Apartment.deleteOne({ _id: apartment._id });
  
}, 30000);

it ('should return a status of 404 if given an apartmentID that does not exist', async() => {
    const user = await User.create({
        name: 'BrookZ',
        fatherName: 'Zewdu',
        grandFatherName: 'Bayle',
        phoneNumber: '0912345678',
        email: 'brookzewddu0999@gmail.com',
        password: 'hell',
        isVerified: true,
        role: 'tenant',
        avatar: {
            url: 'hello',
            public_id: 'hello'
        }

    });

    const apartment = await Apartment.create({
        name: 'Junior suite with 2 bedrooms',
        price: 1000,
        description: 'Lorem ipsum dolor sit ame',
        ratings: 4.5,
        apartmentFloor: 1,
        apartmentNumber: 105
    });

    const token = JWT.sign({id: user._id}, process.env.JWT_SECRET!);

    const result = await supertest(app).post('/api/users/makeApartmentRequest').send({

    }).set('Authorization', `Bearer ${token}`);

    expect(result.status).toBe(404);

    await User.deleteOne({ _id: user._id });
    await Apartment.deleteOne({ _id: apartment._id });
});


it ('should return a status of 401 if given an jwt token is not sent', async() => {
    const user = await User.create({
        name: 'BrookZ',
        fatherName: 'Zewdu',
        grandFatherName: 'Bayle',
        phoneNumber: '0912345678',
        email: 'brookzewddu0999@gmail.com',
        password: 'hell',
        isVerified: true,
        role: 'tenant',
        avatar: {
            url: 'hello',
            public_id: 'hello'
        }

    });

    const apartment = await Apartment.create({
        name: 'Junior suite with 2 bedrooms',
        price: 1000,
        description: 'Lorem ipsum dolor sit ame',
        ratings: 4.5,
        apartmentFloor: 1,
        apartmentNumber: 105
    });

    const token = JWT.sign({id: user._id}, process.env.JWT_SECRET!);

    const result = await supertest(app).post('/api/users/makeApartmentRequest').send({
        id: apartment._id,
        meentingDate: '2021-05-05'
    });

    expect(result.status).toBe(401);

    await User.deleteOne({ _id: user._id });
    await Apartment.deleteOne({ _id: apartment._id });
});

});
