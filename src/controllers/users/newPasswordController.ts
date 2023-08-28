import { Router, Request, Response, NextFunction } from "express";
import { resetPasswordModel } from "../../functions/customerFunctions/resetPassword";

const router = Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

class newPasswordController {
  async reserPassword(req: Request, res: Response) {
    try {
      const body = req.body;
      await resetPasswordModel(body.email, body.password);

      res.status(200).json({
        resetPassword: true,
        email: body.email,
        newPassword: body.newPassword,
      });
    } catch (error: any) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }
}

export default new newPasswordController();
