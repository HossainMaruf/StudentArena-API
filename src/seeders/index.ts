import { AppDataSource } from "../data-source"
import { userSeeder } from "./userSeeder";
import { postSeeder } from "./postSeeder";

// setting up the db connection
AppDataSource.initialize()
.then(async () => {
    console.log("Seeding...");

    const users = await userSeeder();
    await postSeeder(users);
    
    console.log("Seeding Complete!");
    process.exit(0);
})
.catch((error: any) => console.log(error));