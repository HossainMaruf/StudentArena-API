import { AppDataSource } from "./data-source"
import { userSeeder } from "./seeders/userSeeder";
import { postSeeder } from "./seeders/postSeeder";

const runSeed = async () => {
    await AppDataSource.initialize(); // setting up the db connection
    await userSeeder(AppDataSource);
    await postSeeder(AppDataSource);
    
    console.log("Seeding Complete!");
    process.exit(0);
}

runSeed();