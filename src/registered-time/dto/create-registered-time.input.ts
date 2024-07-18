import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateRegisteredTimeInput {
  @Field()
  time_registered: string;

  @Field(() => Int)
  userId: number;
}