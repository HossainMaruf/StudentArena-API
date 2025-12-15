import { Entity, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";
import { Department } from "./Department";

export enum CCSP_TYPE {SEMESTER="semester", TRIMESTER="trimester", YEARLY="yearly"}

// @Entity('ccsps')
// Course Curriculum
@Entity()
export class CCSP {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Department, (department: Department) => department.ccsps)
    department!: Department;

    @OneToMany(() => Course, (course: Course) => course.ccsp)
    courses!: Object[];

    @Column()
    credits!: number;

    @Column()
    duration!: number;

    @Column({type: "enum", enum: CCSP_TYPE, default: CCSP_TYPE.SEMESTER})
    type!: CCSP_TYPE;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}