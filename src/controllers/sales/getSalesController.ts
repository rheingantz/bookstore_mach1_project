import { Router, Request, Response } from "express";
import {
  getSaleByIdModel,
  getSalesModel,
  getSalesByDateModel,
  getUserSales
} from "../../functions/salesFunctions/getSalesModels";
const jwt = require('jsonwebtoken');

class getSalesController {
  async getSales(req: Request, res: Response) {
    try {
      const sales = await getSalesModel();

      if (sales.length === 0) {
        return res.status(404).json({ error: "There are no registered sales" });
      }

      res.status(200).json(sales);
    } catch (err) {
      console.error("Error fetching sales", err);
      return res.status(500).json({ error: "Error fetching sales" });
    }
  }

  async getSaleById(req: Request, res: Response) {
    try {
      const saleId = Number(req.params.id);
      const sale: any = await getSaleByIdModel(saleId);

      if (sale.length === 0) {
        return res.status(404).json({ error: "Sale not found" });
      }

      return res.status(200).json(sale);
    } catch (err) {
      console.error("Error fetching sale", err);
      return res.status(500).json({ error: "Error fetching sale" });
    }
  }

  async getSaleByDate(req: Request, res: Response) {
    try {
      const startDate = req.params.startDate;
      const endDate = req.params.endDate;

      const sale = await getSalesByDateModel(startDate, endDate);

      if (sale.length === 0) {
        return res
          .status(404)
          .json({ error: "There are no sales in this date range" });
      }

      return res.status(200).json(sale);
    } catch (err) {
      console.error("Error fetching sales by date", err);
      return res.status(500).json({ error: "Error fetching sales by date" });
    }
  }

  async getUserSales(req: Request, res: Response) {
    const token = req.headers.authorization?.split(' ')[1];
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decodedToken.user;

      const sale = await getUserSales(userEmail);

      if (sale.length === 0) {
        return res
          .status(404)
          .json({ error: "There are no sales registered yet" });
      }

      return res.status(200).json(sale);
    } catch (err) {
      console.error("Error fetching sales by date", err);
      return res.status(500).json({ error: "Error fetching users sales" });
    }
  }
}

export default new getSalesController();
