import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class SignUpInput {
    @IsEmail()
    @Field()
    email: string;

    @Field()
    name: string

    @Field(() => String)
    password: string;
}