import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export const userService = {
    // Get all users
    getAllUsers: async (): Promise<User[]> => {
        return userRepository.find();
    },

    // Get a user by ID
    getUserById: async (id: number): Promise<User | null> => {
        return userRepository.findOneBy({id})
    },

    // Get a user by Email
    getUserByEmail: async (email: string): Promise<User | null> => {
        return userRepository.findOneBy({email});
    },

    // Create a new user
    createUser: async (data: Partial<User>): Promise<User> => {
        const user = userRepository.create(data);
        return userRepository.save(user);
    },

    // Update an existing user
    updateUser: async (id: number, data: Partial<User>): Promise<User | null> => {
        const user = await userRepository.findOneBy({id});
        if(!user) return null;
        Object.assign(user, data);
        return userRepository.save(user);
    },

    // Delete a user
    deleteUser: async (id: number): Promise<boolean> => {
        const result = await userRepository.delete({id});
        return result.affected != 0;
    },

    // Get a user with all posts
    getUserWithPosts: async(id: number): Promise<User | null> => {
        const user = await userRepository.findOne({
            where: {id},
            relations: {posts: true}
        });
        return user;
    }
}