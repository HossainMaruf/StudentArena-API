import { AppDataSource } from "../database/data-source";
import { Course } from "../entities/Course";

const courseRepository = AppDataSource.getRepository(Course);

export const courseService = {
    // Get all courses
    getCourses: async (): Promise<Course[]> => {
        return courseRepository.find();
    },

    // Get a course by code
    getCourseByCode: async (code: string): Promise<Course | null> => {
        return courseRepository.findOneBy({code})
    },

    // Create a new course
    createCourse: async (data: Partial<Course>): Promise<Course> => {
        const course = courseRepository.create(data);
        return courseRepository.save(course);
    },

    // Update an existing course
    updateCourse: async (code: string, data: Partial<Course>): Promise<Course | null> => {
        const course = await courseRepository.findOneBy({code});
        if(!course) return null;
        Object.assign(course, data);
        return courseRepository.save(course);
    },

    // Delete a course
    deleteCourse: async (code: string): Promise<boolean> => {
        const result = await courseRepository.delete({code});
        return result.affected != 0;
    }
}