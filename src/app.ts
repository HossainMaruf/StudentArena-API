import express, { Application } from "express";
import { AppDataSource } from "./database/data-source";
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import authRoutes from './routes/authRoutes';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize MySQL connection
AppDataSource.initialize()
 .then(() => console.log("Data Source Initialized"))
 .catch((err: any) => console.log("Error during Data Source Initialization: ", err));

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

export default app;