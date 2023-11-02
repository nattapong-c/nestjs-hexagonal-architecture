import { Inject, Injectable } from '@nestjs/common';
import { AppServiceInterface } from 'src/domain/ports/inbound/app.service';
import { AppRepositoryInterface } from 'src/domain/ports/outbound/app.repository';

@Injectable()
export class AppService implements AppServiceInterface {
  constructor(
    @Inject(AppRepositoryInterface)
    private readonly appRepository : AppRepositoryInterface
  ) {}
  
  getHello(): string {
    return this.appRepository.get();
  }
}
