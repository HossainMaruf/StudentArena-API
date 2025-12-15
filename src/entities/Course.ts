import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export enum CourseType {THEORY="Theory", LAB="Lab"}

// @Entity('courses')
@Entity()
export class Course {
    @PrimaryColumn()
    code!: number;

    @Column()
    title!: string;
    
    @Column()
    credit!: number;

    @Column({type: "enum", enum: CourseType})
    type!: CourseType

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}