import { Router, Request, Response } from "express";
import { getBooks, getBookById } from "../functions/getBooks";
import { insertBook } from "../functions/postBook";
import { updateBook } from '../functions/putBook';

const route = Router();
const bodyParser = require("body-parser");

route.get("/booksList", async (req, res) => {
  const books = await getBooks();
  res.status(200).json(books);
});

route.get("/book/:id", async (req, res) => {
  const currentId = Number(req.params.id);
  const book = await getBookById(currentId);
  res.json(book);
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

export { route, bodyParser};
