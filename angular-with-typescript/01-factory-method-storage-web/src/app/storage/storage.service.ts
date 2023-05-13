import { Observable, from, take } from 'rxjs';
import { db } from './db';
import { Module } from '../module';

export abstract class StorageService {

  constructor() {
    this.listAll();
  }

  abstract getModuleName(): Module;

  listAll<T>(): Observable<T[]> {
    return <Observable<T[]>>from(
      (async () => await db[this.getModuleName()].toArray())()
    ).pipe(take(1));
  }

  save<T>(entity: T): Observable<number> {
    return from(db[this.getModuleName()].add(<any>entity)).pipe(take(1));
  }

  remove(id: number): Observable<void> {
    return from(db[this.getModuleName()].delete(id));
  }
}
