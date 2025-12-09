import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity() // @Entity("posts")
export class Post {
   @PrimaryGeneratedColumn() 
   id!: number;

   @Column({length: 500})
   desc!: string;

   @Column({nullable: true})
   img!: string

   @Column({nullable: true, type: "json"})
   likes!: string[];

   @Column({nullable: true, type: "json"})
   comments!: string[];

   @CreateDateColumn()
   createdAt!: Date;

   @UpdateDateColumn()
   updatedAt!: Date;

   @ManyToOne(() => User, (user: User) => user.posts, {onDelete: "CASCADE", nullable: false})
   user!: User;
}