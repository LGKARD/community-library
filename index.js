import express from 'express';
import userRoutes from './src/routes/userRoutes.js';
import bookRoutes from './src/routes/bookRoutes.js';
import loanRoutes from './src/routes/loanRoutes.js';
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);
app.use(loanRoutes);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));