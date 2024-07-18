import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UserType } from './dto/user.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  async users(): Promise<UserType[]> {
    return this.userService.findAll();
  }

  @Query(() => UserType, { name: 'user' })
  async getUser(@Args('id', { type: () => Number }) id: number): Promise<UserType> {
    return this.userService.findById(id);
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: CreateUserInput): Promise<UserType> {
    return this.userService.createUser(input);
  }
}