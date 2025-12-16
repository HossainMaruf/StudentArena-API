import { AppDataSource } from "../database/data-source";
import { CCSP } from "../entities/CCSP";

const ccspRepository = AppDataSource.getRepository(CCSP);

export const ccspService = {
    // Get all ccsps
    getCcsps: async (): Promise<CCSP[]> => {
        return ccspRepository.find();
    },

    // Get a ccsp by id
    getCcspById: async (id: number): Promise<CCSP | null> => {
        return ccspRepository.findOneBy({id})
    },

    // Create a new ccsp
    createCcsp: async (data: Partial<CCSP>): Promise<CCSP> => {
        const ccsp = ccspRepository.create(data);
        return ccspRepository.save(ccsp);
    },

    // Update an existing ccsp
    updateCcsp: async (id: number, data: Partial<CCSP>): Promise<CCSP | null> => {
        const ccsp = await ccspRepository.findOneBy({id});
        if(!ccsp) return null;
        Object.assign(ccsp, data);
        return ccspRepository.save(ccsp);
    },

    // Delete a ccsp
    deleteCcsp: async (id: number): Promise<boolean> => {
        const result = await ccspRepository.delete({id});
        return result.affected != 0;
    }
}