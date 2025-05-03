import express from 'express';
import { routes } from "./src/routes/index.js";
import "dotenv/config";
import "./src/service/cronService.js"
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));