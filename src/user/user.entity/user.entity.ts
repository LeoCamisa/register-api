import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RegisteredTime } from 'src/registered-time/registered-time.entity/registered-time.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class User { 
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 45 })
  name: string;
    
  @Field()
  @Column({ length: 45, unique: true })
  email: string;

  @Field()
  @Column({ length: 255 })
  password: string;

  @Field()
  @Column({ length: 45 })
  role: string;

  @Field(() => [RegisteredTime])
  @OneToMany(() => RegisteredTime, registeredTime => registeredTime.user)
  registeredTimes: RegisteredTime[];
}