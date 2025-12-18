import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Post } from '../entities/Post';
import { Department } from '../entities/Department';
import { Course } from '../entities/Course';
import { CCSP } from '../entities/CCSP';
import { CcspCourse } from '../entities/CcspCourse';
import { env } from '../config/env';

export const AppDataSource = new DataSource({
    type: env.DB_TYPE as "mysql",
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Post, Department, Course, CCSP, CcspCourse],
    migrations: [],
    subscribers: []
});