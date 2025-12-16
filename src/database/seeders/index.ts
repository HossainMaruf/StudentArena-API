import { AppDataSource } from "../data-source";
import { userSeeder } from "./userSeeder";
import { postSeeder } from "./postSeeder";
import { courseSeeder } from "./courseSeeder";
import { departmentSeeder } from "./departmentSeeder";
import { ccspSeeder } from "./ccspSeeder";

// CLI Flag: seed / clean / refresh
const method = process.argv[2];

// Map CLI strings to functions
const actions:Record<string, ()=>Promise<void>> = {seed, clean, refresh};

// Validation of the flag value
if(!actions[method]) {
    console.log("Unknown method:", method);
    process.exit(1);
}

// Execute the appropriate command
executor(actions[method]);

// Executor runner
async function executor(fn: () => Promise<void>) {
    try {
        await AppDataSource.initialize();
        console.log("DB Connected");
        await fn();
        await AppDataSource.destroy();
        console.log("DB Closed");
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

// SEED
async function seed() {
    console.log("Seeding...");

    // const users = await userSeeder();
    // await postSeeder(users);

    const departments = await departmentSeeder();
    const courses = await courseSeeder();
    await ccspSeeder(departments, courses);

    console.log("Seeding Complete!");
}

// CLEAN
async function clean() {
    console.log("Cleaning with Foreign Key Disabled...");
    // Disable FK
    await AppDataSource.query("SET FOREIGN_KEY_CHECKS = 0; ");

    const entities = AppDataSource.entityMetadatas;
    for(const entity of entities) {
        await AppDataSource.getRepository(entity.name).clear();
        console.log(`Cleared Table: ${entity.tableName}`)
    }
    
    // Enable FK
    await AppDataSource.query("SET FOREIGN_KEY_CHECKS = 1;");
    console.log("Cleaning Complete!");
}

// CLEAN + SEED
async function refresh() {
    await clean();
    await seed();
}
