import { Router, Request, Response } from "express";
import { getSalesByDate } from '../../functions/getSales';

const router = Router();

router.get('/api/sales/:date1/:date2', async (req, res) => {
    const date1 = req.params.date1;
    const date2 = req.params.date2;
    const sales = await getSalesByDate(date1,date2);
    res.json(sales);
});

export default router;