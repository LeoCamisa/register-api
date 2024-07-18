import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UserType } from './dto/user.type';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(name: string): Promise<User> {
    const newUser = this.userRepository.create({ name });
    return this.userRepository.save(newUser);
  }

  async createUser(input: CreateUserInput): Promise<UserType> {
    console.log('Received input:', input);
    try {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const user = this.userRepository.create({ ...input, password: hashedPassword });
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}