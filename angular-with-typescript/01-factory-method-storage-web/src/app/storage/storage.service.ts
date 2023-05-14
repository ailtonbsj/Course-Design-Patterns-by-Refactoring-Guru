import { Observable, take, tap } from "rxjs";
import { WebStorage } from "./web-storage";

export abstract class StorageService {
    abstract createStorage(): WebStorage;

    listAll<T>(): Observable<T[]> {
        const ws = this.createStorage();
        return ws.listAll<T>().pipe(
            tap(console.log),
            take(1)
        );
    }

    save<T>(entity: T): Observable<number> {
        const ws = this.createStorage();
        return ws.save(entity).pipe(
            tap(console.log),
            take(1)
        );
    }

    remove(id: number): Observable<void> {
        const ws = this.createStorage();
        return ws.remove(id).pipe(
            tap(console.log),
            take(1)
        );
    }
}