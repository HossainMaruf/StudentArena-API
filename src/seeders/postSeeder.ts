import {faker} from "@faker-js/faker";
import { AppDataSource } from "../data-source";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export const postSeeder = async (users: User[]) => {
    const postRepository = AppDataSource.getRepository(Post);
    // store all the posts
    const posts: Post[] = [];

    for(let i=0; i<20; i++) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const post = postRepository.create({
            desc: faker.lorem.paragraph(),
            user: randomUser
        });
        posts.push(post);
    }
    await postRepository.save(posts);
    console.log("Posts seeded👍");
}