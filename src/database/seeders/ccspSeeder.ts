import { AppDataSource } from "../data-source";
import { Department } from "../../entities/Department";
import { CCSP } from "../../entities/CCSP";

export async function ccspSeeder(departments: Department[]) {
    const ccspRepository = AppDataSource.getRepository(CCSP);

    const ccsps: CCSP[] = [];

    for (let i = 0; i < 5; i++) {
        const randomDeptartment = departments[Math.floor(Math.random() * departments.length)];

        const ccsp = ccspRepository.create({
            name: "CSE(6M)" + i,
            department: randomDeptartment,
            credits: 175,
            totalDuration: "4Y",
            termDuration: "6M",
            terms: 8
        });
        ccsps.push(ccsp);
    }
    await ccspRepository.save(ccsps);
    console.log("CCSP seeded👍");
    return ccsps;
}