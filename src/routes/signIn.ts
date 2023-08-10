import { Router, Request, Response, NextFunction } from "express";
import { postCustomer } from "../functions/postCustomer";

const router = Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.post("/api/newCustomer/", async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const newCustomer = await postCustomer(
      body.name,
      body.surname,
      body.cpf,
      body.email,
      body.password
    );
    console.log(newCustomer);

    res.status(200).json({ success: "Sign in successfull" });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
