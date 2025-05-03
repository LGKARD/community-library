import { Router } from "express";
import userRoutes from './userRoutes.js';
import bookRoutes from './bookRoutes.js';
import loanRoutes from './loanRoutes.js';

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/books", bookRoutes);
routes.use("/loans", loanRoutes);

export {routes}