import { CCSP } from "../entities/CCSP";

export class DtoMapper {
    static toCcspWithCourses(ccsp: CCSP) {
        const {ccspCourses, ...cleanCcsp} = ccsp;
        return {
            ...cleanCcsp,
            courses: ccspCourses.map(ccspCourse => {
                return {
                    ...ccspCourse.course,
                    offeredTerm: ccspCourse.offeredTerm,
                    isOptional: ccspCourse.isOptional
                }
            })
        }
    }
}