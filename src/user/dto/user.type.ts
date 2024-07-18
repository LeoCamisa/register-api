import { ObjectType, Field, ID } from '@nestjs/graphql';
import { RegisteredTimeType } from 'src/registered-time/dto/registered-time.type';

@ObjectType()
export class UserType {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    role: string;

    @Field(() => [RegisteredTimeType], { nullable: true })
    registeredTimes?: RegisteredTimeType[];
}