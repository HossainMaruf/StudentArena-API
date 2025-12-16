import { AppDataSource } from "../data-source";
import { Department } from "../../entities/Department";
import { Course } from "../../entities/Course";
import { CCSP } from "../../entities/CCSP";

export const ccspSeeder = async (departments: Department[], courses: Course[]) => {
    const ccspRepository = AppDataSource.getRepository(CCSP);

    const ccsps: CCSP[] = [];

    for(let i=0; i<1; i++) {
        const randomDeptartment = departments[Math.floor(Math.random() * departments.length)];
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];

        const ccsp = ccspRepository.create({
            department: randomDeptartment,
            courses: [randomCourse, randomCourse],
            offerdTerm: [1, 2],
            isOptional: [false, false],
            credits: 175,
            totalDuration: "4Y",
            termDuration: "6M",
            terms: 8,
        });
        ccsps.push(ccsp);
    }
    await ccspRepository.save(ccsps);
    console.log("CCSP seeded👍");
}