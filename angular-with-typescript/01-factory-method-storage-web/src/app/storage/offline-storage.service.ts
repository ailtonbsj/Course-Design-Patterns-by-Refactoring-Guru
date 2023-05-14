import { Module } from '../module';
import { StorageService } from './storage.service';
import { WebStorage } from './web-storage';
import { IndexedDB } from './indexed-db';

export class OfflineStorageService extends StorageService {
  
  constructor(private moduleName: Module) {
    super();
  }

  override createStorage(): WebStorage {
    return new IndexedDB(this.moduleName);
  }

}
