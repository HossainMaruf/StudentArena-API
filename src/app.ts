import express, { Application } from "express";
import { AppDataSource } from "./database/data-source";
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import authRoutes from './routes/authRoutes';
import courseRoutes from './routes/courseRoutes';
import departmentRoutes from './routes/departmentRoutes';
import ccspRoutes from './routes/ccspRoutes';


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
app.use("/courses", courseRoutes);
app.use("/departments", departmentRoutes);
app.use("/ccsps", ccspRoutes);

export default app;