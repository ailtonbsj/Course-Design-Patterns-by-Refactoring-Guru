import { Observable } from "rxjs";

export interface WebStorage {
    listAll<T>(): Observable<T[]>
    save<T>(entity: T): Observable<number>
    remove(id: number): Observable<void>
}
