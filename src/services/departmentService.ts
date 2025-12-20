import { AppDataSource } from "../database/data-source";
import { Department } from "../entities/Department";

const departmentRepository = AppDataSource.getRepository(Department);

export const departmentService = {
    // Get all departments
    getDepartments: async (): Promise<Department[]> => {
        return departmentRepository.find();
    },

    // Get a department by code
    getDepartmentByCode: async (code: string): Promise<Department | null> => {
        return departmentRepository.findOneBy({code})
    },

    // Create a new department
    createDepartment: async (data: Partial<Department>): Promise<Department> => {
        const course = departmentRepository.create(data);
        return departmentRepository.save(course);
    },

    // Update an existing department
    updateDepartment: async (code: string, data: Partial<Department>): Promise<Department | null> => {
        const course = await departmentRepository.findOneBy({code});
        if(!course) return null;
        Object.assign(course, data);
        return departmentRepository.save(course);
    },

    // Delete a department
    deleteDepartment: async (code: string): Promise<boolean> => {
        const result = await departmentRepository.delete({code});
        return result.affected != 0;
    },

    // Get department by code with all its ccsps
    getDepartmentWithCcsps: async (code: string): Promise<Department | null> => {
        return departmentRepository.findOne({where: {code}, relations: ['ccsps']})
    }
}