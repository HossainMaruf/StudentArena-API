import {faker} from "@faker-js/faker";
import { Post } from "../entities/Post";
import { DataSource } from "typeorm";

export const postSeeder = async (AppDataSource: DataSource) => {
    const postRepository = AppDataSource.getRepository(Post);
    for(let i=0; i<20; i++) {
        const post = postRepository.create({
            desc: faker.lorem.paragraph(),
            user: faker.number.int()
        });
        await postRepository.save(post);
    }
    console.log("20 fake posts inserted")
}