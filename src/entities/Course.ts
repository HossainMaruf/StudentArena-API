import { Entity, Column, ManyToMany, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CCSP } from "./CCSP";

export enum CourseType {THEORY="theory", LAB="lab"}

// @Entity('courses')
@Entity()
export class Course {
    @PrimaryColumn()
    code!: string;

    @Column()
    title!: string;
    
    @Column()
    credit!: number;

    @Column({type: "enum", enum: CourseType})
    type!: CourseType;

    @ManyToMany(() => CCSP, (ccsp: CCSP) => ccsp.courses)
    ccsps!: CCSP[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}