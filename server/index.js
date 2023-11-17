import express from "express";
import DbConnection from "./database/db.js";
const app = express();
const PORT = 8000;
DbConnection();
app.listen(PORT, () => {
  console.log(`your port is successfully running on port:${PORT}`);
});
