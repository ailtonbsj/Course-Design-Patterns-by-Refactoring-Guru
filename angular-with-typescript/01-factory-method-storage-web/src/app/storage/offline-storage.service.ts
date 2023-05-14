import { Observable, from, take } from 'rxjs';
import { db } from './db';
import { Module } from '../module';
import { StorageService } from './storage.service';

export class OfflineStorageService extends StorageService {
  moduleName: Module;

  constructor(moduleName: Module) {
    super();
    this.moduleName = moduleName;
  }

  override listAll<T>(): Observable<T[]> {
    return <Observable<T[]>>from(
      (async () => await db[this.moduleName].toArray())()
    ).pipe(take(1));
  }

  override save<T>(entity: T): Observable<number> {
    return from(db[this.moduleName].add(<any>entity)).pipe(take(1));
  }

  override remove(id: number): Observable<void> {
    return from(db[this.moduleName].delete(id));
  }
}
