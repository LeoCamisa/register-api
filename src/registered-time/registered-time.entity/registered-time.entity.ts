import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from 'src/user/user.entity/user.entity';
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.registeredTimes, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
