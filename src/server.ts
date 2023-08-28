import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
import salesRoute from "./routes/saleRoutes";
import usersRoute from "./routes/userRoutes";
import authMiddleware from "./midwareAuthorization";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", bookRoutes);
app.use("/sales", authMiddleware, salesRoute);
app.use("/users", usersRoute);

app.listen(3000, () => "server is running in port 3000");
