import {faker} from "@faker-js/faker";
import { AppDataSource } from "../data-source";
import { Course } from "../../entities/Course";

export const courseSeeder = async () => {
    const courseRepository = AppDataSource.getRepository(Course);

    const courses: Course[] = [];

    for(let i=0; i<10; i++) {
        const course = courseRepository.create({
            code: Math.floor(Math.random() * 1000),
            title: faker.lorem.words(5),
            credit: 3.00
        });
        courses.push(course);
    }
    await courseRepository.save(courses);
    console.log("Course seeded👍");
}