import { Router, Request, Response } from "express";
import { getBooksModel, getBookByIdModel } from "../../functions/bookFunctions/getBooksModels";

class getBooksController{

async getBooks (req: Request, res: Response) {
  try {
    const books = await getBooksModel();

    if (books.length === 0) {
      return res.status(404).json({ error: "There are no registered books" });
    }

    return res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books", err);
    return res.status(505).json({ error: "Error fetching books" });
  }
};

async getBookById (req: Request, res: Response) {
  try {
    const currentId = Number(req.params.id);
    const book = await getBookByIdModel(currentId);

    if (book.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (err) {
    console.error("Error fetching book", err);
    return res.status(500).json({ error: "Error fetching book" });
  }
}

}

export default new getBooksController();