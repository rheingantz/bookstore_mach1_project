import { Router, Request, Response } from "express";
import { insertSaleModel } from "../../functions/salesFunctions/postSaleModels";

class postSaleController{
    async postSale(req: Request, res: Response) {
  try {
    const saleBody = req.body;
    await insertSaleModel(saleBody.id_customer, saleBody.sale_items);
    res.status(200).json({ message: ' Venda bem sucedida!' });

  } catch (err) {
    console.error("Error fetching post sales", err);
    return res.status(500).json({ error: "Error fetching post sales" });
  }
};

};

export default new postSaleController;
