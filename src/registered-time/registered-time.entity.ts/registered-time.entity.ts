import { Entity, PrimaryGeneratedColumn, Column,} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class RegisteredTime {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  time_registered: string;

  @Field(() => Int)
  @Column({ nullable: false })
  userId: number;
}