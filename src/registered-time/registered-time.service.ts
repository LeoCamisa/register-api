import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisteredTime } from './registered-time.entity/registered-time.entity';
import { CreateRegisteredTimeInput } from './dto/create-registered-time.input';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RegisteredTimeService {
  constructor(
    @InjectRepository(RegisteredTime)
    private registeredTimeRepository: Repository<RegisteredTime>,
    private userService: UserService,
  ) {}

  async create(input: CreateRegisteredTimeInput): Promise<RegisteredTime> {
    const user = await this.userService.findById(input.userId);
    if (!user) {
      throw new Error('User not found');
    }
    const registeredTime = this.registeredTimeRepository.create({
      ...input,
      user,
    });
    const savedTime = await this.registeredTimeRepository.save(registeredTime);
    this.registeredTimeRepository.save(registeredTime);
    return savedTime;
  }

  async findAll(limit: number, offset: number): Promise<RegisteredTime[]> {
    const times = await this.registeredTimeRepository.find({
      relations: ['user'],
      order: { time_registered: 'DESC' },
      skip: offset,
      take: limit,
    });
    return times;
  }

  async findAllByUserId(userId: number, limit: number, offset: number): Promise<RegisteredTime[]> {
    const times = await this.registeredTimeRepository.find({
      where: { userId },
      relations: ['user'],
      order: { time_registered: 'DESC' },
      skip: offset,
      take: limit,
    });
    return times;
  }
}
