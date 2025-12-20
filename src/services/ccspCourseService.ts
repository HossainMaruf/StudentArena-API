import { AppDataSource } from "../database/data-source";
import { CcspCourse } from "../entities/CcspCourse";

const ccspCourseRepository = AppDataSource.getRepository(CcspCourse);

export const ccspCourseService = {
    // Get all ccspCourse
    getCcspCourses: async (): Promise<CcspCourse[]> => {
        return ccspCourseRepository.find();
    }
}