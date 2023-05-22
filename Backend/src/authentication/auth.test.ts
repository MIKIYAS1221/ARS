import { RequestWithUser } from "./auth";
import { Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { NextFunction } from "connect";
import { authorizeRoles, isAuthenticatedUser } from "./auth";

describe("isAuthenticatedUser middleware", () => {

  let req: RequestWithUser;
  let res: Response;
  let next: NextFunction;

  
  beforeEach(() => {
    req = {
      headers: {},
    } as RequestWithUser;
    // res = {} as Response;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    next = jest.fn();
  });

  it("should return 401 if no token is provided", async () => {
    await isAuthenticatedUser(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Login first to access this resource",
    });
  });

  it("should return 401 if invalid token is provided", async () => {
    req.headers.authorization = "Bearer invalidToken";
    await isAuthenticatedUser(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid Token Used",
    });
  });

});