import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

// @Entity('departments')
@Entity()
export class Department {
    @PrimaryColumn()
    code!: number;

    @Column()
    name!: string;

    @Column()
    abbreviation!: string; 

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}