import { Router, Request, Response } from "express";
import { getBooks, getBookById } from "../functions/getBooks";
import { insertBook } from "../functions/postBook";
import { updateBook } from "../functions/putBook";

const route = Router();
const bodyParser = require("body-parser");

route.get("/booksList", async (req: Request, res: Response) => {
  try {
    const books = await getBooks();

    if (books.length === 0) {
      return res.status(404).json({ error: "There are no registered books" });
    }

    return res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books", err);
    return res.status(505).json({ error: "Error fetching books" });
  }
});

route.get("/book/:id", async (req: Request, res: Response) => {
  try {
    const currentId = Number(req.params.id);
    const book = await getBookById(currentId);

    if (book.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (err) {
    console.error("Error fetching book", err);
    return res.status(500).json({ error: "Error fetching book" });
  }
});

// route.post("/newBook", async (req, res) => {
//   try {
//     const body = req.body;

//     await insertBook(
//       body.name,
//       body.barcode,
//       body.publisherId,
//       body.price,
//       body.stock,
//       body.languageId,
//       body.description
//     );

//     res.status(200).json({ success: "Book successfully saved" });
//   } catch (error: any) {
//     console.error(error);
//     res.status(400).json({ error: error.message });
//   }
// });

// route.put('/updateBook/:id', async (req, res) => {
//     try {
//         const body = req.body;

//         await updateBook(Number(req.params.id),
//           body.name,
//           body.barcode,
//           body.publisherId,
//           body.price,
//           body.stock,
//           body.languageId,
//           body.description
//         );

//         res.status(200).json({ success: "Book successfully saved" });
//       } catch (error:any) {
//         console.error(error);
//         res.status(400).json({ error: error.message });
//       }

// });

export { route, bodyParser };
