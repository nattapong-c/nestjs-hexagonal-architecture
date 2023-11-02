export interface AppRepositoryInterface {
    get(): string;
}

export const AppRepositoryInterface = Symbol('AppRepositoryInterface')