import { AppDataSource } from "../database/data-source";
import { CCSP } from "../entities/CCSP";

const ccspRepository = AppDataSource.getRepository(CCSP);

export const ccspService = {
    // Get all ccsps
    getCcsps: async (): Promise<CCSP[]> => {
        return ccspRepository.find();
    },

    // Get a ccsp by code
    getCcspByCode: async (code: number): Promise<CCSP | null> => {
        return ccspRepository.findOneBy({code})
    },

    // Create a new ccsp
    createCcsp: async (data: Partial<CCSP>): Promise<CCSP> => {
        const ccsp = ccspRepository.create(data);
        return ccspRepository.save(ccsp);
    },

    // Update an existing ccsp
    updateCcsp: async (code: number, data: Partial<CCSP>): Promise<CCSP | null> => {
        const ccsp = await ccspRepository.findOneBy({code});
        if(!ccsp) return null;
        Object.assign(ccsp, data);
        return ccspRepository.save(ccsp);
    },

    // Delete a ccsp
    deleteCcsp: async (code: number): Promise<boolean> => {
        const result = await ccspRepository.delete({code});
        return result.affected != 0;
    }
}