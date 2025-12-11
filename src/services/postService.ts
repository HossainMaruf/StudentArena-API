import { AppDataSource } from "../data-source";
import { Post } from "../entities/Post";

const postRepository = AppDataSource.getRepository(Post);

export const postService = {
    // Get all posts
    getAllPosts: async (): Promise<Post[]> => {
        return postRepository.find();
    },

    // Get a post by ID
    getPostById: async (id: number): Promise<Post | null> => {
        return postRepository.findOneBy({id})
    },

    // Create a new post
    createPost: async (data: Partial<Post>): Promise<Post> => {
        const post = postRepository.create(data);
        return postRepository.save(post);
    },

    // Update an existing post
    updatePost: async (id: number, data: Partial<Post>): Promise<Post | null> => {
        const post = await postRepository.findOneBy({id});
        if(!post) return null;
        Object.assign(post, data);
        return postRepository.save(post);
    },

    // Delete a post
    deletePost: async (id: number): Promise<boolean> => {
        const result = await postRepository.delete({id});
        return result.affected != 0;
    },

    // Get a post with user
    getPostWithUser: async (id: number): Promise<Post | null> => {
        return postRepository.findOne({
            where: {id},
            relations: {user: true}
        });
    }
}