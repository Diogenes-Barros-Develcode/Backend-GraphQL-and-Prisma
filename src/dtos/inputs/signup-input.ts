import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class SignUpInput {
    @Field()
    email: string;

    @Field(() => String)
    password: string;
}