import { Router, Request, Response } from "express";
import { getSales } from "../functions/getSales";

const route = Router()

route.get('/salesList', async (req, res) => {
    const sales = await getSales();
    res.status(200).json(sales);
});

export default route