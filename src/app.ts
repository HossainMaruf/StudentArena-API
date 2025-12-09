import express, { Application } from "express";
import { AppDataSource } from "./data-source";
import userRoutes from './routes/userRoutes';

const app: Application = express();
app.use(express.json());

// Initialize MySQL connection
AppDataSource.initialize()
 .then(() => console.log("Data Source Initialized"))
 .catch((err: any) => console.log("Error during Data Source Initialization: ", err));

app.use("/users", userRoutes);

export default app;
