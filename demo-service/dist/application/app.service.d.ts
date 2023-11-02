import { AppServiceInterface } from 'src/domain/ports/inbound/app.service';
import { AppRepositoryInterface } from 'src/domain/ports/outbound/app.repository';
export declare class AppService implements AppServiceInterface {
    private readonly appRepository;
    constructor(appRepository: AppRepositoryInterface);
    getHello(): string;
}
