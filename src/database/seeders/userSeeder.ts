import {faker} from "@faker-js/faker";
import { User } from "../../entities/User";
import { AppDataSource } from "../data-source";

export const userSeeder = async () => {
    const userRepository = AppDataSource.getRepository(User);
    // Store all the users
    const users: User[] = [];

    for(let i=0; i<20; i++) {
        const user = userRepository.create({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });
        users.push(user);
    }
    await userRepository.save(users);
    console.log("Users seeded👍");
    return users; // returning users so we can relate posts
}