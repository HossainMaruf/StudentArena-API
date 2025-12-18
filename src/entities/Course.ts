import { Entity, Column, OneToMany, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CcspCourse } from "./CcspCourse";

export enum CourseType {THEORY="theory", LAB="lab"}

// @Entity('courses')
@Entity()
export class Course {
    @PrimaryColumn()
    code!: string;

    @Column()
    title!: string;
    
    @Column({type: 'float'})
    credit!: number;

    @Column({type: "enum", enum: CourseType, default: CourseType.THEORY})
    type!: CourseType;

    @OneToMany(() => CcspCourse, (ccspCourse: CcspCourse) => ccspCourse.course)
    ccspCourses!: CcspCourse[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}