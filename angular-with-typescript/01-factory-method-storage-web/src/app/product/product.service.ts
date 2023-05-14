import { Injectable } from '@angular/core';
import { OfflineStorageService } from '../storage/offline-storage.service';
import { Module } from '../module';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { OnlineStorageService } from '../storage/online-storage.service';
import { StorageService } from '../storage/storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  storage: StorageService;

  constructor(private http: HttpClient) {
    const dbconf = localStorage.getItem('dbconf') || 'offline';
    if(dbconf == 'offline') {
      this.storage = new OfflineStorageService(Module.PRODUCT);
    } else {
      this.storage = new OnlineStorageService(Module.PRODUCT, http);
    }
  }

  listAll(): Observable<Product[]> {
    return this.storage.listAll<Product>();
  }

  save(entity: Product): Observable<number> {
    return this.storage.save<Product>(entity);
  }

  remove(id: number): Observable<void> {
    return this.storage.remove(id);
  }

}
