import { Observable } from "rxjs";

export abstract class StorageService {
    abstract listAll<T>(): Observable<T[]>;
    abstract save<T>(entity: T): Observable<number>;
    abstract remove(id: number): Observable<void>;
}