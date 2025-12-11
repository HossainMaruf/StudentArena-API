import express, { Application } from "express";
import { AppDataSource } from "./data-source";
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app: Application = express();

// Middleware
app.use(express.json());

// Initialize MySQL connection
AppDataSource.initialize()
 .then(() => console.log("Data Source Initialized"))
 .catch((err: any) => console.log("Error during Data Source Initialization: ", err));

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

export default app;