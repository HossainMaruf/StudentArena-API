import { AppDataSource } from "./data-source"
import { userSeeder } from "./seeders/userSeeder";

const runSeed = async () => {
    await AppDataSource.initialize(); // setting up the db connection
    await userSeeder(AppDataSource);
    
    console.log("Seeding Complete!");
    process.exit(0);
}

runSeed();