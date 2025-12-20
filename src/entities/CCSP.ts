import { Entity, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { CcspCourse } from "./CcspCourse";

export enum TERM_TYPE {SEMESTER="semester", TRIMESTER="trimester", YEAR="year"}

// @Entity('ccsps')
// Course Curriculum
@Entity()
export class CCSP {
    @PrimaryGeneratedColumn()
    code!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Department, (department: Department) => department.ccsps, {nullable: false})
    department!: Department;

    @OneToMany(() => CcspCourse, (ccspCourse: CcspCourse) => ccspCourse.ccsp)
    ccspCourses!: CcspCourse[];

    @Column({type: 'float'})
    credits!: number;

    @Column({default: "4Y"}) // Total Time Period of that CCSP
    totalDuration!: string; 

    @Column({default: "6M"}) // Time Period of each term
    termDuration!: string;

    @Column() // How many terms is computed based on totalDuration and termDuration
    terms!: number;

    @Column({type: "enum", enum: TERM_TYPE, default: TERM_TYPE.SEMESTER}) // What is the name of each term said to be
    termType!: TERM_TYPE;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}