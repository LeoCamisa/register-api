import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisteredTime } from './registered-time.entity/registered-time.entity';
import { RegisteredTimeService } from './registered-time.service';
import { RegisteredTimeResolver } from './registered-time.resolver';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([RegisteredTime]),
  UserModule,
],
  providers: [RegisteredTimeService, RegisteredTimeResolver],
  exports: [RegisteredTimeService],
})
export class RegisteredTimeModule {}