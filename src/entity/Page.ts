import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, Int, Args } from "type-graphql";
import { Post } from "./Post";
import { PostFilterArgs } from "../arg/PostArgs";

@ObjectType()
@Entity()
export class Page {

    @Field(() => Int)
    @PrimaryGeneratedColumn({ type: "bigint" })
    public pageId: number;

    @Field(() => Int)
    @Column({ type: "bigint" })
    public postId: string;

    @Field()
    @Column()
    public content: string;

    @Field(() => Post)
    @ManyToOne(() => Post, (post) => post.pages)
    @JoinColumn({ name: "postId", referencedColumnName: "postId" })
    public post(@Args() {}: PostFilterArgs): Promise<Post> { return; }
}
