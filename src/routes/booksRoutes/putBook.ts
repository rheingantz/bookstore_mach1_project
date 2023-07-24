import { Router, Request, Response } from "express";
import { putBook } from '../../functions/putBook';
import { IBookPut } from "../../interfaces/bookInterface";

const router = Router();

const bodyParser = require ('body-parser');
router.use(bodyParser.json());

router.put('/api/updateBook/:id', async (req, res) => {
    const currentId = Number(req.params.id);
    const bookBody:IBookPut = req.body;
    const updatedBook = await putBook(currentId, bookBody);
    res.json(updatedBook);

});

export default router;