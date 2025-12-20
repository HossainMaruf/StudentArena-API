import { AppDataSource } from "../data-source";
import { Course } from "../../entities/Course";
import { CCSP } from "../../entities/CCSP";
import { CcspCourse } from "../../entities/CcspCourse";

export const ccspCourseSeeder = async (ccsps: CCSP[], courses: Course[]) => {
    const ccspCourseRepository = AppDataSource.getRepository(CcspCourse);
    const ccspCourses: CcspCourse[] = [];

    for(let i=0; i<10; i++) {
       const randomCcsp = ccsps[Math.floor(Math.random() * ccsps.length)]
       const randomCourse = courses[Math.floor(Math.random() * courses.length)]
       
       const ccspCourse = ccspCourseRepository.create({
            ccsp: randomCcsp,
            course: randomCourse,
            offeredTerm: 8
       });
       ccspCourses.push(ccspCourse);
    }
    await ccspCourseRepository.save(ccspCourses);
    console.log("CcspCourse seeded👍");
    return ccspCourses;
}