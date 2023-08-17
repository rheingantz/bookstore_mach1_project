import { Router, Request, Response, NextFunction } from "express";

const router = Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

class signInController{

async signIn(req: Request, res: Response) {
  try {
    const body = req.body;

    res.status(200).json({ signIn: true, name: body.name, surname: body.surame, email: body.email });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

};

export default new signInController;
