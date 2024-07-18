import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field()
  role: string;

  @Field()
  user_name: string;

  @Field()
  user_id: string;
}