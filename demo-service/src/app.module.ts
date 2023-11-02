import { Module } from '@nestjs/common';
import { AppController } from './interface/app.controller';
import { AppService } from './application/app.service';
import { AppRepositoryInterface } from './domain/ports/outbound/app.repository';
import { AppRepository } from './infrastructure/app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: AppRepositoryInterface,
    useClass: AppRepository
  }],
})
export class AppModule {}
