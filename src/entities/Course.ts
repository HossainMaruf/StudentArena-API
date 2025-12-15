import { Entity, Column, PrimaryColumn } from "typeorm";

export enum CourseType {THEORY="Theory", LAB="Lab"}

@Entity() // @Entity('courses')
export class Course {
    @PrimaryColumn()
    code!: number;

    @Column()
    title!: string;
    
    @Column()
    credit!: number;

    @Column({type: "enum", enum: CourseType})
    type!: CourseType
}