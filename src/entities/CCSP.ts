import { Entity, Column, ManyToOne, ManyToMany, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinTable, JoinColumn } from "typeorm";
import { Course } from "./Course";
import { Department } from "./Department";

export enum TERM_TYPE {SEMESTER="semester", TRIMESTER="trimester", YEAR="year"}

// @Entity('ccsps')
// Course Curriculum
@Entity()
export class CCSP {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Department, (department: Department) => department.ccsps)
    department!: Department;

    @ManyToMany(() => Course, (course: Course) => course.ccsps)
    @JoinTable({
        name: "ccsp_course",
        joinColumn: {
            name: "ccsp_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "course_id",
            referencedColumnName: "code"
        }
    })
    courses!: Course[];

    @Column({type: "json"}) // Form inputed value
    offerdTerm!: number[];

    @Column({type: "json"}) //  Form inputed value
    isOptional!: boolean[];

    @Column() // Computed value based on courses column
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