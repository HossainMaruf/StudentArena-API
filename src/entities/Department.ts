import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity() // @Entity('departments')
export class Department {
    @PrimaryColumn()
    code!: number;

    @Column()
    name!: string;

    @Column()
    abbreviation!: string; 
}