import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Post } from "./Post";

export enum UserRole { ADMIN = "admin", USER = "user", GUEST = "guest" }
export enum RelationType { SINGLE = "single", MARRIED = "married", COMPLICATED = "complicated"}

@Entity() // @Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 30})
    name!: string;

    @Column({unique: true, length: 50})
    email!: string;

    @Column({length: 256})
    password!: string;

    @Column({nullable: true})
    age!: number;

    @Column({nullable: true})
    profilePicture!: string;

    @Column({nullable: true})
    coverPicture!: string;

    @Column({nullable: true, type: "json"})
    followers!: string[];

    @Column({nullable: true, type: "json"})
    followings!: string[];

    @Column({type: "enum", enum: UserRole, default: UserRole.USER})
    role!: UserRole

    @Column({nullable: true, length: 50})
    city!: string;

    @Column({nullable: true, length: 50})
    bio!: string

    @Column({type: "enum", enum: RelationType, default: RelationType.SINGLE})
    relationship!: RelationType

    @Column({nullable: true})
    refreshToken!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => Post, (post: Post) => post.user, { cascade: true })
    posts!: Post[];
}