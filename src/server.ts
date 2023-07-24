import express from 'express';
//import { getBooks, getBookById } from './functions/getBooks'
// import { getAtendentes, getAtendenteById } from './functions/getUsers';

import getBooks from './routes/booksRoutes/getBooks';
import postBook from './routes/booksRoutes/postBook';
import putBook from './routes/booksRoutes/putBook';

import getUsers from './routes/usersRoutes/getUsers';

import getSales from './routes/salesRoutes/getSales';


const app = express();

app.use(getBooks);
app.use(postBook);
app.use(putBook);

app.use(getUsers);

app.use(getSales);

app.listen(3000, () => "server is running in port 3000");