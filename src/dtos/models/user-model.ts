import { Field, ID, ObjectType } from "type-graphql";
import { IsEmail } from "class-validator";

@ObjectType() 
export class User {
    @Field(() => ID)
    id: string;

    @Field(() => String, {nullable: true})
    name?: string;

    @Field(() => String)
    email: string;

    @Field(() => Date)
    createdAt: Date
}