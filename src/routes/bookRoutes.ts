import { Router } from "express";
import getBooksController from "../controllers/books/getBooksController";

const route = Router();

route.get("/bookList", getBooksController.getBooks);
route.get("/bookById/:id", getBooksController.getBookById);

export default route;