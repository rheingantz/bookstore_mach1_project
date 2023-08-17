import { Router } from "express";
import getSalesController from "../controllers/sales/getSalesController"
import postSaleController from "../controllers/sales/postSaleController"

const route = Router();

route.get("/salesList", getSalesController.getSales);
route.get("/saleById/:id", getSalesController.getSaleById);
route.get("/saleByDate/:startDate/:endDate", getSalesController.getSaleByDate);
route.post("/postSale", postSaleController.postSale);

export default route;