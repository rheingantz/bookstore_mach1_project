import { Router, Request, Response } from "express";
import { getBooks, getBookById } from '../../functions/getBooks';

const router = Router();

router.get('/api/livros/', async (req, res) => {
  const books = await getBooks();
  res.json(books);

});

router.get('/api/livros/:id', async (req, res) => {
    const currentId = Number(req.params.id)
    const book = await getBookById(currentId);
    res.json(book);

});

export default router;