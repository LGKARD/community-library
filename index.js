import express from 'express';
import userRoutes from './src/routes/userRoutes.js';
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(userRoutes);



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));