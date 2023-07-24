import { Router, Request, Response } from "express";
import { postBook } from '../../functions/postBook';
import { IBookPost } from "../../interfaces/bookInterface";

const router = Router();

const bodyParser = require ('body-parser');
router.use(bodyParser.json());

router.post('/api/newBook/', async (req, res) => {
    const bookBody:IBookPost = req.body;
    const newBook = await postBook(bookBody);
    res.json(newBook);

});

export default router;