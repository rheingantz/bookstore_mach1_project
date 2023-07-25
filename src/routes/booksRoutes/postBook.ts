import { Router, Request, Response } from "express";
import { insertBook } from '../../functions/postBook';

const router = Router();

const bodyParser = require ('body-parser');
router.use(bodyParser.json());

router.post('/api/newBook/', async (req, res) => {
    try {
        const body = req.body;
    
        await insertBook(
          body.name,
          body.barcode,
          body.publisherId,
          body.price,
          body.stock,
          body.languageId,
          body.description
        );
    
        res.status(200).json({ success: "Book successfully saved" });
      } catch (error:any) {
        console.error(error);
        res.status(400).json({ error: error.message });
      }

});

export default router;