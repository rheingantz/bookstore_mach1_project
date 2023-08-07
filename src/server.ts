import express from "express";
import cors from "cors";
import { route, bodyParser } from "./routes/books";
import salesRoute from "./routes/sales";
import usersRoute from "./routes/users";
// import getUsers from './routes/usersRoutes/getUsers';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/books", route);
app.use("/sales", salesRoute);
app.use("/users", usersRoute);

app.listen(3000, () => "server is running in port 3000");
