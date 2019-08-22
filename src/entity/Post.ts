import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, Int, Args } from "type-graphql";
import { User } from "./User";
import { Page } from "./Page";
import { UserFilterArgs } from "../arg/UserArgs";
import { PageFilterArgs } from "../arg/PageArgs";

@ObjectType()
@Entity()
export class Post {

    @Field(() => Int)
    @PrimaryGeneratedColumn({ type: "bigint" })
    public postId: number;

    @Field(() => Int)
    @Column({ type: "bigint" })
    public userId: string;

    @Field()
    @Column()
    public title: string;

    @Field()
    @Column()
    public tag: string;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: "userId", referencedColumnName: "userId" })
    public author(@Args() {}: UserFilterArgs): Promise<User> { return; }

    @Field(() => [Page], { nullable: true })
    @OneToMany(() => Page, (page) => page.post)
    @JoinColumn({ name: "postId", referencedColumnName: "postId" })
    public pages(@Args() {}: PageFilterArgs): Promise<Page[]> { return; }
}
