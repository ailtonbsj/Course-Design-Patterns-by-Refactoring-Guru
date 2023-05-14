import { Injectable } from '@angular/core';
import { OfflineStorageService } from '../storage/offline-storage.service';
import { Module } from '../module';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { OnlineStorageService } from '../storage/online-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  storage: OfflineStorageService;

  constructor(private http: HttpClient) {
    const dbconf = localStorage.getItem('dbconf') || 'offline';
    if(dbconf == 'offline') {
      this.storage = new OfflineStorageService(Module.CATEGORY);
    } else {
      this.storage = new OnlineStorageService(Module.CATEGORY, http);
    }
  }

  listAll(): Observable<Category[]> {
    return this.storage.listAll<Category>();
  }

  save(entity: Category): Observable<number> {
    return this.storage.save<Category>(entity);
  }

  remove(id: number): Observable<void> {
    return this.storage.remove(id);
  }
}
