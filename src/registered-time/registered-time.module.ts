import { Module } from '@nestjs/common';
import { RegisteredTimeService } from './registered-time.service';
import { RegisteredTimeResolver } from './registered-time.resolver';

@Module({
  providers: [RegisteredTimeService, RegisteredTimeResolver]
})
export class RegisteredTimeModule {}
