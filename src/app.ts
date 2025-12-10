import express, { Application } from "express";
import { AppDataSource } from "./data-source";
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import authRoutes from './routes/authRoutes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize MySQL connection
AppDataSource.initialize()
 .then(() => console.log("Data Source Initialized"))
 .catch((err: any) => console.log("Error during Data Source Initialization: ", err));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

export default app;
