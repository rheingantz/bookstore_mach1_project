import { Router, Request, Response, NextFunction } from "express";
import { signInModel } from "../../functions/customerFunctions/signInModels";

const router = Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

class signInController{

async signIn(req: Request, res: Response) {
  try {
    const body = req.body;
    const signInBody = await signInModel(body.name, body.surname, body.cpf, body.email, body.password);

    res.status(200).json({ signIn: true, name: body.name, surname: body.surname, email: body.email });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

};

export default new signInController;
