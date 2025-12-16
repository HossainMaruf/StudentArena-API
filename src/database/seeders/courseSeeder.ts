import {faker} from "@faker-js/faker";
import { AppDataSource } from "../data-source";
import { Course, CourseType } from "../../entities/Course";

export const courseSeeder = async () => {
    const courseRepository = AppDataSource.getRepository(Course);

    const courses: Course[] = [];

    for(let i=0; i<10; i++) {
        const course = courseRepository.create({
            code: faker.lorem.word(),
            title: faker.lorem.words(5),
            credit: 3.00,
            type: "theory" as CourseType
        });
        courses.push(course);
    }
    await courseRepository.save(courses);
    console.log("Course seeded👍");
    return courses;
}