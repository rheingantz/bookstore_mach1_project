import { Router, Request, Response } from "express";
import { getSaleById, getSales, getSalesByDate } from "../functions/getSales";
import { insertSale } from "../functions/postSale";

const route = Router();

// route.get("/salesList", async (req, res) => {
//   try {
//     const sales = await getSales();

//     if (sales.length === 0) {
//       return res.status(404).json({ error: "There are no registered sales" });
//     }

//     res.status(200).json(sales);
//   } catch (err) {
//     console.error("Error fetching sales", err);
//     return res.status(500).json({ error: "Error fetching sales" });
//   }
// });

// route.get("/sale/:id", async (req: Request, res: Response) => {
//   try {
//     const saleId = Number(req.params.id);
//     const sale = await getSaleById(saleId);

//     if (sale.length === 0) {
//       return res.status(404).json({ error: "Sale not found" });
//     }

//     return res.status(200).json(sale);
//   } catch (err) {
//     console.error("Error fetching sale", err);
//     return res.status(500).json({ error: "Error fetching sale" });
//   }
// });

// route.get("/salesByDate", async (req: Request, res: Response) => {
//   try {
//     const startDate = req.query.startDate;
//     const endDate = req.query.endDate;
//     const sale = await getSalesByDate(startDate, endDate);

//     if (sale.length === 0) {
//       return res
//         .status(404)
//         .json({ error: "There are no sales in this date range" });
//     }

//     return res.status(200).json(sale);
//   } catch (err) {
//     console.error("Error fetching sales by date", err);
//     return res.status(500).json({ error: "Error fetching sales by date" });
//   }
// });

route.post("/api/salePost", async (req: Request, res: Response) => {
  try {
    const saleBody = req.body;
    await insertSale(saleBody.id_customer, saleBody.sale_items);

  } catch (err) {
    console.error("Error fetching post sales", err);
    return res.status(500).json({ error: "Error fetching post sales" });
  }
});

export default route;
