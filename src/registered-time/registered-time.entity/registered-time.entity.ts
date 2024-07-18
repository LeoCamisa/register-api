import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from 'src/user/user.entity/user.entity';
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

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.registeredTimes, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}