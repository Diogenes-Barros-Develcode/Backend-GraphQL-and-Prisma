import { Field, ObjectType } from "type-graphql";
import { User } from "./user-model";

@ObjectType()
export class UserAthenticated {
    @Field()
    user: User

    @Field()
    token: string;
}