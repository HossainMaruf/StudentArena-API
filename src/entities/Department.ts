import { Entity, Column, OneToMany, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CCSP } from "./CCSP";

// @Entity('departments')
@Entity()
export class Department {
    @PrimaryColumn()
    code!: string;

    @Column()
    name!: string;

    @Column()
    abbreviation!: string; 

    @OneToMany(() => CCSP, (ccsp: CCSP) => ccsp.department)
    ccsps!: CCSP[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}