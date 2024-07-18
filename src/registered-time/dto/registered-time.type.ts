import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserType } from 'src/user/dto/user.type';

@ObjectType()
export class RegisteredTimeType {
  @Field(() => Int)
  id: number;

  @Field()
  time_registered: string;

  @Field(() => UserType)
  user: UserType;
}