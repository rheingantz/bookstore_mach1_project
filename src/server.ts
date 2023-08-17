import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
import salesRoute from "./routes/saleRoutes";
import customerRoute from "./routes/userRoutes"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", bookRoutes);
app.use("/sales", salesRoute);
app.use("/users", customerRoute);

app.listen(3000, () => "server is running in port 3000");