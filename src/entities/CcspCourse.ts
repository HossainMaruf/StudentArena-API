import { Column, ManyToOne, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Entity } from "typeorm";
import { CCSP } from "./CCSP";
import { Course } from "./Course";

@Entity()
export class CcspCourse {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => CCSP, (ccsp: CCSP) => ccsp.ccspCourses)
    ccsp!: CCSP;

    @ManyToOne(() => Course, (course: Course) => course.ccspCourses)
    course!: Course;

    @Column()
    offeredTerm!: number;

    @Column({default: false})
    isOptional!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}