import {faker} from "@faker-js/faker";
import { AppDataSource } from "../data-source";
import { Department } from "../../entities/Department";

export const departmentSeeder = async () => {
    const departmentRepository = AppDataSource.getRepository(Department);

    const departments: Department[] = [];

    for(let i=0; i<5; i++) {
        const department = departmentRepository.create({
            code: Math.floor(Math.random() * 100).toString(),
            name: faker.company.name(),
            abbreviation: faker.lorem.word()
        });
        departments.push(department);
    }
    await departmentRepository.save(departments);
    console.log("Department seeded👍");
    return departments;
}