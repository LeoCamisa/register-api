import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { RegisteredTimeService } from './registered-time.service';
import { CreateRegisteredTimeInput } from './dto/create-registered-time.input';
import { RegisteredTimeType } from './dto/registered-time.type';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => RegisteredTimeType)
export class RegisteredTimeResolver {
  constructor(private registeredTimeService: RegisteredTimeService) {}

  @Query(() => [RegisteredTimeType])
  async registeredTimes(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('limit', { type: () => Int, nullable: true }) limit: number = 10,
    @Args('offset', { type: () => Int, nullable: true }) offset: number = 0,
  ): Promise<RegisteredTimeType[]> {
    return this.registeredTimeService.findAllByUserId(userId, limit, offset);
  }

  @Query(() => [RegisteredTimeType])
  async allRegisteredTimes(
    @Args('limit', { type: () => Int, nullable: true }) limit: number = 10,
    @Args('offset', { type: () => Int, nullable: true }) offset: number = 0,
  ): Promise<RegisteredTimeType[]> {
    return this.registeredTimeService.findAll(limit, offset);
  }

  @Mutation(() => RegisteredTimeType)
  async createRegisteredTime(@Args('input') input: CreateRegisteredTimeInput): Promise<RegisteredTimeType> {
    const newRegisteredTime = await this.registeredTimeService.create(input);
    pubSub.publish('registeredTimeAdded', { registeredTimeAdded: newRegisteredTime });
    return newRegisteredTime;
  }

  @Subscription(() => RegisteredTimeType, {
    resolve: (payload) => payload.registeredTimeAdded,
  })
  registeredTimeAdded() {
    return pubSub.asyncIterator('registeredTimeAdded');
  }
}