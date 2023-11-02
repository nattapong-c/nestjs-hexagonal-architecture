import { AppRepositoryInterface } from "src/domain/ports/outbound/app.repository";

export class AppRepository implements AppRepositoryInterface {
    get(): string {
        return 'done'
    }
}