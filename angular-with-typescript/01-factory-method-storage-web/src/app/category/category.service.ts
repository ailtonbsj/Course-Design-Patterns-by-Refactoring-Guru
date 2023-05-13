import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Module } from '../module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends StorageService {

  override getModuleName(): Module {
    return Module.PRODUCT;
  }
  
}
