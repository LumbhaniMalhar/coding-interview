import express from "express";
import cors from "cors";
import {db} from "./backend/db.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/orders", async (request, response) => {
  try {
    const {rows} = await db.raw("SELECT * FROM orders");
    response.status(200).send({ rows });
  } catch (error) {
    console.log({error});
    response.status(400).send({error});
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
