import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { hash, compare } from 'bcrypt'
import { sign } from "jsonwebtoken";

import { Context } from "../context";
import { SignUpInput } from "../dtos/inputs/signup-input";
import { User } from "../dtos/models/user-model";
import { UserAthenticated } from "../dtos/models/userAuthenticated-model";

@Resolver(() => User)
export class UserResolver {
    @Query(() => User, { nullable: true })
    async findUserById(
      @Arg('id') id: string,
      @Ctx() ctx: Context
    ) {
      const user = await ctx.prisma.users.findUnique({
        where: { id },
      });
      if (!user) return null;
  
      return user
    }
  
    @Query(() => [User], { nullable: true })
    async findAllUsers(
      @Arg('page') page: number,
      @Ctx() ctx: Context
    ){
      const users = await ctx.prisma.users.findMany();
      if (!users) return null;

      return users
    }

    @Mutation(() => User)
    async signUp(@Arg('data') data: SignUpInput, @Ctx() ctx: Context) {
        const hashedPassword = await hash(data.password, 10)
        
        return await ctx.prisma.users.create({ data: { ...data, password: hashedPassword } })
    }

    @Mutation(() => UserAthenticated)
    async login(@Arg('data') data: SignUpInput, @Ctx() ctx: Context) {
        const user = await ctx.prisma.users.findUnique({ where: { email: data.email} })

        if(!user){
            throw new Error('Incorrect email/password combination.')
        }

        const validation = await compare(data.password, user.password)

        if(!validation){
            throw new Error('Incorrect email/password combination.')
        }

        const token = sign({ id:user.id }, process.env.JWT_ACCESS_SECRET! , {expiresIn: '1d'})

        return { user, token}
    }

    @Mutation(() => User)
    async deleteUser(@Arg('id') id: string, @Ctx() ctx: Context) {
      return await ctx.prisma.users.delete({ where : { id }})
    }
}