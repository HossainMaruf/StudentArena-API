import {faker} from "@faker-js/faker";
import { User } from "../entities/User";
import { DataSource } from "typeorm";

export const userSeeder = async (AppDataSource: DataSource) => {
    const userRepository = AppDataSource.getRepository(User);
    for(let i=0; i<20; i++) {
        const user = userRepository.create({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            age: faker.number.int({min: 18, max: 60})
        });
        await userRepository.save(user);
    }
    console.log("20 fake users inserted")
}