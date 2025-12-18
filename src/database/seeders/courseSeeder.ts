import {faker} from "@faker-js/faker";
import { AppDataSource } from "../data-source";
import { Course, CourseType } from "../../entities/Course";

export const courseSeeder = async () => {
    const courseRepository = AppDataSource.getRepository(Course);

    const courses: Course[] = [];

    for(let i=0; i<10; i++) {
        const course = courseRepository.create({
            code: "CSE"+(10+i),
            title: faker.book.title(), 
            credit: 3.00
        });
        courses.push(course);
    }
    await courseRepository.save(courses);
    console.log("Course seeded👍");
    return courses;
}