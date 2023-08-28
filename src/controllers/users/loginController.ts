import express, { Router, Request, Response } from "express";
import { logIn } from "../../functions/customerFunctions/loginModels";
import dotenv from "dotenv";
const jwt = require("jsonwebtoken");

dotenv.config();

const router = Router();

router.use(express.json());

class logInController {
  async logIn(req: Request, res: Response) {
    const login = req.body;

    try {
      await logIn(login);

      const payload = {
        user: login.email,
        expiresIn: "6h",
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET);

      res.status(200).json({ logIn: true, token: token });
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }
}

export default new logInController();
