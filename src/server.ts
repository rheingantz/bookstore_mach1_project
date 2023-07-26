import express from 'express';
import cors from 'cors';
import { route, bodyParser} from './routes/books'
// import getUsers from './routes/usersRoutes/getUsers';
// import getSales from './routes/salesRoutes/getSales';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/books', route)
// app.use(getUsers);
// app.use(getSales);

app.listen(3000, () => "server is running in port 3000");