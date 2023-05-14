import { Observable, from } from "rxjs";
import { WebStorage } from "./web-storage";
import { Module } from "../module";
import { db } from "./db";

export class IndexedDB implements WebStorage {

    constructor(private moduleName: Module) {}

    listAll<T>(): Observable<T[]> {
        return <Observable<T[]>>from(
            (async () => await db[this.moduleName].toArray())()
        );
    }

    save<T>(entity: T): Observable<number> {
        return from(db[this.moduleName].add(<any>entity));
    }
    
    remove(id: number): Observable<void> {
        return from(db[this.moduleName].delete(id));
    }
}
