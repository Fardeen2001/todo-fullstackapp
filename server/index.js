import express from "express";
import DbConnection from "./database/db.js";
import cors from "cors";
import route from "./routes/Route.js";
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);

DbConnection();
app.listen(PORT, () => {
  console.log(`your port is successfully running on port:${PORT}`);
});
